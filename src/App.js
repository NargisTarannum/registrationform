import React , {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [username,setUserName] = useState('')
  const [password,setPassword] = useState('')

  useEffect = () => {
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
  })
})
.then(res => res.json())
.then(setUserName(res.json()));
  }
  
const submitForm = () => {
  console.log("ppppppppp");
}
  return (
    <div className="App">
         <div className='formDesign'>
         <form className='form' onSubmit={submitForm}>
         <p>User Registration Form</p>
          <div className= 'input-container'>
            <label>User Name</label>
            <input type =  "text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder='Enter User Name'/>
          </div>
          <div className= 'input-container'>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter valid Password'/>
          </div>
          <div>
            <input type="submit" />
          </div>
         </form>
      
         </div>
    </div>
  );
}

export default App;
