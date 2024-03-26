import { NextRequest, NextResponse } from "next/server";
import { generateRandomNodesWithConnections } from "./nodeGenerators";

export async function GET(
  req: NextRequest,
  { params }: { params: { doc: string } }
) {
  const documentID = params.doc;

  const { nodes: randomNodes, connections: randomConnections } =
    generateRandomNodesWithConnections();
  return NextResponse.json({
    message: "This is a GET request",
    documentID: documentID,
    data: {
      nodes: randomNodes,
      connections: randomConnections,
    },
    id: documentID,
  });
}
