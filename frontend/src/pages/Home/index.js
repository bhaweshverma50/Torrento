import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import { Input } from "antd";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";

const { Search } = Input;

function Home() {
  const [torr, setTorr] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [loading, setLoading] = useState(false);

  async function getTrending() {
    try {
      setLoading(true);
      let res = await fetch("https://bhaweshverma50-torrento-w5rrxr6vwgg39g5x-5000.githubpreview.dev/top");
      // let res = await fetch("https://torrento.vercel.app/top");
      res = await res.json();
      setTorr(res.items);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  const onSearch = async (value) => {
    try {
      if (!value) return;
      setLoading(true);
      let res = await fetch(`https://torrento.vercel.app/search/${value}`);
      res = await res.json();
      setSearchList(res.items);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (!searchVal.length) return setSearchList([]);
  }, [searchVal]);

  return (
    <div className="w-full truncate ... flex flex-col justify-between h-screen">
      <div className="main-section flex flex-col">
        <Header />
        <Search
          value={searchVal}
          className="px-2 py-2 my-5 outline-none rounded-sm"
          type="search"
          placeholder="Search..."
          onSearch={onSearch}
          onChange={(e) => setSearchVal(e.target.value)}
          allowClear
        />
        <div className="flex flex-col overflow-scroll overflow-y-scroll">
          <Table
            heading={
              searchList.length
                ? `Search Result for "${searchVal}"`
                : "Trending this week"
            }
            torr={searchList.length ? searchList : torr}
            getTrending={getTrending}
            loading={loading}
          />
          {/* <Table
            heading={
              searchList.length
                ? `Search Result for "${searchVal}"`
                : "Trending"
            }
            torr={searchList.length ? searchList : torr}
            getTrending={getTrending}
            loading={loading}
          />
          <Table
            heading={
              searchList.length
                ? `Search Result for "${searchVal}"`
                : "Trending"
            }
            torr={searchList.length ? searchList : torr}
            getTrending={getTrending}
            loading={loading}
          /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
