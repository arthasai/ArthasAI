import React, { createContext, useContext, useState } from "react";

export const DocumentDataContext = createContext<{
  documentData: any;
  setDocumentData: (data: any) => void;
  notesData: any;
  setNotesData: (data: any) => void;
  nodeGraphData: any;
  setNodeGraphData: (data: any) => void;
}>({
  documentData: null,
  setDocumentData: () => {},
  notesData: null,
  setNotesData: () => {},
  nodeGraphData: null,
  setNodeGraphData: () => {},
});

// TODO: might have to implement some sort of DocumentData provider
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [documentData, setDocumentData] = useState();
  const [notesData, setNotesData] = useState();
  const [nodeGraphData, setNodeGraphData] = useState();

  return (
    <DocumentDataContext.Provider
      value={{
        documentData,
        setDocumentData,
        notesData,
        setNotesData,
        nodeGraphData,
        setNodeGraphData,
      }}
    >
      {children}
    </DocumentDataContext.Provider>
  );
}

export const useDocumentData = () => {
  return useContext(DocumentDataContext);
};
