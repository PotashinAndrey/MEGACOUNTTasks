import React, { useState } from 'react';
import { InputNumber, Typography } from 'antd';
import spiral from '../TasksCode/BlockOneTaskTwo.js';

export default function FirstBlockSecondTask() {
  const [result, setResult] = useState([]);

  const { Title } = Typography;

  function calculeteResult(value) {
    if (value < 0 || value > 15) return;
    setResult(spiral(value));
  }


  return (
    <div>
      <Title level={1}>Задача 2 </Title>
      <InputNumber
        min={0}
        max={15}
        placeholder="0 - 15"
        onChange={value => calculeteResult(value)}
      />
      <div>{result.map(e => <p className="spiralMatrix">{e.join(' ')}</p>)}</div>
    </div>
  )
}