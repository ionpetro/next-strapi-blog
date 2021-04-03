import React from "react";
import Layout from "../components/layout";

const Home = () => {
  return (
    <div>
      <Layout
        categories={[
          { id: 1, slug: "yolo", name: "yolo" },
          { id: 2, slug: "interesting", name: "interesting" },
        ]}
      />
    </div>
  );
};

export default Home;
