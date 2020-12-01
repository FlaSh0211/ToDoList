import React, { useEffect, useState } from 'react';
import { Menu, Avatar, Dropdown, Button } from 'antd';
import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Nav = ({ history, loginState, todoListActions, loginActions }) => {
    const [state, setState] = useState({
        current: null,
    }); 

    const handleClick = e => {
        setState({ current: e.key });
        if(e.key === undefined) {
            history.push('/');
        }
        else {
            history.push(`/${e.key}`);
        }
    };
    const logOut = ()=> {
        localStorage.clear();
        todoListActions.resetRequest();
        loginActions.resetRequest();
        history.push('/')
    };
    const { current } = state;
    const menu = (
        <Menu>
            {localStorage.getItem('token') ?
                <Menu.Item style={{ minHeight: "20px", fontWeight:"bold" }}>
                    <Link to= "/profile/edit" >
                        {
                            localStorage.getItem('nickname')
                        }
                    </Link>
                </Menu.Item> : 
                <Menu.Item style={{ minHeight: "20px", fontWeight:"bold" }}>
                    로그인 하세요
                </Menu.Item>
            }
        </Menu>
    );

    return (
        <div>
            <Menu selectedKeys={current} mode="horizontal">
                {
                   localStorage.getItem('token') ? 
                    <Menu.Item key="login" icon={ null } onClick={logOut}>
                        로그아웃
                    </Menu.Item> : 
                    <Menu.Item key="login" icon={ null } onClick={handleClick}>
                        로그인
                    </Menu.Item> 
                }
                { localStorage.getItem('token') ?
                    <Menu.Item key="todolist" icon={ null } onClick={handleClick}>
                        TodoList
                    </Menu.Item> :
                    null
                }
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