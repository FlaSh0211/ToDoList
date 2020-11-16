import React, { useState } from 'react';
import 'antd/dist/antd.css'
import { Calendar, Badge } from 'antd';


const Home = () => {
    function getListData(value) {   
        const data = [[2020,0,1],[2021,1,1],[2020,3,1]];
        let listData;
        for (let v = 0; v < data.length; v++){
            if(value.year() === Number(data[v][0])){
                if(value.month() === Number(data[v][1])) {
                    if(value.date() === Number(data[v][2])){
                        listData = [
                            { type: 'warning', content: 'This is warning event.' },
                            { type: 'success', content: 'This is usual event.' },
                        ];
                    }
                }
            }
        }
        return listData || [];
    
      }
    
      function dateCellRender(value) {
        const listData = getListData(value);
        const moth = getMonthData(value);
        console.log(moth, "dfdf")
        return (
          <ul className="events">
            {listData.map(item => (
              <li key={item.content}>
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