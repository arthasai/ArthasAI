"use client";

import { toast } from "@/components/ui/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: -100, y: 100 }, data: { label: "2" } },
  { id: "3", position: { x: 100, y: 200 }, data: { label: "3" } },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e1-3", source: "1", target: "3" },
];

function Flow({ params }: { params: { doc: string } }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const fetching = useQuery({
    queryKey: [`/document/${params.doc}/editor/api/fetch`],
    queryFn: async () => {
      try {
        // TODO Fetch all document information via supabase
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

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
      <Background color="#BFDBFE" variant={BackgroundVariant.Lines} />
    </ReactFlow>
  );
}

export default Flow;
