import React, { useState } from 'react';
import { Menu, Avatar, Dropdown, Button } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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
    const logOut = ()=> {
            
    };
    const { current } = state;
    const menu = (
        <Menu >
            <Menu.Item style={{minHeight: "20px", fontWeight:"bold"}}>
                <Link to= "/profile/edit" >
                    프로필 이름
                </Link>
            </Menu.Item>
            <Menu.Item onClick={logOut}>
                로그아웃
            </Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Menu selectedKeys={current} mode="horizontal">
                <Menu.Item key="login" icon={ null } onClick={handleClick}>
                    로그인
                </Menu.Item>
                <Menu.Item key="todolist" icon={ null } onClick={handleClick}>
                    TodoList
                </Menu.Item>
                <Button key="Home"onClick={handleClick} shape="circle" style={{marginLeft: "10px"}}>
                    <HomeOutlined />
                </Button>    
                <Dropdown key="avater" overlay={menu} placement="bottomLeft" arrow>
                    <Avatar style={{ backgroundColor: '#87d068', float: 'right', marginTop: "8px", marginRight: "10px"}} icon={<UserOutlined />} /> 
                </Dropdown>
            </Menu>
        </div>
    );
};

export default Nav;