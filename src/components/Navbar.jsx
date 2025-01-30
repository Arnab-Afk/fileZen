import { FaBars, FaSearch } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Navbar = () => {
    const onSignIn = () => {
        window.location.href = 'https://small-mouse-2759.arnabbhowmik019.workers.dev/google/auth?redirect_url=http://localhost:5173/auth';
      }

  return (
    <nav className="flex items-center justify-between bg-gray-900 px-6 py-3">
      {/* Left Side - Logo and Name */}
      <div className="flex items-center space-x-3">
        <FaBars className="text-white text-xl cursor-pointer" />
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 border-2 border-white rounded-sm"></div>
          <h1 className="text-white text-lg font-semibold">BookShare</h1>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-700 px-4 py-2 rounded-full">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search books..."
          className="bg-transparent outline-none text-gray-300 pl-2 w-60"
        />
      </div>

      {/* Google Sign-in Button */}
      <button className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full" onClick={onSignIn}>
        <FcGoogle className="text-xl" />
        <span>Sign in with Google</span>
      </button>
    </nav>
  );
};

export default Navbar;
