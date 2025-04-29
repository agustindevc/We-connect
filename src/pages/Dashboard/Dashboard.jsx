import React, { useState } from "react";
import SearchBar from "./DashboardComponents/SearchBar";
import FeaturedProducts from "./DashboardComponents/FeaturedProducts";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <SearchBar search={search} setSearch={setSearch} />
      <FeaturedProducts search={search} />
    </div>
  );
};

export default Dashboard;
