import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Collapse, Col, Button, Card, DatePicker, Input } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, CheckOutlined, MinusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Panel } = Collapse;
const { TextArea } = Input;

const Whattodo = styled.div `
`;
const EditButton = styled.div `
    justifyContent: center;
    textAlign: center;
`;
const demo = [
    {
        id: 1,
        content: "투두리스트1",
        date: "2020-11-16"
    },
    {
        id: 2,
        content: "투두리스트2",
        date: "2020-11-16",
        type: 'success',
    },
    {
        id: 3,
        content: "투두리스트3",
        date: "2020-11-16",
        type: 'success',
    },
    {
        id: 4,
        content: "투두리스트4",
        date: "2020-11-19",
        type: 'success',
    },
    {
        id: 5,
        content: "투두리스트5",
        date: "2020-11-15",
        type: 'success',
    },
    {
        id:6,
        content: "투두리스트6",
        date: "2020-11-16",
        type: 'success',
    },
    {
        id: 7,
        content: "투두리스트7",
        date: "2020-11-16",
        type: 'success',
    }
];
const Todolist = ()=> {
    const [state, setState] = useState();
    const [stateEdit, setEdit] = useState([]);
    const [listData, setListData] = useState(demo);
    const [dateRender, setDateRender] = useState([]);
    const [input, setInput]  = useState([]);
    const [addList, setList] = useState(false);
    const [listContent, setContent] = useState("");
    const [datePicks, setDatePick] = useState(false);

    useEffect(()=> {
        uniqueDate();
     },[])

    const datePick = (date, dateString)=> {
        setState(dateString);
        setList(true)
        console.log(dateString);
    }
    const uniqueDate = ()=> {
        // 백엔드에서 날짜 내림차순 정렬 후 데이터를 보내줘야 한다
        let newDateTime = [... new Set(listData.map(data=>data.date))];
        setDateRender(dateRender.concat(newDateTime));
    }
    const deleteDay = date => {
        setListData(listData.filter(data=> data.date !== date));
        setDateRender(dateRender.filter(data=> data !== date));
    }
    const createList = ()=> {
        let day = state;
        if(day === "") {
            alert("날짜를 선택해 주세요!")
        }
        // 백엔드로 axios 요청 후 다시 받아 렌더링
        else {
            const sendData = {
                date: day,
                content: listContent,
                type: 'success'
            }
            console.log(sendData)
         }
    }
    const clickOnEdit = (id, content) => {
        let inputVal;
        if(stateEdit.find(el=> el === id)){
            setEdit(stateEdit.filter(stateEdit => stateEdit !== id));
            for(let el in input) {
                if(Number(el) === id) {
                    inputVal = input[id];
                }
            }
            setListData(
                listData.map(el => el.id === id ? ({ ...el, content: inputVal }): el)
            );
            delete input[id];
        } 
        else{
            setEdit(stateEdit.concat([id]));
            setInput({...input, [id]: content});
        }
    }
    const deleteList = id=> {
        setListData(listData.filter(data => data.id !== id));
    }
    const clickDatePicker = ()=> {
        console.log("ssss")
        if(datePicks === true){
            setDatePick(false);
            setList(false);
            setContent("");
        }
        setDatePick(true);
    }
    const genExtra = date => (
        <div style={{display: "flex"}}>
            <div>
                <Button type="link">
                    <PlusOutlined style={{color: "gray"}} onClick= {()=>createList(date)}/>
                </Button>
                <Button type="link">
                    <DeleteOutlined style={{color: "gray"}} onClick= {()=>deleteDay(date)}/>
                </Button>
            </div>
        </div>
    );
    const onChangeEdit = (e,id)=> {
        setInput({...input, [id]: e.target.value});
    }
    const createDisable = ()=> {
        setList(false);
        setContent("");
    }
    const onChangeAdd = e=> {
        let value = e.target.value;
        console.log(value)
        setContent(value);
    }
    return (
        <div className="demo-infinite-container" style={{marginTop: '80px'}}> 
            
            <Col md={{span: 20, offset: 4}}>
                <DatePicker onChange={datePick} onClick={clickDatePicker}/>
            </Col>
            <Col md={{span: 16, offset: 4}} style={{marginTop:"20px"}}>
                {addList ?
                    <div style={{display: "flex"}}>
                        <Input placeholder="TodoList를 입력하세요 !!" bordered={false} style={{marginBottom: '10px'}} onChange={onChangeAdd} value={listContent}/>
                        <Button type="link" style={{color: "gray"}} onClick={createList}>
                            <PlusOutlined />
                        </Button>
                        <Button type="link" style={{color: "gray"}} onClick={createDisable}>
                            <MinusOutlined />
                        </Button>
                    </div>: null
                }
                <Collapse accordion>
                    {dateRender.map(unqdate=>
                        <Panel header={unqdate} key={unqdate} extra={genExtra(unqdate)} style={{}}>
                        <div style={{maxHeight: "300px", overflow: 'auto'}}> 
                            {listData.map(data => data.date === unqdate ?
                                <Card id = {data.id} style={{margin: "0 auto", marginTop: "10px"}}>
                                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                                        <Whattodo style={{width: "100%"}}>
                                            {stateEdit.find(ele=> ele === data.id)?
                                                <TextArea showCount maxLength={100} value= {input[data.id]? input[data.id]: null} onChange={(e)=>onChangeEdit(e,data.id)} />:
                                                data.content
                                            }
                                        </Whattodo>
                                        <div style={{margin: "auto 0"}}>
                                            { stateEdit.find(id=> id === data.id) ? 
                                            <EditButton style={{margin: "auto 0", marginLeft: "auto"}}>
                                                <Button type="link" onClick={() =>clickOnEdit(data.id, data.content)}>
                                                    <CheckOutlined />
                                                </Button>
                                            </EditButton>
                                            :
                                            <EditButton style={{margin: "auto 0", marginLeft: "auto"}}>
                                                <Button type="link" onClick={() =>clickOnEdit(data.id, data.content)}>
                                                    <EditOutlined style={{color: "green"}}/>
                                                </Button>
                                            </EditButton>
                                            }
                                            <EditButton style={{margin: "auto 0"}}>
                                                <Button type="link"  onClick={()=>deleteList(data.id)}>
                                                    <DeleteOutlined style={{color: "red"}}/>
                                                </Button>
                                            </EditButton>
                                        </div>
                                    </div>
                                </Card>: null)
                            }
                        </div>
                        </Panel>)
                    }
                </Collapse>
            </Col>
        </div>
    )
}

export default Todolist;