import React, { useState } from 'react';
import styled from "styled-components"
import 'antd/dist/antd.css'
import { Collapse, Col, Button, Card, DatePicker, Space, Row } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Panel } = Collapse;

const Whattodo = styled.div `
`;
const EditButton = styled.div `
    justifyContent: center;
    textAlign: center;
`;
const Todolist = () => {
    const text = `
        A dog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.
        `;
    const [state, setState] = useState();

    function onChange(date, dateString) {
        setState(dateString);
        console.log(date, dateString);
    }
    const genExtra = () => (
        <>
            <Button type="link">
                <DeleteOutlined style={{color: "gray"}}/>
            </Button>
        </>
    );
    const createDayTodo = e=>{
        const day = state;
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
                    <Panel header="2020.11.16" key="1" extra={genExtra()} >
                        <Card style={{ width: 300, marginTop: 16, width: "80%", margin: "0 auto", marginTop: "10px" }}>
                            <div style={{display: 'flex'}}>
                                <Whattodo>
                                백앤드 작업하기 백앤드 작업하기 백앤드 작업하기 백앤드 작업하기 백앤드 작업하기 백앤드 작업하기 
                                </Whattodo>
                                <EditButton>
                                    <Button type="link">
                                        <EditOutlined style={{color: "gray"}}/>
                                    </Button>
                                </EditButton>
                            </div>
                        </Card>
                        <Card style={{ width: 300, marginTop: 16 }} style={{width: "80%", margin: "0 auto", marginTop: "10px"}}>
                            <Meta
                                title="오버워치 하기"
                            />
                        </Card>
                        <Card style={{ width: 300, marginTop: 16 }} style={{width: "80%", margin: "0 auto", marginTop: "10px"}}>
                            <Meta
                                title="토익 공부"
                            />
                        </Card>
                    </Panel>

                    <Panel header="2020.11.17" key="2" extra={genExtra()}>
                    <p>{text}</p>
                    </Panel>

                    <Panel header="2020.11.18" key="3" extra={genExtra()}>
                    <p>{text}</p>
                    </Panel>
                </Collapse>
            </Col>
      </div>
    )
}

export default Todolist;