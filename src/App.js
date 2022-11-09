import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [clickNum, setClickNum] = useState(0);

  const clickManage = () => {
    setClickNum(clickNum + 1);
  };

  const resetCounter = () => {
    setClickNum(0);
  };

  return (
    <div className="App">
      <div className='main-container'>
        <Counter
        clickNum={clickNum} />

        <Button
          text='Click'
          clickButton={true}
          clickManage={clickManage} />

        <Button
        text='Reset'
        clickButton={false}
        clickManage={resetCounter} />
      </div>
    </div>
  );
};

export default App;
