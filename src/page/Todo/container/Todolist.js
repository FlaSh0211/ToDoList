import React, { useState } from 'react';
import styled from "styled-components"
import 'antd/dist/antd.css'
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

const Todolist = () => {
    const [state, setState] = useState({
        data: [],
        loading: false,
        hasMore: true,
      });

    const handleInfiniteOnLoad = () => {
        let { data } = this.state;
        setState({
          loading: true,
        });
        if (data.length > 14) {
          message.warning('Infinite List loaded all');
          setState({
            hasMore: false,
            loading: false,
          });
          return;
        }
        // fetchData(res => {
        //   data = data.concat(res.results);
        //   this.setState({
        //     data,
        //     loading: false,
        //   });
        // });
      };

    return (
        <div className="demo-infinite-container">
            <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={handleInfiniteOnLoad}
            hasMore={!state.loading && state.hasMore}
            useWindow={false}
            >
            <List
                dataSource={state.data}
                renderItem={item => (
                <List.Item key={item.id}>
                    <List.Item.Meta
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description={item.email}
                    />
                    <div>Content</div>
                </List.Item>
                )}
            >
                {state.loading && state.hasMore && (
                <div className="demo-loading-container">
                    <Spin />
                </div>
                )}
            </List>
            </InfiniteScroll>
      </div>
    )
}

export default Todolist;