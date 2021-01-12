import FirstBlockFirstTask from './Components/FirstBlockFirstTask.jsx';
import FirstBlockSecondTask from './Components/FirstBlockSecondTask.jsx';
import SecondBlockFirstTask from './Components/SecondBlockFirstTask.jsx';
import SecondBlockSecondTask from './Components/SecondBlockSecondTask.jsx';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div></div>
      <div className="contentWrapper">
        <FirstBlockFirstTask></FirstBlockFirstTask>
        <FirstBlockSecondTask></FirstBlockSecondTask>
        <SecondBlockFirstTask></SecondBlockFirstTask>
        <SecondBlockSecondTask></SecondBlockSecondTask>
      </div>
      <div></div>
    </div>
  );
}

export default App;
