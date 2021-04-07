import React from 'react';


function Buttons({ start, status, pause, stop, resume, clickAlert }) {

  return (
      <div className="buttons">
          { (status === 0)? 
            <button onClick={ start }>Start</button>
            : <button onClick={ resume }>Resume</button>
          }
          
          { (status === 1 )?
              <button onClick={ pause }>Pause</button>
            : <button>Pause</button>
          }

          { (status === 1 || status === 2)?
            <button onClick={ stop }>Stop</button>
            : <button>Stop</button>
          }
          
      </div>
  );
}
export default Buttons;