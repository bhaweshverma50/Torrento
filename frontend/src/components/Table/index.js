import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Table as List, Spin } from "antd";
import LoadingOverlay from "react-loading-overlay";

function Table({ heading, torr, getTrending, loading }) {
  useEffect(() => {
    getTrending();
  }, []);

  const column = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <Link
          to={`/info/${record.torrentId}`}
          className="truncate text-xs md:text-sm text-black hover:text-orange-500 focus:text-orange-600 visited:text-orange-600"
        >
          <p className="truncate">{record.name}</p>
        </Link>
      ),
    },
    {
      title: "Size",
      dataIndex: "size",
      width: "100px",
      render: (text, record) => (
        <p className="truncate text-xs md:text-sm">{record.size}</p>
      ),
    },
    {
      title: "Download",
      width: "80px",
      ellipsis: "true",
      render: (text, record) => (
        <a href={record.magnetLink} className="truncate text-xs md:text-sm">
          🧲
        </a>
      ),
    },
  ];

  return (
    <section className="mx-2 my-2">
      <h1 className="text-xl md:text-2xl font-bold">{heading}</h1>
      <List
        loading={loading}
        columns={column}
        dataSource={torr}
        sticky
        scroll={{ x: "200px", y: "400px" }}
        pagination={{ size: "small" }}
      />
    </section>
  );
}

export default Table;
