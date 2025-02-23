import { useState } from "react";
import { motion } from "framer-motion";
import { BsCart, BsNintendoSwitch, BsSearch } from "react-icons/bs";
import { FaHome, FaGamepad, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import nintendo from "../../assets/nintendo bg-red.png";

const NavLinks = [
  { id: 1, name: "ホーム", path: "/", icon: <FaHome /> },
  { id: 2, name: "Switch", path: "/switch", icon: <BsNintendoSwitch /> },
  { id: 3, name: "ゲーム", path: "/game", icon: <FaGamepad /> },
  { id: 4, name: "お問い合わせ", path: "/support", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* 固定在页面顶部的导航栏 */}
      <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-md z-50">
        <div className="flex items-center justify-between h-16 w-full px-0">
          <div className="flex items-center h-full">
            <Link to="/" className="h-full">
              <img
                src={nintendo}
                alt="Nintendo Logo"
                className="h-full w-auto object-cover"
              />
            </Link>
          </div>

          {/* 桌面端菜单 */}
          <ul className="hidden md:flex items-center divide-x divide-gray-300">
            {NavLinks.map((link) => (
              <li key={link.id} className="flex items-center px-8 gap-2">
                <Link to={link.path} className="flex items-center gap-2">
                  <motion.span
                    className="text-xl"
                    whileHover={{
                      rotate: [-10, 10, 0],
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                  >
                    {link.icon}
                  </motion.span>
                  <span className="hover:text-red-500 transition duration-300">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* 右侧图标 (仅桌面显示) */}
          <ul className="hidden md:flex gap-4 items-center mr-4">
            <motion.li
              className="hover:text-gray-500 duration-300 cursor-pointer"
              whileHover={{ rotate: [-10, 10, 0], transition: { duration: 0.3 } }}
            >
              <BsSearch size={20} />
            </motion.li>
            <motion.li
              className="hover:text-gray-500 duration-300 cursor-pointer"
              whileHover={{ rotate: [-10, 10, 0], transition: { duration: 0.3 } }}
            >
              <BsCart size={20} />
            </motion.li>
          </ul>

          {/* 移动端汉堡按钮 */}
          <motion.button
            className="block md:hidden text-2xl mr-2"
            onClick={handleHamburgerClick}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
          >
            ☰
          </motion.button>
        </div>
      </nav>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden mt-16 bg-white border-b border-gray-200 shadow-md z-40 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ul className="flex flex-col">
            {NavLinks.map((link) => (
              <motion.li
                key={link.id}
                className="text-center border-b border-gray-300 hover:bg-gray-700 hover:text-yellow-400 duration-300 flex items-center justify-center py-3 px-10"
                whileHover={{
                  rotate: [-10, 10, 0],
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <Link
                  to={link.path}
                  className="flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl">{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;