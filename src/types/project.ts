export type TopologyRole =
  | "client"
  | "server"
  | "database"
  | "genai"
  | "logic";

export type TopologyNode = {
  id: string;
  role: TopologyRole;
  label: string;
  detail: string;
};

export type TopologyEdge = {
  from: string;
  to: string;
  bidirectional?: boolean;
};

export type ProjectMetric = { label: string; value: string };

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  achievements: string[];
  imageSrc: string;
  imageAlt: string;
  url?: string;
  flagship?: boolean;
  topology: {
    nodes: TopologyNode[];
    edges: TopologyEdge[];
    metrics: ProjectMetric[];
  };
};
