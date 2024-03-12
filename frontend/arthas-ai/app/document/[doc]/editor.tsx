"use client";

import React, { useEffect, useState } from "react";
import { Autosave, useAutosave } from "react-autosave";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";
import { PartialBlock } from "@blocknote/core";

export default function Editor() {
  const [blocks, setBlocks] = useState<PartialBlock[]>([]);

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
    <BlockNoteView
      editor={editor}
      theme="light"
      onChange={() => {
        setBlocks(editor.document);
      }}
    />
  );
}
