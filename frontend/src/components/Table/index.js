import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./style.css"
import {Table as List} from "antd";

function Table({heading, torr, getTrending}) {
    
    useEffect(() => {
        getTrending();
      }, []);

    const column = [
        {
            "title": "Name",
            "dataIndex": "name",
            "key": "torrentId",
            "render": (text, record) => <Link to={`/info/${record.torrentId}`} key={record.torrentId} className='truncate text-xs md:text-sm text-black hover:text-orange-500 focus:text-orange-600 visited:text-orange-600'><p className='truncate'>{record.name}</p></Link>
        },
        {
            "title": "Size",
            "dataIndex": "size",
            "width": "120px",
            "key": "torrentId",
            "render": (text, record) => <p key={record.torrentId} className='truncate text-xs md:text-sm'>{record.size}</p>
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