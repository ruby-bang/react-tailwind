import Navbar from "./Navbar";

export default function DocsPage() {
  return (
    <div>
      <Navbar active="docs" />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-7xl font-bold text-slate-400">
          DOCS PAGE
        </h1>
      </div>
    </div>
  )
}
