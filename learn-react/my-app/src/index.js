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





//   const [thingsArray, setarrayThings] = React.useState(['things 1', 'things 2']);

  
//   function addItem(){
//     setarrayThings(function(thingssingle){
//       return [...thingssingle, `things ${thingsArray.length + 1}`]
//     });
//   }

// let abc = thingsArray.map((item, value) => <p key={value}>{item}</p> );  

  



/* Contact Project */
// let [ contact, setContact ] = React.useState({
//   firstname: "John",
//   lastname: "Doe",
//   phone: "+1 (719) 555-1212",
//   email: "test@gmail.com",
//   isFavourite: false
// });
  


// function toggleFacourite(){
//   setContact(previousState => {
//     return { ...previousState, isFavourite: !previousState.isFavourite };
//   });

// }

//   return(
//     <div>
//       <div className='cntainer'>
//         <img src={'../images/simple-people.png'} className='profile-pic'/>
//         <img src={contact.isFavourite ? '../images/star-solid.svg' : '../images/star-regular.svg'} className='star' onClick={toggleFacourite} />
//         <h3>{contact.firstname} {contact.lastname}</h3>
//         <p className='phone-numer'>{contact.phone}</p>
//         <p>{contact.email}</p>
//       </div>
//     </div>
//   );
/* Contact Project */


/* Counter */

const [ count, setcount ] = React.useState(0);

function add(){
  setcount(count + 1);
}

function subtract(){
  if ( count > 0 ) {
    setcount(count - 1);    
  }
}

return (
  <div>
    <div className='counter'>
      <button onClick={subtract}>-</button>
      <h1>{count}</h1>  
      <button onClick={add}>+</button>
    </div>
  </div>
)


/* Counter */

}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
