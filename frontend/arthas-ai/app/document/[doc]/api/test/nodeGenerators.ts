type PaperNode = {
  id: string;
  data: { label: string };
  position: { x: number; y: number };
};

type Edge = {
  id: string;
  source: string;
  target: string;
  type: string;
  animated: boolean;
};

const edgeType = "smoothstep";

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate random nodes
function generateRandomNodes(): PaperNode[] {
  const numNodes = getRandomInt(5, 10);
  const nodes: PaperNode[] = [];
  for (let i = 1; i <= numNodes; i++) {
    nodes.push({
      id: `${i}`,
      data: { label: `node ${i}` },
      position: { x: 0, y: 0 },
    });
  }
  return nodes;
}

// Function to generate random connections between nodes
function generateRandomConnections(nodes: PaperNode[]): Edge[] {
  const connections: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    const sourceNode = nodes[i];
    const numberOfConnections = getRandomInt(0, nodes.length - 1); // Generate a random number of connections
    for (let j = 0; j < numberOfConnections; j++) {
      const targetIndex = getRandomInt(0, nodes.length - 1);
      if (targetIndex !== i) {
        // Ensure the source node doesn't connect to itself
        const targetNode = nodes[targetIndex];
        connections.push({
          id: `e${sourceNode.id}-${targetNode.id}`,
          source: sourceNode.id,
          target: targetNode.id,
          type: edgeType,
          animated: true,
        });
      }
    }
  }
  return connections;
}

// Function to generate random nodes with connections
export function generateRandomNodesWithConnections(): {
  nodes: PaperNode[];
  connections: Edge[];
} {
  const nodes = generateRandomNodes();
  const connections = generateRandomConnections(nodes);
  return { nodes, connections };
}
