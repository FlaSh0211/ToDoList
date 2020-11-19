import React, { useState } from 'react';
import { Button, Input, Col } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const EditProfile = ({ history })=> {
    const [inputs, setInputs] = useState({
        nickname: '',
        password: ''
    })
    const logOut = ()=> {
        // 로그아웃 로직
        history.push('/')
    }
    const onChange = e => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }
    const edit = e => {
        if(e.currentTarget.name === 'editNickname') {
            console.log(inputs.nickname,'닉네임');
            if(inputs.nickname === ''){
                alert("닉네임을 입력하세요");
            }
            else {
                let data = {
                    nickname: inputs.nickname
                }
                console.log(data)
                // axios 요청
            }
        }
        else {
            console.log(inputs.password,'비번');
            if(inputs.password === ''){
                alert("비밀번호를 입력하세요");
                e.preventDefault();
            }
            else {
                let data = {
                    password: inputs.password
                }
                console.log(data)
                //axios
                logOut();
            }
        };
    };

    return(
        <div style={{marginTop:"40px"}}>
            <Col md={{span: 18, offset: 4}} style={{display: 'flex'}}>
                <Input name = 'nickname' placeholder="새 닉네임" bordered={false} style={{marginBottom: '10px'}} onChange={onChange} value={inputs.nicname}/>
                <Button type="link" style={{color: "gray"}} onClick={edit} name="editNickname">
                    <EditOutlined />
                </Button>
            </Col>
            <Col md={{span: 18, offset: 4}} style={{display: 'flex'}}>
                <Input name='password' placeholder="새 비밀번호" bordered={false} style={{marginBottom: '10px'}} onChange={onChange} value={inputs.password}/>
                <Button type="link" style={{color: "gray"}} onClick={edit} name="editPassword">
                    <EditOutlined />
                </Button>
            </Col>
        </div>
    )
}

export default EditProfile;