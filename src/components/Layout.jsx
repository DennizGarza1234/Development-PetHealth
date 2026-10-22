import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="app-layout">
      <header className="app-header">
        <h1>Pet Health</h1>
      </header>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
