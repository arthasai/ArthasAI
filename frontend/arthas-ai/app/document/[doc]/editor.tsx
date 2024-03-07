"use client";

import React, { useEffect, useState } from "react";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { PartialBlock } from "@blocknote/core";

export default function Editor() {
  const [blocks, setBlocks] = useState<PartialBlock[]>([]);

  const editor = useCreateBlockNote({});

  useEffect(() => {
    console.log(blocks);
  }, [blocks]);

  return (
    <BlockNoteView
      editor={editor}
      theme="light"
      onChange={() => {
        setBlocks(editor.document);
      }}
    />
  );
}
