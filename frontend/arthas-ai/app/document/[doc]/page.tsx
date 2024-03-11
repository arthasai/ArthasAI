"use client";

import React, { use, useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { ImperativePanelHandle, collapsePanel } from "../utils";
import { BlockNoteView, useCreateBlockNote } from "@blocknote/react";
import { PartialBlock } from "@blocknote/core";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./editor"), { ssr: false });

function DocumentEditor() {
  const rightPanelRef = useRef<ImperativePanelHandle>(null);

  const handleCollapseRightPanel = () => {
    collapsePanel(rightPanelRef.current);
  };

  return (
    <div className="h-screen w-screen">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel id="reader" className="w-full" defaultSize={50}>
          Document
          <Button onClick={handleCollapseRightPanel}>Collapse</Button>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          id="right-panel"
          className="w-full"
          collapsible
          defaultSize={50}
          minSize={30}
          maxSize={60}
          ref={rightPanelRef}
        >
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel>
              <Editor />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel></ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default DocumentEditor;
