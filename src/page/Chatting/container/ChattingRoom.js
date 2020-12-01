import React, { useState } from 'react';
import { BackTop, Comment, Avatar, Form, Button, List, Input, PageHeader } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const { TextArea } = Input;
const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

const data = [
  '김영환 남승철 김성현 문정민',
  'react reactnative ',
  '경기대학교 컴퓨터공학부'

]
const Editor = ({ onChange, onSubmit, submitting, value }) => (
      <div style={{display:"flex", height: "10vh", padding: "0.5px"}}>
        <Form.Item style={{width: "95%", height: "10vh", margin:"0"}}>
        <TextArea rows={4} onChange={onChange} value={value} style={{maxHeight: "10vh"}}/>
        </Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary" style={{width: "5%", height: "10vh"}}>
            >
        </Button>
    </div>
);

const ChattingRoom = ({ history })=> {
    const [state,setState] = useState({
        comments: [],
        submitting: false,
        value: '',
      });
    
      const  handleSubmit = () => {
        if (!state.value) {
          return;
        }
    
        setState({
          submitting: true,
        });
    
      };
    
      const  handleChange = e => {
        setState({
          value: e.target.value,
        });
      };
      const { submitting, value } = state;
    return (
        <div>
         <PageHeader style={{height: "10vh"}}
            className="site-page-header"
            onBack={() => history.goBack()}
            title="채팅방 이름"
            subTitle="현재 몇명"
        />
        <hr />
        <div style={{ height: '65vh', padding: 10, overflow: "auto" }}>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px", "marginBottom": "10px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
            <div> <Avatar icon={<UserOutlined />} style={{ "marginRight": "30px"}} />Scroll to bottom</div>
        </div>
           
            <Editor 
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
            />
            
    </div>
    )
}

export default ChattingRoom;
