import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Collapse, Col, Button, Card, DatePicker, Row, Input } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const { Panel } = Collapse;
const { TextArea } = Input;

const Whattodo = styled.div `
`;
const EditButton = styled.div `
    justifyContent: center;
    textAlign: center;
`;
const data = [
    {
        id: 1,
        content: "투두리스트1",
        date: "2020-11-16"
    },
    {
        id: 2,
        content: "투두리스트2",
        date: "2020-11-16"
    },
    {
        id: 3,
        content: "투두리스트3",
        date: "2020-11-16"
    },
    {
        id: 4,
        content: "투두리스트4",
        date: "2020-11-16"
    },
    {
        id: 5,
        content: "투두리스트5",
        date: "2020-11-19"
    },
    {
        id:6,
        content: "투두리스트6",
        date: "2020-11-16"
    },
    {
        id: 7,
        content: "투두리스트7",
        date: "2020-11-16"
    }
];
const Todolist = ()=> {
    const [state, setState] = useState();
    const [stateEdit, setEdit] = useState([]);
    const [listData, setListData] = useState(data);
    const [dateRender, setDateRender] = useState([]);
    const [input, setInput]  = useState([]);

    useEffect(()=> {
        uniqueDate();
     },[])

    const datePick = (date, dateString)=> {
        setState(dateString);
        console.log(date, dateString);
    }
    const uniqueDate = ()=> {
        let newDateTime = [... new Set(listData.map(data=>data.date))];
        setDateRender(dateRender.concat(newDateTime));
    }
    const deleteDay = date => {
        setListData(listData.filter(data=> data.date !== date));
        setDateRender(dateRender.filter(data=> data !== date));
    }
    const createDay = ()=> {
        let day="";
        day = state;
        // 생성 코드
    }
    const createList = ()=> {
        // 생성코드
    }
    const clickOnEdit = (id, content) => {
        let inputVal;
        console.log(stateEdit)
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
    const genExtra = (date)=> (
        <>
            <Button type="link">
                <DeleteOutlined style={{color: "gray"}} onClick= {()=>deleteDay(date)}/>
            </Button>
        </>
    );
    const onChangeValue = (e,id)=> {
        setInput({...input, [id]: e.target.value});
        console.log(input,"input");
    }

    return (
        <div className="demo-infinite-container" style={{marginTop: '80px'}}> 
            <Row>
                <Col md={{span: 4, offset: 15}}>
                    <DatePicker onChange={datePick} style={{width:"100%"}} />
                </Col>
                <Col md={{span: 2}} style={{marginLeft:"5px"}}>
                    <Button onClick={createDay}>
                        <PlusOutlined />
                    </Button>
                </Col>
            </Row>
            <Col md={{span: 16, offset: 4}} style={{marginTop:"20px"}}>
                <Collapse accordion>
                    {dateRender.map(unqdate=>
                        <Panel header={unqdate} key={unqdate} extra={genExtra(unqdate)} >
                        <div style={{maxHeight: "300px", overflow: 'auto'}}> 
                            {listData.map(data => data.date === unqdate ?
                                <Card id = {data.id} style={{ width: 300, marginTop: 16, width: "80%", margin: "0 auto", marginTop: "10px"}}>
                                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                                        <Whattodo style={{width: "100%"}}>
                                            {stateEdit.find(element=> element === data.id)?
                                                <TextArea showCount maxLength={100} value= {input[data.id]? input[data.id]: null} onChange={(e)=>onChangeValue(e,data.id)} />:
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
                                </Card>: null
                            )}
                        </div>
                        </Panel>)
                    }

                </Collapse>
            </Col>
        </div>
    )
}

export default Todolist;