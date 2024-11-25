import React, { useSyncExternalStore } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

// useState allows the variables to change dynamically
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); //tracks if the form has been submitted

  return (
<form>
<h1>
  I'm <span>FINALLY</span> learning React!
</h1>
   <div> 
    <label htmlFor='name'>Name: </label> {/**htmlFor needed for click association */}
    <input
    type='text'
    id='name'
    value={ name }
    onChange={(e) => setName(e.target.value)}
    />
</div>

<div>
<label htmlFor='balance'>Balance: </label>
<input
type='number'
id='balance'
value={ balance }
onChange={(e) => Number(setBalance(e.target.value))}
/>
</div>

<div>
    <h2>User Details: </h2>
    <h2>User Name: { name }</h2>
    <h2>User Balance: { balance }</h2>
</div>

<button
type='button'
onClick={() => {
// added logic for when both fields are empty
  if(!name.trim() || !balance.trim()) {
    alert('Please fill ot both fields before submitting'); // show an alert if the fields are empty
    return;
  }


setIsSubmitted(true);
 

// Hide the "Done" message after 3 seconds
setTimeout(() =>  { 
  setIsSubmitted(false);
  setName(''); //reset the name field
  setBalance(''); // resets the balance
  
}, 3000);
  
}}
style={{ marginTop: '10px', padding: '8px 15px', backgroundColor: '#4caF50', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}
>Submit

</button>

{isSubmitted && (

  <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#dff0d8', color: '3c763d', borderRadius: '5px', border: '1px solid #d6e9c6' }}>
    <p>Thank you, {name} for submitting your account balance of ${ balance }</p>
  </div>
)}

</form>

  );
}

export default App;
