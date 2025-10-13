import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  layout("layout.tsx", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("examples", "routes/examples.tsx"),
  ]),
] satisfies RouteConfig;
