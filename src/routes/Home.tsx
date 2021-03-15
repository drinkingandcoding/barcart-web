import React, { useState } from "react";
import Main from "../components/main/Main";

import { useHistory } from "react-router-dom";
import { Form, Input, Button } from 'antd';

import './Home.scss';

const Home: React.FC = () => {

  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log(values);
    history.push({
      pathname: '/make',
      search: `?drink=${values.drink}`,  // query string
    });
  };

  return (
    <Main name='home'>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item name="drink" label="Drink">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Main>
  );
};

export default Home;
