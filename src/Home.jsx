import React, { useEffect, useState } from "react";
import Navbar from "./Section/Navbar";
import List from "./Section/List";
import Hero from "./Section/Hero";
import { getProduct } from "./Redux/Slices/Product";
import { dispatch } from "./Redux/store";
import TemporaryDrawer from "./components/Drawer";
import { Helmet } from "react-helmet";
import Footer from "./Section/Footer";

function Home() {
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    dispatch(getProduct(categoryData));
  }, [categoryData]); 

  return (
    <div>
      <Helmet>
        <title>E-Kart</title>
        <meta
          name="description"
          content="One stop solution for all your needs"
        />
      </Helmet>
      <Navbar setCategoryData={setCategoryData} />
      <Hero />
      <List />
      <Footer />
    </div>
  );
}

export default Home;
