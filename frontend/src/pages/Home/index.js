import React from "react";
import "./style.css";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";

function Home() {
  const [torr, setTorr] = useState([]);
  async function getTrending() {
    try {
      let res = await fetch("https://torrento.vercel.app/trending");
      res = await res.json();
      setTorr(res.items);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full truncate ... flex flex-col justify-between h-screen">
      <div className="main-section">
        <Header />
        <Table heading={"Trending"} torr={torr} getTrending={getTrending} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
