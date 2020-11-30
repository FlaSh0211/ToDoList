import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Collapse, Col, Button, Card, DatePicker, Input, Empty, Pagination, notification } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined, CheckOutlined, MinusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { bindActionCreators } from 'redux';
import * as todoListCreators from 'redux/modules/saga/todolist';
import { connect } from 'react-redux';

const { Panel } = Collapse;
const { TextArea } = Input;

const Whattodo = styled.div `
`;
const EditButton = styled.div `
    justifyContent: center;
    textAlign: center;
`;

const Todolist = ({ todoListState, todoListActions })=> {
    const [state, setState] = useState();
    const [stateEdit, setEdit] = useState([]);
    const [input, setInput]  = useState();
    const [addList, setList] = useState(false);
    const [listContent, setContent] = useState("");
    const [datePicks, setDatePick] = useState(false);

    useEffect(()=> {
        todoListActions.getTodoListRequest();
     },[])
     
    const datePick = (date, dateString)=> {
        // date는 사용된다 지우지 마시오
        setState(dateString);
        setList(true)
    }
    const deleteDay = date => {
        todoListActions.deleteDayTodoListRequest({ date });
        notification.open({
            message: '삭제되었습니다',
            style: {
                width: 600,
            },
            duration: 1
        });
    }
    const createList = ()=> {
        let day = state;
        if(day === "") {
            alert("날짜를 선택해 주세요!")
        }
        if(listContent === ""){
            alert("내용을 입력해 주세요!")
        }
        // 백엔드로 axios 요청 후 다시 받아 렌더링
        else {
            const sendData = {
                date: day,
                content: listContent,
                type: 'success'
            }
            todoListActions.createTodoListRequest(sendData)
            setContent("");
            notification.open({
                message: '항목을 새로 생성했습니다',
                style: {
                    width: 600,
                },
                duration: 1
            });
        }
    }
    const clickOnEdit = (_id, content) => {
        let inputVal;
        if(stateEdit.find(el=> el === _id)){
            setEdit(stateEdit.filter(stateEdit => stateEdit !== _id));
            // axios 요청
            todoListActions.updateTodoListRequest( { _id, content: input[_id]});
            delete input[_id];
            notification.open({
                message: '수정되었습니다',
                style: {
                  width: 600,
                },
                duration: 1
            });

        } 
        else {
            setEdit(stateEdit.concat([_id]));
            setInput({...input, [_id]: content});
        }
    }
    const deleteList = _id=> {
        // axios 요청
        todoListActions.deleteListTodoListRequest({ _id })
        notification.open({
            message: '삭제되었습니다',
            style: {
                width: 600,
            },
            duration: 1
        });
    }
    const clickDatePicker = ()=> {
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
                    <DeleteOutlined style={{color: "gray"}} onClick= {()=>deleteDay(date)}/>
                </Button>
            </div>
        </div>
    );
    const onChangeEdit = (e,_id)=> {
        setInput({...input, [_id]: e.target.value});
    }
    const createDisable = ()=> {
        setList(false);
        setContent("");
    }
    const onChangeAdd = e=> {
        let value = e.target.value;
        setContent(value);
    }
    const onChangePage= pageNumber => {
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
                    {todoListState.get('date').length !== 0 ? 
                        todoListState.get('date').map(unqdate=>
                        <Panel key={unqdate} header={unqdate} key={unqdate} extra={genExtra(unqdate)}>
                        <div style={{maxHeight: "300px", overflow: 'auto'}}>
                            {todoListState.get('data').map(data => data.dateString === unqdate ?
                                <Card key={data._id} id = {data._id} style={{margin: "0 auto", marginTop: "10px"}}>
                                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                                        <Whattodo style={{width: "100%"}}>
                                            {stateEdit.find(ele=> ele === data._id)?
                                                <TextArea showCount maxLength={100} value= {input[data._id]? input[data._id]: null} onChange={(e)=>onChangeEdit(e,data._id)} />:
                                                data.content
                                            }
                                        </Whattodo>
                                        <div style={{margin: "auto 0"}}>
                                            { stateEdit.find(id=> id === data._id) ? 
                                            <EditButton style={{margin: "auto 0", marginLeft: "auto"}}>
                                                <Button type="link" onClick={() =>clickOnEdit(data._id, data.content)}>
                                                    <CheckOutlined />
                                                </Button>
                                            </EditButton>
                                            :
                                            <EditButton style={{margin: "auto 0", marginLeft: "auto"}}>
                                                <Button type="link" onClick={() =>clickOnEdit(data._id, data.content)}>
                                                    <EditOutlined style={{color: "green"}}/>
                                                </Button>
                                            </EditButton>
                                            }
                                            <EditButton style={{margin: "auto 0"}}>
                                                <Button type="link"  onClick={()=>deleteList(data._id)}>
                                                    <DeleteOutlined style={{color: "red"}}/>
                                                </Button>
                                            </EditButton>
                                        </div>
                                     </div>
                                </Card>: null)
                            }
                        </div>
                        </Panel>)
                    :<div><Empty /></div>}
                </Collapse>
            </Col>
            <Col md={{span: 16, offset:4}} lg={{span: 10, offset:8}} sm={{span: 20, offset:2}} xs={{span: 18, offset: 3}} style={{marginTop: "20px"}}>
                <div style={{ minWidth: "250px", margin: "0 auto"}}>
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChangePage} style={{ margin: "0 auto"}}/>
                </div>
            </Col>
        </div>
    )
}

export default connect(
    state => ({
        todoListState: state.todolistReducer
    }),
    dispatch => ({
        todoListActions: bindActionCreators( todoListCreators, dispatch)
    })
)(Todolist);
