import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import 'antd/dist/antd.css'
import { Collapse, Col, Button, Card, DatePicker, Row, Input } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';

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
        date: "2020-11-17"
    },
    {
        id: 3,
        content: "투두리스트3",
        date: "2020-11-17"
    }
]
const Todolist = ()=> {
    const [state, setState] = useState("");
    const [stateEdit, setEdit] = useState([]);
    const [listData, setListData] = useState(data);
    const [changeContent, setContent] = useState();
    const [dateRender, setDateRender] = useState([]);
    const [input, setInput]  = useState([{id:""}]);

    useEffect(()=> {
        uniqueDate();
     },[])

    const uniqueDate = ()=> {
        let newDateTime = [... new Set(listData.map(data=>data.date))];
        setDateRender(dateRender.concat(newDateTime));
    }
    const onDelPannel = date => {
        setListData(listData.filter(data=> data.date !== date))
        setDateRender(dateRender.filter(data=> data !== date))
    }
    const onCreate = ()=> {

    }
    const onChange = (date, dateString)=> {
        setState(dateString);
        console.log(date, dateString);
    }

    const clickOnEdit = id => {
        if(stateEdit.find(element=> element === id)){
            setEdit(stateEdit.filter(stateEdit => stateEdit !== id))
        }
        else{
            setEdit(stateEdit.concat([id]))
        }
        console.log(stateEdit)
    }

    const clickOnDel = id=> {
        setListData(listData.filter(data => data.id !== id))
    }
    const genExtra = (date)=> (
        <>
            <Button type="link">
                <DeleteOutlined style={{color: "gray"}} onClick= {()=>onDelPannel(date)}/>
            </Button>
        </>
    );
    const createDayTodo = ()=> {
        let day="";
        day = state;
    }
    const onChangeValue = (e,id)=> {
        setInput({...input, [id]: e.target.value});
        console.log(input,"input")
    }

    return (
        <div className="demo-infinite-container" style={{marginTop: '80px'}}> 
            <Row>
                <Col md={{span: 4, offset: 15}}>
                    <DatePicker onChange={onChange} style={{width:"100%"}} />
                </Col>
                <Col md={{span: 2}} style={{marginLeft:"5px"}}>
                    <Button onClick={createDayTodo}>
                        <PlusOutlined />
                    </Button>
                </Col>
            </Row>
            <Col md={{span: 16, offset: 4}} style={{marginTop:"20px"}}>
                <Collapse accordion>
                    {dateRender.map(unqdate=>
                        <Panel header={unqdate} key={unqdate} extra={genExtra(unqdate)} >
                        <div>
                            {listData.map(data => data.date === unqdate ?
                                <Card id = {data.id} style={{ width: 300, marginTop: 16, width: "80%", margin: "0 auto", marginTop: "10px" }}>
                                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                                        <Whattodo style={{width: "100%"}}>
                                            {stateEdit.find(element=> element === data.id)?
                                                <TextArea showCount maxLength={100} value= {input[data.id]? input[data.id]: data.content} onChange={(e)=>onChangeValue(e,data.id)} />:
                                                data.content
                                            }
                                        </Whattodo>
                                        <div style={{margin: "auto 0"}}>
                                            { stateEdit.find(element=> element === data.id) ? 
                                            <EditButton style={{margin: "auto 0", marginLeft: "auto"}}>
                                                <Button type="link" onClick={() =>clickOnEdit(data.id)}>
                                                    <CheckOutlined />
                                                </Button>
                                            </EditButton>
                                            :
                                            <EditButton style={{margin: "auto 0", marginLeft: "auto"}}>
                                                <Button type="link" onClick={() =>clickOnEdit(data.id)}>
                                                    <EditOutlined style={{color: "green"}}/>
                                                </Button>
                                            </EditButton>
                                            }
                                            <EditButton style={{margin: "auto 0"}}>
                                                <Button type="link"  onClick={()=>clickOnDel(data.id)}>
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