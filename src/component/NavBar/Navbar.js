import React, { useState } from 'react';
import styled from "styled-components"
import { Menu, Avatar, Col, Row, Dropdown } from 'antd';
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
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <Row>
        <Col span={12}>
        <Menu onClick={handleClick} selectedKeys={current} mode="horizontal" >
            <Menu.Item key="login" icon={ null }>
              로그인
            </Menu.Item>
            <Menu.Item key="register" icon={ null }>
              회원가입
            </Menu.Item>
            <Menu.Item key="todolist" icon={ null }>
              TodoList
            </Menu.Item>
          </Menu>
        </Col>
          <Col span={12}>
            <Username style={{marginTop: "11px", marginRight: "20px",maxWidth: "150px", textAlign: "center"}}>남승철</Username>
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
              <Avatar style={{ backgroundColor: '#87d068', float: 'right', marginTop: "8px", marginRight: "10px"}} icon={<UserOutlined />} />
            </Dropdown>
          </Col>
      </Row>
       );
}

const styles = {
  textAlign: "center",
 
}
const Username = styled.div`
  float: right;
  margin-right: 60px;
  font-weight: bold;
`
export default Nav;