import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useParams } from 'react-router-dom';

const App: React.FC = () => {
    const params = useParams();
    const id = params.id;
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/data.json')
          .then(response => response.json())
          .then(data => {
            setData(data);
          });
      }, []);

    const onFinish = (values) => {
    console.log('Received values of form:', values);
    // Update the JSON file with the new data
    const newData = [...data];
    newData.push({ name: values.name, parent_id: id, title: values.title });
    fetch('/data.json', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('JSON file updated:', data);
        setData(data);
      })
      .catch(error => console.error('Error updating JSON file:', error));
  };

  return (
    <Form
      name="wrap"
      labelCol={{ flex: '110px' }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
    >
      <Form.Item label="Name" name="name" rules={[{ required: true }]} >
        <Input />
      </Form.Item>

      <Form.Item label="Title" name="title" rules={[{ required: true }]} >
        <Input />
      </Form.Item>

      <Form.Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;