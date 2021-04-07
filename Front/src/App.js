import { useState } from 'react';
import Buttons from './components/Buttons';
import Counter from './components/Counter';
import { handleFetch } from './helpers/fetch';

import './App.css';

function App() {

  const [time, setTime] = useState({ ms:0, s:0, m:0, h:0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  let { ms, s, m, h } = time;

  const handleStart = () => {
    run();
    setInterv(setInterval( run, 10 ));
    setStatus(1);
  };

  const handleResume = () => {
    if( status === 2 ){ 
        run();
        setInterv(setInterval( run, 10 ));
        setStatus(1);
    }
  };

  const handleStop = () => {
    handleFetch(h,m,s,ms);
    clearInterval( interv );
    setStatus(0);
    setTime({ ms:0, s:0, m:0, h:0 });
  };

  const handlePause = () => {
    clearInterval( interv );
    setStatus(2);
  };

  let updatedMs = ms, updatedS = s, updatedM = m, updatedH = h;

  const run = () => {

    if( updatedM === 60 ) {
        updatedH++;
        updatedM = 0;
    }

    if( updatedS === 60 ) {
        updatedM++;
        updatedS = 0;
    }

    if( updatedMs === 100 ) {
        updatedS++;
        updatedMs = 0;
    }

    updatedMs++;
    return setTime({ ms:updatedMs, s:updatedS, m:updatedM, h:updatedH });

  };

  return (
      <div className="App">
          <div className="time">
              <div className="chronometer">
                  <Counter time={ time } />
                  <Buttons status={ status } start={ handleStart } stop={ handleStop } pause={ handlePause } resume={ handleResume } />
              </div>
          </div>
      </div>
  );
}
export default App;
