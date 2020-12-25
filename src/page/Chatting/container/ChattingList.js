import React, { useEffect, useState } from 'react';
import { List, Badge, Space } from 'antd';
import 'antd/dist/antd.css';
import * as socketCreator from 'redux/modules/saga/socket';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Input from 'component/Form/Input';

const Button = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    cursor: pointer;
    position: fixed;
    right: 1em;
    bottom: 1em;
    padding: 1px;
    justify-content: center;

    /* 크기 */
    height: 3rem;
    width: 3rem;
    font-size: 1.5rem;

    /* 색상 */
    background: #808080;
    &: active {
        background: #666666;
    }
`;

const ModalWrapper = styled.div`
    /* 공통 스타일 */
    display: ${props => props.visible ? 'flex' : 'none'};
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    padding: 0;

    /* 색상 */
    background-color: rgba(0, 0, 0, 0.5);  
    opacity: 100%; 

    /* 크기 */
    width: 100%;
    height: 100%;
`;

const ChatRoomModal = styled.div`
    display: ${props => props.visible ? 'flex' : 'none'};
    position: relative;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 30%;
    z-index: 100;
    background-color: white;
`;

const InnerWrapper = styled.div`
    /* 공통 스타일 */
    display: flex;
    flex-direction: column;
    padding: 2rem;

    /* 크기 */
    width: 100%;
    height: 100%;
`
const AddChatBtn = styled.button`
    /* 공통 스타일 */
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    outline: none;
    border: none;
    border-radius: 10%;
    justify-content: center;
    align-items: center;
    
    /* 크기 */
    width: 4rem;
    height: 2rem;

    /* 색상 */
    color: white;
    background: #808080; 
    &: active {
        background: #666666;
    }


`

const data = [
    '김영환 남승철 김성현 문정민',
    'react reactnative ',
    '경기대학교 컴퓨터공학부'

];

const ChattingList = ({ history, socketActions, socketState })=> {
    useEffect(()=> {
        socketActions.startChat({ email: 'nexus2493@gmail.com' })
    },[])
    const [visible, setVisible] = useState(false);

    const enterRoom = e => {
        history.push(`/chatting/room/${e.currentTarget.id}`)
    }
    const addChatRoom = ()=> {
        setVisible(true);
    }
    const cancle = e => {
        if(e.target.id === 'shadow') {
            setVisible(false);
        }
    }
    return (
        <div>
            <List
            style={{"padding": "40px", height: "100%"}}
            header={<div><h2>채팅방 목록</h2></div>}
            footer={null}
            bordered
            >
                <List.Item style={{"display": "flex", "justifyContent": "sapce-between"}} onClick={enterRoom} id={2}>
                    {data[0]}
                    <Space>
                        <Badge count={25} />        
                    </Space>
                </List.Item>
                <List.Item style={{"display": "flex", "justifyContent": "sapce-between"}} onClick={enterRoom} id={2}>
                    {data[0]}
                    <Space>
                        <Badge count={25} />        
                    </Space>
                </List.Item>
            </List>
            <Button onClick={addChatRoom}>+</Button>
            <ModalWrapper visible={visible} onClick={cancle} id="shadow">
                <ChatRoomModal visible={visible} id="modal">
                    <InnerWrapper>
                        <Input placeholder={"채팅방 이름을 입력하세요"} id={"id"}/>
                        <AddChatBtn>만들기</AddChatBtn>
                    </InnerWrapper>
                </ChatRoomModal>
            </ModalWrapper>
        </div>
    )
}

export default connect(
    state => ({
        socketState: state.socketReducer
    }),
    dispatch => ({
        socketActions: bindActionCreators(socketCreator, dispatch)
    })
)(ChattingList);
