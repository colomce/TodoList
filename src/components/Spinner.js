import React, { Component } from 'react';
import { Spin, Space } from 'antd';
class Spinner extends Component {
    render() {
        return (
            <Space size="middle">
                <Spin size="large" />
            </Space>
        );
    }
}

export default Spinner;