import React, { useState } from 'react';
import styled from "styled-components"
import 'antd/dist/antd.css'
import { List, message, Avatar, Spin, Col } from 'antd';

const Todolist = () => {
    const [state, setState] = useState({
        data: [{id: 1, date:'2020.11.16', title: "today to do"}],
        loading: false,
        hasMore: true,
      });

    return (
        <div className="demo-infinite-container">
            <List
                dataSource={state.data}
                renderItem={item => (
                <div style={{marginTop: "80px"}}>
                    <Col md={{span: 12, offset:6}}>
                        <List.Item key={item.id} style={{marginLeft: "10px", marginRight: "10px"}}>
                            <List.Item.Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.date}
                            />
                            <div>Content</div>
                        </List.Item>
                    </Col>
                </div>
                )}
            >
                {state.loading && state.hasMore && (
                <div className="demo-loading-container">
                    <Spin />
                </div>
                )}
            </List>
      </div>
    )
}

export default Todolist;