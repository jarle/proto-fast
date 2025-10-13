import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Rocket, Zap, Code } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ProtoFast - Rapid Prototyping Playground" },
    { name: "description", content: "A rapid prototyping playground for building LLM-assisted applications" },
  ];
}

export default function Home() {
  return (
    <div className="relative">
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(var(--p) / 0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Accent gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-accent/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="hero min-h-[60vh]">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ProtoFast
              </h1>
              <p className="text-xl mb-8 text-base-content/80">
                A rapid prototyping playground for building LLM-assisted applications.
                Start building immediately with a flexible, moldable foundation.
              </p>

              <div className="flex gap-4 justify-center mb-12">
                <Link to="/examples" className="btn btn-primary btn-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  View Examples
                </Link>
                <Link to="/about" className="btn btn-outline btn-lg hover:scale-105 transition-all">
                  Learn More
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="card bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all hover:scale-105 hover:shadow-xl">
                  <div className="card-body items-center text-center">
                    <div className="p-3 bg-primary/20 rounded-xl mb-2">
                      <Rocket className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="card-title text-lg">Fast Setup</h3>
                    <p className="text-sm text-base-content/70">Zero configuration. Start prototyping immediately.</p>
                  </div>
                </div>

                <div className="card bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105 hover:shadow-xl">
                  <div className="card-body items-center text-center">
                    <div className="p-3 bg-secondary/20 rounded-xl mb-2">
                      <Code className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="card-title text-lg">LLM Optimized</h3>
                    <p className="text-sm text-base-content/70">Clean structure designed for AI-assisted development.</p>
                  </div>
                </div>

                <div className="card bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all hover:scale-105 hover:shadow-xl">
                  <div className="card-body items-center text-center">
                    <div className="p-3 bg-accent/20 rounded-xl mb-2">
                      <Zap className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="card-title text-lg">Modern Stack</h3>
                    <p className="text-sm text-base-content/70">React Router v7, TailwindCSS v4, DaisyUI v5.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
