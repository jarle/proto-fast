import type { Route } from "./+types/examples";
import { Link } from "react-router";
import { FileCode, Layout, Database, Layers } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Examples - ProtoFast" },
    { name: "description", content: "Example patterns for ProtoFast applications" },
  ];
}

const examples = [
  {
    title: "Component Patterns",
    description: "Reusable components with proper TypeScript types",
    icon: <Layers className="w-6 h-6" />,
    status: "Example pattern",
    color: "primary",
  },
  {
    title: "Layout Systems",
    description: "Nested routes with shared layouts using React Router v7",
    icon: <Layout className="w-6 h-6" />,
    status: "Example pattern",
    color: "secondary",
  },
  {
    title: "Mock Data",
    description: "Human-readable JSON data structures for rapid iteration",
    icon: <Database className="w-6 h-6" />,
    status: "Example pattern",
    color: "accent",
  },
  {
    title: "Route Organization",
    description: "File structure optimized for LLM consumption",
    icon: <FileCode className="w-6 h-6" />,
    status: "Example pattern",
    color: "info",
  },
];

export default function Examples() {
  const colorClasses = {
    primary: "from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40",
    secondary: "from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/40",
    accent: "from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40",
    info: "from-info/10 to-info/5 border-info/20 hover:border-info/40",
  };

  const iconColorClasses = {
    primary: "bg-primary/20 text-primary",
    secondary: "bg-secondary/20 text-secondary",
    accent: "bg-accent/20 text-accent",
    info: "bg-info/20 text-info",
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Example Patterns
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-6" />
        <p className="text-xl text-base-content/80">
          Common patterns and approaches for building with ProtoFast.
          These examples demonstrate how to structure your prototype for rapid iteration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {examples.map((example) => (
          <div
            key={example.title}
            className={`card bg-gradient-to-br ${colorClasses[example.color as keyof typeof colorClasses]} border transition-all hover:scale-105 hover:shadow-xl`}
          >
            <div className="card-body">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${iconColorClasses[example.color as keyof typeof iconColorClasses]}`}>
                  {example.icon}
                </div>
                <div className="flex-1">
                  <h2 className="card-title text-lg mb-2">{example.title}</h2>
                  <p className="text-sm text-base-content/70 mb-3">
                    {example.description}
                  </p>
                  <div className={`badge badge-sm badge-outline badge-${example.color}`}>{example.status}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="alert bg-gradient-to-r from-info/20 to-info/10 border border-info/30">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 className="font-bold text-info">Quick Tip</h3>
          <div className="text-sm">
            When working with an LLM, describe what you want to build and let it create
            the structure. ProtoFast's conventions make it easy for AI assistants to
            generate consistent, maintainable code.
          </div>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <Link to="/" className="btn btn-outline hover:scale-105 transition-all">
          Back to Home
        </Link>
        <Link to="/about" className="btn btn-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all">
          Learn More
        </Link>
      </div>
    </div>
  );
}
