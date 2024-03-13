"use client";

import React, { useState } from "react";
import { useAutosave } from "react-autosave";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { PartialBlock } from "@blocknote/core";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";

export default function Editor({ params }: { params: { doc: string } }) {
  const [blocks, setBlocks] = useState<PartialBlock[]>([]);
  const { toast } = useToast();

  const fetching = useQuery({
    queryKey: [`/document/${params.doc}/editor/api/fetch`],
    queryFn: async () => {
      try {
        // TODO Fetch all document information via supabase
        const res = await fetch(`/document/${params.doc}/notesAPI`, {
          method: "GET",
        });
        return res.json();
      } catch (error) {
        toast({
          title: "Error!",
          description: `Error Message: ${error}. \n Refresh to try again.`,
          variant: "destructive",
        });
        throw error;
      }
    },
  });

  const update = useMutation({
    mutationKey: [`/document/${params.doc}/editor/api/update`],
    mutationFn: async () => {
      try {
        // TODO modify function to update document via supabase
        const res = await fetch(`/document/${params.doc}/notesAPI`, {
          method: "POST",
        });
        return res.json();
      } catch (error) {
        toast({
          title: "Error!",
          description: `Error Message: ${error}. \n Refresh to try again.`,
          variant: "destructive",
        });
        throw error;
      }
    },
  });

  const editor = useCreateBlockNote({
    defaultStyles: false,
  });

  useAutosave({
    data: blocks,
    onSave: (data) => {
      const jsonData = JSON.stringify(data);
      console.log("Autosave", jsonData);
    },
  });

  return (
    <>
      <BlockNoteView
        editor={editor}
        theme="light"
        onChange={() => {
          setBlocks(editor.document);
        }}
      />
    </>
  );
}
