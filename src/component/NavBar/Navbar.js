import React, { useState } from 'react';
import styled from "styled-components"
import { Menu, Avatar, Col, Row, Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Nav = () => {
 
    const [state, setState] = useState({
      current: null,
    }); 
    // const [userName, setUserName] = useState(null) ;

    const handleClick = e => {
      console.log(e.key)
      setState({ current: e.key });
    };
    const { current } = state;

    const menu = (
      <Menu style={{minWidth: "100px"}}>
        <Menu.Item style={{minHeight: "20px", fontWeight:"bold"}}>
         프로필 이름
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            로그아웃
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
        <div style={{width: "100%"}} >
            <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" style={{width: "100%", margin:"0 auto"}}>
                <Menu.Item key="login" icon={ null }>
                  로그인
                </Menu.Item>
                <Menu.Item key="register" icon={ null }>
                  회원가입
                </Menu.Item>
                <Menu.Item key="todolist" icon={ null }>
                  TodoList
                </Menu.Item>
                <Button type="" shape="circle" style={{marginLeft: "10px"}}>
                  H
                </Button>     
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                  <Avatar style={{ backgroundColor: '#87d068', float: 'right', marginTop: "8px", marginRight: "10px"}} icon={<UserOutlined />} />
                </Dropdown>
            </Menu>
            </div>
       );
}

const Username = styled.div`
  float: right;
  margin-right: 60px;
  font-weight: bold;
`
export default Nav;