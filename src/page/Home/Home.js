import React from 'react';
import 'antd/dist/antd.css'
import { Calendar, Badge } from 'antd';


const Home = () => {
    function getListData(value) {   
        const data = [
            [2020,11,16,{ type: 'warning', content: '토익' }],
            [2020,11,16,{ type: 'success', content: '컴퓨터교재연구지도법 과제' }],
            [2020,11,4,{ type: 'error', content: '이러닝 출석' }]
        ];
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
        return listData || [];
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