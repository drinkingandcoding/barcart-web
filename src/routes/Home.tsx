import React from "react";
import { Main } from "../components";

import { useHistory } from "react-router-dom";
import { Form, Input, Button } from 'antd';

import './Home.scss';
import { makeByRandom } from "barcart/dist";

interface ValuesInterface {
  drink: string;
}

const Home: React.FC = () => {

  const [form] = Form.useForm();
  const history = useHistory();

  const onFinish = (values:ValuesInterface) => {

    const drink = values.drink || makeByRandom()[0].name;

    history.push({
      pathname: '/make',
      search: `?drink=${drink}`,  // query string
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
