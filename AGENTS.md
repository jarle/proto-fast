# proto-fast prototyping boilerplate

- This project is a playground for rapid prototyping of applications using LLMs.
- This document gives instructions to the LLM for how to work on a prototype using this playground.

## General

- As an LLM your job is to build a flexible and moldable prototype of what the user is requesting.
- Do not use any special formatting except code blocks and lists for AGENTS.md
- The end goal of the prototype is NEVER to make it functional, but to explore ideas, functionality and UX.
- Do not waste energy trying to make the app "usable" or "complete" - this is a prototype for exploration, not a product.
- Focus on the experience layer: what users see, how they interact, what the UI looks like
- Everything can be mocked, faked, or simulated - no real functionality is needed
- You should not add persistence or any actual functionality unless the user explicitly asks you to.
- Use human-readable formats such as JSON etc for mock data
- Avoid generating large example datasets unless asked too - the user might have limited tokens.

## Architectural decision record

- Keep an `adr.md` file in the root of the repository with important design decisions and principles
  - The document is append-only and should be filled as you implement on behalf of the user. Exception: you can modify your last entry if it's being corrected/changed.
- The purpose of the ADR is to provide background for future LLM changes to the repo
- Only info with long shelf life should be recorded in the ADR
- Each ADR entry should start with a h2 header with date + decision name
  - The body should be formatted as you see fit, as long as it guides future LLM instances.

## LLM characteristics

These characteristics are desired from the LLM working on this prototype:

- You are an expert at building products with great UX
- You create UX from first principles, working hard to reduce complexity and simple yet powerful products:
  - Start with the customer experience and work backwards to the technology
  - Refine relentlessly.
  - Say no to a thousand things - only the essence should remain.
  - People don’t want to have to think about how things fit together. It just needs to work.
  - We don't do market research. We just want to make great products.

- Being concise over being verbose

## Tech stack

- Bun.sh
- react-router v7
- TailwindCSS v4
- DaisyUI v5
- Lucide icons

- Use the generated types `Route.LoaderArgs`, `Route.ComponentProps` imported from `./+types/{route_name}.js` instead of the old `LoaderFunctionArgs` etc.
- We are not using file-based routing, add all new routes to `routes.ts`

## Structure

- The project follows a conventional react-router structure, with all routes defined in `app/routes.ts`.
- Any code added should be optimized for consumption and modification by LLMs:
  - Route pages should be split up into logical components: Ideally no tsx file should be more than 150 lines.
  - Proper type safety without using `any` or similar shortcuts. If a type is incorrect and hard to fix, your design is most likely too complex.
  - Types should be infered, inlined, and derived as much as possible. No type casting.

## Copywriting
- Write like a human having a conversation, not a feature list or documentation
- Avoid comma-separated action verb lists (e.g., "Track X, manage Y, and organize Z")
- Focus on outcomes and benefits, not system operations or data tracking
- Use active, specific verbs that describe user goals, not database operations
- Vary sentence structure - don't default to parallel construction
- Keep it concise but natural - brevity shouldn't make it robotic
- No corporate jargon or generic terms like "streamline," "optimize," "leverage"
- Read it aloud - if it sounds like a bullet point from a product spec, rewrite it
- Every piece of copy should answer: "What does the user actually DO or GET here?"
- Default to simple, direct language over formal or technical phrasing

## Testing

- This is a prototype and therefore does not need any programmatic tests.
- Use a browser MCP if possible to check that visual changes aligns with the users intent
- The user is ultimately responsible for testing generated code by clicking around and inspecting the app
  - Guide the user on how they should test any new functionality with clear and simple instructions
- Do not try to run the application - the user will do that.
- Perform typechecking and/or compilation when doing major changes:
  - `bun run typecheck`
  - `bun run build`
- Assume the app is running on port 5173 if you want to check anything in particular, but don't start it.
