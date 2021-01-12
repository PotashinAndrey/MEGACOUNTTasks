import React, { useState } from 'react';
import { InputNumber, Typography, Button } from 'antd';
import sequence from '../TasksCode/BlockTwoTaskTwo.js';

export default function SecondBlockSecondTask() {
  const [startedValue, setStartedValue] = useState(0);
  const [step, setStep] = useState(0);

  const { Title, Text } = Typography;

  let func = undefined;

  function calculeteResult() {
    if (!func) func = sequence(startedValue, step);

    let p = document.createElement('p');
    p.innerHTML = func();
    document.getElementById('list').appendChild(p);
  }

  function throwOff() {
    let list = document.getElementById('list');
    list.innerHTML = "";
    func = undefined;
  }


  return (
    <div className="task4">
      <div>
        <Title level={1}>Задача 4 </Title>
        <Text>Начальное згначение: </Text>
        <InputNumber
          value={startedValue}
          onChange={value => setStartedValue(value)}
        />
        <Text> Шаг: </Text>
        <InputNumber
          value={step}
          onChange={value => setStep(value)}
        />
      </div>
      <div>
        <Button onClick={calculeteResult}>{func ? "Шаг" : "Посчитать"}</Button>
        <Button onClick={throwOff}>Сбросить</Button>
      </div>
      <div id="list"></div>
    </div>
  )
}