import React from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const DashboardBreadcrumb = () => {
  const location = useLocation();

  // Extract the pathname from the location object
  const { pathname } = location;

  // Split the pathname into individual segments
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // Generate breadcrumb items
  const breadcrumbItems = pathSegments.map((segment, index) => ({
    key: index,
    title: segment,
  }));

  return (
    <div className="my-5 text-capitalize">
      <h1 className="text-2xl capitalize font-semibold mb-2">
        {pathSegments[pathSegments.length - 2]}
      </h1>

      <Breadcrumb className="capitalize" items={breadcrumbItems} />
    </div>
  );
};

export default DashboardBreadcrumb;
