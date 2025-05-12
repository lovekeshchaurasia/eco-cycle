import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [rewardsDropdownOpen, setRewardsDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
    { name: "Report", path: "/report" },
    { name: "Collect", path: "/collect" },
    { name: "About", path: "/about" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  const rewardsLinks = [
    { name: "My Points", path: "/rewards/points" },
    { name: "Claim Rewards", path: "/rewards/claim" },
    { name: "Redeem History", path: "/rewards/history" },
  ];

  const NavItem = ({ to, children }) => (
    <Link
      to={to}
      className="block md:inline-block px-3 py-2 rounded hover:bg-mdOlive transition"
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-green-700 text-white shadow px-6 py-4 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide" onClick={() => setOpen(false)}>
          ♻️ WasteWise
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:flex-wrap items-center justify-between w-full md:w-auto space-y-2 md:space-y-0 md:space-x-6 mt-2 md:mt-0">
          {navLinks.map((link) => (
            <NavItem key={link.name} to={link.path}>
              {link.name}
            </NavItem>
          ))}

          {/* Rewards Dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={() => setRewardsDropdownOpen(true)}
            onMouseLeave={() => setRewardsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 rounded hover:bg-green-800 transition">
              Rewards <ChevronDown size={16} />
            </button>
            {rewardsDropdownOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white text-black rounded shadow-lg z-10">
                {rewardsLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-green-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div> */}

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded bg-white text-green-700 hover:bg-green-100 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded bg-yellow-400 text-black hover:bg-yellow-300 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 space-y-3 px-2">
          {navLinks.map((link) => (
            <NavItem key={link.name} to={link.path}
            >
              {link.name}
            </NavItem>
          ))}

          {/* Rewards sub-items for mobile */}
          {/* {rewardsLinks.map((item) => (
            <NavItem key={item.name} to={item.path}>
              {item.name}
            </NavItem>
          ))} */}

          <div className="flex flex-col space-y-2">
            <Link
              to="/login"
              className="px-4 py-2 rounded bg-white text-green-700 hover:bg-green-100 transition text-center"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded bg-yellow-400 text-black hover:bg-yellow-300 transition text-center"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};



export default Nav;







