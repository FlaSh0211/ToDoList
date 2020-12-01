import React, { useEffect, useState } from 'react';
import { Calendar, Badge } from 'antd';
import 'antd/dist/antd.css'
import { bindActionCreators } from 'redux';
import * as todoListCreators from 'redux/modules/saga/todolist';
import { connect } from 'react-redux';

const Home = ({ todoListState, todoListActions }) => {
    const [datas,setData] = useState([]);
    
    useEffect(()=> {
        todoListActions.getTodoListRequest();
     }, [])

    useEffect(()=> {
        let demo = todoListState.get('data');
        const newData = ()=> {
            let array = [];
            for(let el in demo) {
                array.push([demo[el]['dateString'],demo[el]]);
            } 
            setData(datas.concat(array));
        };
        if(datas.length == 0) {
            newData();
        }
        if(demo.length == 0) {
            setData([])
        }
    }, [todoListState]);

    const getListData = value => {
        let year, month, date;
        let listData=[];
        for (let v = 0; v < datas.length; v++) {
            year = new Date(datas[v][0]).getFullYear();
            month = new Date(datas[v][0]).getMonth();
            date = new Date(datas[v][0]).getDate();
            if(value.year() === year){
                if(value.month() === month) {
                    if(value.date() === date) {
                        listData = listData.concat(datas[v][1])
                    };
                };
            };
        };
        return listData;
    };
    const dateCellRender = value => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content} style={{listStyle: "none"}}>
                    <Badge status={item.type} text={item.content} />
                    </li>))
                }
            </ul>
        );
    }
    const getMonthData = value => {
        let year;
        let month;
        let listData=[];
        for (let v = 0; v < datas.length; v++){
            year = new Date(datas[v][0]).getFullYear();
            month = new Date(datas[v][0]).getMonth();
            if(value.year() === year){
                if(value.month() === month){
                    listData = listData.concat(datas[v][1]);
                };
            };
        };
        return listData;
    };
    const monthCellRender = value => {
        const listData = getMonthData(value);
        return listData ? (
            <div className="notes-month">
                {listData.map(item => (<li key={item.content} style={{listStyle: "none"}}>
                    <Badge status={item.type} text={item.content} />
                    </li>))
                }
            </div>
            ) : null;
    };

    return (
        <div style={{margin:"20px"}}>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </div>
    );
};

export default connect(
    state => ({
        todoListState: state.todolistReducer
    }),
    dispatch => ({
        todoListActions: bindActionCreators( todoListCreators, dispatch)
    })
)(Home);