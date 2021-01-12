import React, { useState } from 'react';
import { Input, Typography } from 'antd';
import encodeString from '../TasksCode/BlockOneTaskOne.js';


export default function FirstBlockFirstTask() {
  const [result, setResult] = useState('');

  const { Title } = Typography;

  function calculeteResult(value) {
    setResult(encodeString(value));
  }


  return (
    <div>
      <Title level={1}>Задача 1 </Title>
      <Title level={4}>Введите строку: </Title>
      <Input
        placeholder="Строка..."
        onChange={e => calculeteResult(e.target.value)}
      />
      <Title level={4}>{`Результат: ${result}`}</Title>
    </div>
  )
}