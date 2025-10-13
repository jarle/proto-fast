# Architectural Decision Record

## 2025-10-13: Application Layout Structure

### Context
ProtoFast needed a starting point that balances being minimal enough for easy customization while demonstrating React Router v7 best practices for layouts and nested routing.

### Decision
Implemented a layout-based routing structure using React Router v7's `layout()` function:

- **App Shell Layout** (`app/layout.tsx`): Minimal header with navigation and outlet for child routes
- **Three Example Routes**: Home (hero section), About (content page), Examples (list pattern)
- **Layout Route Pattern**: All routes wrapped in a shared layout without affecting URLs

### Rationale

1. **Demonstrates React Router v7 Patterns**: The `layout()` function is a key React Router v7 feature that provides UI nesting without URL nesting
2. **Easy to Extend**: Adding new routes is as simple as adding to the layout's children array
3. **Easy to Remove**: Users can delete the layout and start fresh if they want a different structure
4. **DaisyUI Components**: Shows navbar, cards, buttons, and other components in practical use
5. **Not Prescriptive**: Simple header navigation doesn't commit to sidebar, mega-menu, or other complex patterns
6. **LLM-Friendly**: Clear, consistent structure that's easy for AI assistants to understand and extend

### Structure

```
app/
├── layout.tsx              # Shared layout with header/nav
├── routes.ts               # Route configuration using layout()
└── routes/
    ├── home.tsx           # Hero landing page
    ├── about.tsx          # Content page example
    └── examples.tsx       # List page example
```

### Alternatives Considered

1. **No layout at all**: Too minimal, users wouldn't see how to structure apps
2. **Multiple nested layouts**: Too complex, overwhelming for a starting point
3. **Pre-built sidebar/dashboard**: Too opinionated, most prototypes don't need this
4. **File-based routing**: Requires additional setup, goes against explicit route config

### Consequences

- Users get a working example of React Router v7 layout patterns
- Easy to customize or completely replace
- Demonstrates DaisyUI components in context
- Provides 3 route patterns (index, content, list) to learn from
- All files stay under 100 lines, following LLM optimization guidelines
