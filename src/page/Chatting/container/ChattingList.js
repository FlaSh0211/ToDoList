import React from 'react';
import { List, Badge, Space } from 'antd';
import 'antd/dist/antd.css';

const data = [
    '김영환 남승철 김성현 문정민',
    'react reactnative ',
    '경기대학교 컴퓨터공학부'

];
const ChattingList = ({ history })=> {
    const enterRoom = e => {
        history.push(`/chatting/room/${e.currentTarget.id}`)
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
            </List>
        </div>
    )
}

export default ChattingList;
