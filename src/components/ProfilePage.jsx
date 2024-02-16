import Navbar from "./Navbar";

export default function ProfilePage() {
  return (
    <div>
      <Navbar active="profile" />
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-7xl font-bold text-slate-400">
          PROFILE PAGE
        </h1>
      </div>
    </div>
  )
}
