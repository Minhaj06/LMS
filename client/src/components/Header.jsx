import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import { AuthContext } from "../context/auth";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-3 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">
            <span className="text-orange-600">Edu</span>
            <span className="text-blue-600">Bridge</span>
          </Link>
        </div>
        <Menu mode="horizontal" className="hidden md:flex">
          <Menu.Item key="home">
            <Link className="text-xl" to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="courses">
            <Link className="text-xl" to="/courses">
              Courses
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link className="text-xl" to="/about">
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link className="text-xl" to="/contact">
              Contact
            </Link>
          </Menu.Item>
        </Menu>
        <div className="flex space-x-2">
          {user ? (
            <Button onClick={logOut}>Logout</Button>
          ) : (
            <>
              <Button type="primary">
                <Link to="/login">Login</Link>
              </Button>
              <Button>
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
