import React, { useState } from 'react';
import { Menu, Avatar, Dropdown, Button } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';

const Nav = ({ history }) => {
 
    const [state, setState] = useState({
      current: null,
    }); 

    const handleClick = e => {
      console.log(e.key)
      setState({ current: e.key });
      if(e.key === undefined) {
        history.push('/');
      }
      else {
        history.push(`/${e.key}`);
      }
    };
    const { current } = state;

    const menu = (
      <Menu >
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
        <div >
            <Menu selectedKeys={current} mode="horizontal">
                <Menu.Item key="login" icon={ null } onClick={handleClick}>
                  로그인
                </Menu.Item>
                <Menu.Item key="todolist" icon={ null } onClick={handleClick}>
                  TodoList
                </Menu.Item>
                <Button key="Home"onClick={handleClick} type="" shape="circle" style={{marginLeft: "10px"}}>
                  <HomeOutlined />
                </Button>    
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <Avatar style={{ backgroundColor: '#87d068', float: 'right', marginTop: "8px", marginRight: "10px"}} icon={<UserOutlined />} /> 
                </Dropdown>
            </Menu>
        </div>
       );
}

export default Nav;