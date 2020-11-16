import React, { useState } from 'react';
import styled from "styled-components"
import 'antd/dist/antd.css'
import { Collapse, Col, Button, Card, DatePicker, Row, Input } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons';

const { Meta } = Card;
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
    }
]
const Todolist = ()=> {
    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `;
    const [state, setState] = useState("");
    const [stateEdit, setEdit] = useState([]);
    const [listData, setListData] = useState(data);
    const [changeContent, setContent] = useState();
    const [createList, setCreate] = useState([{
        id: 3,
        content: '투두리스트3'
    }])
    // const onTextChange = (e, id) => {
    //     setContent({...listData, id: content: e.target.value)};
    // }
    const onDelPannel = id => {
        setListData(listData.filter(data => data.date !== id))
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
        console.log(day)
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
                    {listData.map(list=>
                        <Panel header={list.date} key={list.date} extra={genExtra(list.date)}>
                        <div>
                            {listData.map(data => data.date === list.date ?
                                <Card id = {data.id} style={{ width: 300, marginTop: 16, width: "80%", margin: "0 auto", marginTop: "10px" }}>
                                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                                        <Whattodo style={{width: "100%"}}>
                                            {stateEdit.find(element=> element === data.id)?
                                                <TextArea showCount maxLength={100} value= {data.content} />:
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