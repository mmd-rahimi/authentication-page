import { useAuth } from "@/contexts/AuthContext";

function Home() {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="py-6 px-14 font-semibold text-2xl bg-gray-400 rounded-2xl cursor-pointer"
    >
      Logout
    </button>
  );
}

export default Home;
