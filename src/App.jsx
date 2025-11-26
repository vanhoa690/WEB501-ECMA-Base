import { Toaster } from "react-hot-toast";
<<<<<<< HEAD
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import List from "./pages/List";
import Add from "./pages/Add";
=======
import { Link } from "react-router-dom";
>>>>>>> 4684f4ef11a1e91338e1bd79926ec37d90956a36

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<<<<<<< HEAD
          {/* Brand */}
          <Link to="/" className="text-xl font-semibold">
=======
          <Link to="#" className="text-xl font-semibold">
>>>>>>> 4684f4ef11a1e91338e1bd79926ec37d90956a36
            <strong>WEB501 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
<<<<<<< HEAD
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
=======
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="#" className="hover:text-gray-200">
>>>>>>> 4684f4ef11a1e91338e1bd79926ec37d90956a36
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
<<<<<<< HEAD

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
=======
>>>>>>> 4684f4ef11a1e91338e1bd79926ec37d90956a36
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
