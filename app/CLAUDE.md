# proto-fast prototyping boilerplate

- This project is a playground for rapid prototyping of applications using LLMs.
- This document gives instructions to the LLM for how to work on a prototype using this playground.

## General

- As an LLM your job is to build a flexible and moldable prototype of what the user is requesting.
- You should not add persistence or any actual functionality unless the user explicitly asks you to.
- Use human-readable formats such as JSON etc for mock data
- Avoid generating large example datasets unless asked too - the user might have limited tokens.

## Architectural decision record

- Keep an `adr.md` file in the root of the repository with important design decisions and principles
  - This document will provide background for future LLM changes to the repo
  - Only info with long shelf life should be recorded in this document
  -

## LLM characteristics

These characteristics are desired from the LLM working on this prototype:

- Being concise over being verbose

## Tech stack

- Bun.sh
- react-router v7
- TailwindCSS v4
- DaisyUI v5
- Lucide icons

## Structure

- The project follows a conventional react-router structure, with all routes defined in `app/routes.ts`.
- Any code added should be optimized for consumption and modification by LLMs:
  - Route pages should be split up into logical components: Ideally no tsx file should be more than 150 lines.
  - Proper type safety without using `any` or similar shortcuts. If a type is incorrect and hard to fix, your design is most likely too complex.
  - Types should be infered, inlined, and derived as much as possible. No type casting.

## Testing

- The user is responsible for testing generated code by clicking around and inspecting the app
  - Guide the user on how they should test any new functionality with clear and simple instructions
- Do not try to run the application - the user will do that.
- Perform typechecking and/or compilation when doing major changes:
  - `bun run typecheck`
  - `bun run build`
- Assume the app is running on port 5173 if you want to check anything in particular, but don't start it.
