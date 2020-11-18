import React, { useEffect } from 'react';
import { Calendar, Badge } from 'antd';
import 'antd/dist/antd.css'


const Home = () => {
  let dd = []
  useEffect(()=>{
    const datas = [
      {
          id: 1,
          content: "투두리스트1",
          date: "2020-11-16"
      },
      {
          id: 2,
          content: "투두리스트2",
          date: "2020-11-17"
      },
      {
          id: 3,
          content: "투두리스트3",
          date: "2020-11-17"
      }
    ]

  // for(let el in datas) {
  //   dd.concat([datas[el]['date'], datas[el]]);
  // }
  dd.concat(1);
  },[])
  console.log(dd,"dfdf")
    function getListData(value) {   
        const data = [
            [2020,11,16,{ type: 'warning', content: '토익'}],
            [2020,11,16,{ type: 'success', content: '컴퓨터교재연구지도법 과제' }],
            [2021,11,4,{ type: 'error', content: '이러닝 출석' }]
        ];
        let dd = []
        let listData=[];
        for (let v = 0; v < data.length; v++){
            if(value.year() === Number(data[v][0])){
                if(value.month() === Number(data[v][1])-1) {
                    if(value.date() === Number(data[v][2])){
                        listData = listData.concat(data[v][3])
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
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
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