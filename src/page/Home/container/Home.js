import React, { useEffect, useState } from 'react';
import { Calendar, Badge } from 'antd';
import 'antd/dist/antd.css'

const demo = [
    {
        id: 1,
        content: "투두리스트1",
        date: "2020-11-16",
        type: 'success'
    },
    {
        id: 2,
        content: "투두리스트2",
        date: "2020-11-17",
        type: 'success'
    },
    {
        id: 3,
        content: "투두리스트3",
        date: "2020-11-17",
        type: 'success'
    }
]

const Home = () => {
    const [datas,setData] = useState([]);
    const newData = ()=> {
        let array = [];
        for(let el in demo) {
            array.push([demo[el]['date'],demo[el]]);
        } 
        setData(datas.concat(array));
    }

    useEffect(()=>{
        newData();
    },[])

    function getListData(value) { 
        let year, month, date;
        let listData=[];
        for (let v = 0; v < datas.length; v++){
            year = new Date(datas[v][0]).getFullYear();
            month = new Date(datas[v][0]).getMonth();
            date = new Date(datas[v][0]).getDate();
            
            if(value.year() === year){
                if(value.month() === month) {
                    if(value.date() === date) {
                        listData = listData.concat(datas[v][1])
                    }
                }
            }
        }
        return listData;
    }

    function dateCellRender(value) {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content} style={{listStyle: "none"}}>
                    <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }
  
    function getMonthData(value) {
        let year;
        let month;
        let listData=[];
        for (let v = 0; v < datas.length; v++){
            year = new Date(datas[v][0]).getFullYear();
            month = new Date(datas[v][0]).getMonth();
            if(value.year() === year){
                if(value.month() === month){
                    listData = listData.concat(datas[v][1]);
                }
            }
        }
        return listData;
    }
  
    function monthCellRender(value) {
        const listData = getMonthData(value);
        return listData ? (
            <div className="notes-month">
                {listData.map(item => (<li key={item.content} style={{listStyle: "none"}}>
                    <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </div>
        ) : null;
    }
    return (
        <div style={{margin:"20px"}}>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </div>
    )
}

export default Home;