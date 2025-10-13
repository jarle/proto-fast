# ProtoFast

A rapid prototyping playground for building LLM-assisted applications.
ProtoFast provides a streamlined environment for quickly iterating on UI concepts and application flows with AI assistance.

## What is ProtoFast?

ProtoFast is a boilerplate optimized for LLM-driven development.
It's designed to help you quickly prototype applications by providing a flexible, moldable foundation that works seamlessly with AI coding assistants.

**Key Principles:**
- Focus on rapid iteration over production-readiness
- Human-readable mock data (JSON)
- No persistence by default - add only when needed
- Optimized codebase structure for LLM consumption and modification

## Quickstart

Create a new ProtoFast project:

```bash
npx create-react-router@latest --template jarle/proto-fast
```

Then start the development server:

```bash
bun run dev
```

Your application will be available at `http://localhost:5173`.

## Tech Stack

- **Runtime:** Bun.sh
- **Framework:** React Router v7
- **Styling:** TailwindCSS v4 + DaisyUI v5
- **Icons:** Lucide
- **Language:** TypeScript

## Working with LLMs

This project includes an [app/CLAUDE.md](app/CLAUDE.md) file with instructions for LLMs working on your prototype.
Key guidelines:

- Keep route pages under 150 lines by splitting into logical components
- Use proper type safety (no `any` types)
- Infer and derive types rather than casting
- Maintain an `adr.md` file for important design decisions

## Type Checking

```bash
bun run typecheck
bun run build
```

## Philosophy

ProtoFast is a playground, not a production template.
Generate, iterate, and experiment freely.
Add real functionality only when you're ready to move beyond prototyping.

---

Built for rapid prototyping with LLMs.
