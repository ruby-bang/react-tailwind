import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar active="home" />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-7xl font-bold text-slate-400">
          HOME PAGE
        </h1>
      </div>
    </div>
  )
}
