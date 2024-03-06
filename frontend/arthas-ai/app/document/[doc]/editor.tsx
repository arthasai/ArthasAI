"use client";

import React from "react";

import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/react/style.css";

// Our <Editor> component we can reuse later
export default function Editor() {
  // Renders the editor instance using a React component.
  const editor = useCreateBlockNote({});

  return <BlockNoteView editor={editor} theme="light" />;
}
