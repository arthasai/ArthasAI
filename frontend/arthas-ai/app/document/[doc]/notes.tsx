"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useAutosave } from "react-autosave";

import { BlockNoteView } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/app/utils/providers/authProvider";
import { createClient } from "@/app/utils/supabase/client";
import { getCurrentDate } from "@/app/utils/databaseUtils";

export default function Editor({ params }: { params: { doc: string } }) {
  const [blocks, setBlocks] = useState<PartialBlock[]>([
    {
      id: "268ef9f5-b2eb-4575-ba12-ea99d5d922e2",
      type: "paragraph",
      props: {
        textColor: "default",
        backgroundColor: "default",
        textAlignment: "left",
      },
      content: [],
      children: [],
    },
  ]);

  const supabase = createClient();

  const { toast } = useToast();

  const fetching = useQuery({
    enabled: true,
    staleTime: Infinity,
    queryKey: [`/document/${params.doc}/notesAPI/get`],
    queryFn: async () => {
      const res = await supabase
        .from("user_notes")
        .select("*")
        .eq("id", params.doc);

      if (res.error) {
        throw new Error(res.error.message);
      }
      return res.data as PartialBlock[];
    },
    select(data) {
      return JSON.parse(data[0].content as string) as PartialBlock[];
    },
  });

  const update = useMutation({
    mutationKey: [`/document/${params.doc}/editor/api/update`],
    mutationFn: async () => {
      try {
        await supabase
          .from("user_notes")
          .upsert([
            {
              id: params.doc,
              docment_id: params.doc,
              content: JSON.stringify(blocks),
              modified_at: getCurrentDate(),
            },
          ])
          .then((res) => {
            if (res.error) {
              throw new Error(res.error.message);
            }
            toast({
              title: "Saved!",
              description: "Your changes have been saved.",
            });
            return res.data;
          });
      } catch (error) {
        toast({
          title: "Error!",
          description: `Error Message: ${error}. \n Refresh to try again.`,
          variant: "destructive",
        });
      }
    },
  });

  useEffect(() => {
    const handleSave = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "s") {
        e.preventDefault();
        update.mutate();
      }
    };
    window.addEventListener("keydown", handleSave);
    return () => {
      window.removeEventListener("keydown", handleSave);
    };
  }, []);

  const editor = useMemo(() => {
    if (fetching.data) {
      return BlockNoteEditor.create({
        initialContent: fetching.data as PartialBlock[],
      });
    } else {
      return undefined;
    }
  }, [fetching.data]);

  return (
    <>
      {editor && (
        <BlockNoteView
          editor={editor}
          theme="light"
          onChange={() => {
            console.log("changed");
            setBlocks(editor.document);
          }}
        />
      )}
    </>
  );
}
