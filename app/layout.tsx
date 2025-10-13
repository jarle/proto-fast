import { Link, Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-base-100 via-base-100 to-base-200">
      <header className="navbar bg-base-100/80 backdrop-blur-lg border-b border-base-300/50 sticky top-0 z-50">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl font-heading">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ProtoFast
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            </li>
            <li>
              <Link to="/examples" className="hover:text-secondary transition-colors">Examples</Link>
            </li>
          </ul>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
