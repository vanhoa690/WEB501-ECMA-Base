import { Toaster } from "react-hot-toast";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import List from "./pages/List";
import Add from "./pages/Add";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER - Navbar Tailwind */}
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB501 App</strong>
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden block focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* 🔥 Link Trang chủ */}
            <Link to="/" className="hover:text-gray-200">
              Trang chủ
            </Link>
            {/* 🔥 Link tới List */}
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            {/* 🔥 Link tới Add */}
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          {/* Right menu desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-gray-200">
              Đăng nhập
            </a>
            <a href="#" className="hover:text-gray-200">
              Đăng ký
            </a>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden bg-blue-700 border-t border-blue-500">
            <div className="px-4 py-3 space-y-2">
              <Link to="/" className="block hover:text-gray-200">
                Trang chủ
              </Link>
              <Link to="/list" className="block hover:text-gray-200">
                Danh sách
              </Link>
              <Link to="/add" className="block hover:text-gray-200">
                Thêm mới
              </Link>
              <Link to="#" className="block hover:text-gray-200">
                Đăng nhập
              </Link>
              <Link to="#" className="block hover:text-gray-200">
                Đăng ký
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB501</h1>
        <p className="text-lg text-gray-600">Ứng dụng quản lý dữ liệu</p>
        <Routes>
          <Route path="/list" element={<List />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;
