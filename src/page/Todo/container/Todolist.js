import React from 'react';
import styled from "styled-components"
import 'antd/dist/antd.css'
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';

const Todolist = () => {
    const initialstate = {
        data: [],
        loading: false,
        hasMore: true,
      };

    const handleInfiniteOnLoad = () => {
        let { data } = this.state;
        this.setState({
          loading: true,
        });
        if (data.length > 14) {
          message.warning('Infinite List loaded all');
          this.setState({
            hasMore: false,
            loading: false,
          });
          return;
        }
        this.fetchData(res => {
          data = data.concat(res.results);
          this.setState({
            data,
            loading: false,
          });
        });
      };

    return (
        <div className="demo-infinite-container">
            <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={false}
            >
            <List
                dataSource={this.state.data}
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
                {this.state.loading && this.state.hasMore && (
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