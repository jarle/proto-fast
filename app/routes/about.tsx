import type { Route } from "./+types/about";
import { Link } from "react-router";
import { BookOpen, GitBranch, Sparkles } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - ProtoFast" },
    { name: "description", content: "Learn about ProtoFast's philosophy and approach" },
  ];
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        About ProtoFast
      </h1>
      <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-8" />

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-base-content/80 mb-8">
          ProtoFast is a boilerplate optimized for LLM-driven development.
          It's designed to help you quickly prototype applications by providing
          a flexible, moldable foundation that works seamlessly with AI coding assistants.
        </p>

        <div className="grid gap-6 my-12">
          <div className="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:shadow-lg transition-all">
            <div className="card-body">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/20 rounded-lg">
                  <Sparkles className="w-6 h-6 text-accent flex-shrink-0" />
                </div>
                <div>
                  <h3 className="card-title text-lg mb-2">Rapid Iteration</h3>
                  <p className="text-sm text-base-content/70">
                    Focus on rapid iteration over production-readiness.
                    Generate, iterate, and experiment freely.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:shadow-lg transition-all">
            <div className="card-body">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
                </div>
                <div>
                  <h3 className="card-title text-lg mb-2">LLM Optimized</h3>
                  <p className="text-sm text-base-content/70">
                    Code structure optimized for LLM consumption and modification.
                    Keep files under 150 lines, use proper types, and maintain clean architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:shadow-lg transition-all">
            <div className="card-body">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/20 rounded-lg">
                  <GitBranch className="w-6 h-6 text-secondary flex-shrink-0" />
                </div>
                <div>
                  <h3 className="card-title text-lg mb-2">Flexible Foundation</h3>
                  <p className="text-sm text-base-content/70">
                    Human-readable mock data, no persistence by default.
                    Add real functionality only when you're ready to move beyond prototyping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li><strong>Runtime:</strong> Bun.sh</li>
          <li><strong>Framework:</strong> React Router v7</li>
          <li><strong>Styling:</strong> TailwindCSS v4 + DaisyUI v5</li>
          <li><strong>Icons:</strong> Lucide React</li>
          <li><strong>Language:</strong> TypeScript</li>
        </ul>

        <div className="flex gap-4 mt-8">
          <Link to="/examples" className="btn btn-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            View Examples
          </Link>
          <a
            href="https://github.com/jarle/proto-fast"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline hover:scale-105 transition-all"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
