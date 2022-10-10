import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export default function App(){

  // let [ isGoingOut, setisGoingOut ] = React.useState(true);

  // function statetrigger() {
  //   setisGoingOut((prevValue) => !prevValue );
  // }


  // return (
  //   <div className='state'>
  //     <h1 className='state--title'>Is state important to know?</h1>
  //     <div className='state--value'>
  //       <h1 onClick={statetrigger}>{ isGoingOut ? 'Yes' : 'No' }</h1>
  //     </div>
  //   </div>  
  // )


  const thingsArray = React.useState(['things 1', 'things 2']);

  thingsArray.map(function(item, value){
    console.log(item, value);
  });
  
  return(
    <div>Hello</div>
  );

}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
