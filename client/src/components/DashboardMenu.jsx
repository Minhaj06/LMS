import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { GiTeacher } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";
import { BiAddToQueue } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";

const DashboardMenu = () => {
  const dashboard = "/dashboard";
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);

  useEffect(() => {
    const pathToKeyMapping = {
      [dashboard]: "1",
      [dashboard + "/course"]: "2",
      [dashboard + "/courses"]: "3",
      [dashboard + "/subcategory"]: "4",
      [dashboard + "/subcategories"]: "5",
      [dashboard + "/brand"]: "6",
      [dashboard + "/brand"]: "7",
      [dashboard + "/product"]: "8",
      [dashboard + "/products"]: "9",
    };
    const currentPathKey = pathToKeyMapping[location.pathname];

    if (currentPathKey) {
      setSelectedKeys([currentPathKey]);

      const parentKey = getParentKey(currentPathKey);
      if (parentKey) {
        setOpenKeys([parentKey]);
      }
    }
  }, [location.pathname]);

  const getParentKey = (key) => {
    // Define a mapping of submenu keys to their parent keys
    const submenuParentMapping = {
      2: "sub1",
      3: "sub1",
      4: "sub2",
      5: "sub2",
      6: "sub3",
      7: "sub3",
      8: "sub4",
      9: "sub4",
    };
    return submenuParentMapping[key];
  };

  const getItem = (label, key, icon, children, onClick) => {
    return {
      key,
      icon,
      children,
      label,
      onClick,
    };
  };

  const items = [
    getItem("Dashboard", "1", <MdDashboard />, null, () => {
      navigate(dashboard);
    }),

    getItem("Course", "sub1", <GiTeacher size={18} />, [
      getItem("Create Course", "2", <BiAddToQueue size={18} />, null, () => {
        navigate(dashboard + "/course");
      }),
      getItem("All Courses", "3", <MdManageSearch size={18} />, null, () => {
        navigate(dashboard + "/courses");
      }),
    ]),
  ];

  return (
    <Menu
      className="flex-grow-1"
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      items={items}
    />
  );
};

export default DashboardMenu;
