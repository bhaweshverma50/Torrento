import React, {useEffect} from 'react'
import "./style.css"
import {Pagination, Table as List} from "antd";

function Table({heading, torr, getTrending}) {
    
    useEffect(() => {
        getTrending();
      }, []);

    const column = [
        {
            "title": "Name",
            "dataIndex": "name",
            "render": (text, record) => <p className='truncate text-xs md:text-sm'>{record.name}</p>
        },
        {
            "title": "Size",
            "dataIndex": "size",
            "width": "120px",
            "render": (text, record) => <p className='truncate text-xs md:text-sm'>{record.size}</p>
        }
    ]

  return (
    <section className='mx-2 my-8'>
        <h1 className='text-xl md:text-2xl font-bold'>{heading}</h1>
        <List columns={column} dataSource={torr} sticky scroll={{"x": "200px", "y": "400px"}} pagination={{size: "small"}}/>
      </section>
  )
}

export default Table