import React, { useState } from 'react';
import styled from "styled-components"
import 'antd/dist/antd.css'
import { Collapse, Col, Button } from 'antd';
const { Panel } = Collapse;

const Todolist = () => {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const genExtra = () => (
    <Button type="link">
        edit
    </Button>
  );
    return (
        <div className="demo-infinite-container" style={{marginTop: '80px'}}>
            <Col md={{span: 16, offset: 4}}>
                <Collapse accordion>
                    <Panel header="2020.11.16" key="1" extra={genExtra()}>
                    <p>{text}</p>
                    <p>{text}</p>
                    <p>{text}</p>
                    <p>{text}</p>
                    <p>{text}</p>
                    
                    </Panel>

                    <Panel header="2020.11.17" key="2">
                    <p>{text}</p>
                    </Panel>

                    <Panel header="2020.11.18" key="3">
                    <p>{text}</p>
                    </Panel>
                </Collapse>
            </Col>
      </div>
    )
}

export default Todolist;