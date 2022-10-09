import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export default function App(){

//   const [isImportant, setIsImportant] = React.useState('Yes');

//   function handleClick () {
//     setIsImportant('No');
//   }

// return (
//   <div className='state'>
//     <h1 className='state--title'>Is state important to know?</h1>
//     <div className='state--value' onClick={handleClick}>
//       <h1>{isImportant}</h1>
//     </div>
//   </div>  
// )

  const [countNumber, setCounter] = React.useState(0);

  function IncreaseCount() {
      setCounter(prevcount => prevcount + 1);      
  }

  function DecreaseCount() {
    if ( countNumber > 0 ) {    
      setCounter( prevcount => prevcount - 1 );
    }
  }

return (
  <div className='counter'>
    <button onClick={DecreaseCount}>-</button>
    <div className='counter--count'>
      <h1>{countNumber}</h1>
    </div>
    <button onClick={IncreaseCount}>+</button>
  </div>
);



}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
