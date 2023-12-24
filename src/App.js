
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
 
// } from "react-router-dom";
// import About from './components/About';

function App(){

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert=(message, type)=>{
  setAlert({
  msg:message,
  type:type
})
  setTimeout(() => {
  setAlert(null);
}, 2000);
}
  

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");

    }
  }

return(
  <>
     {/* <Router>  */}
 <Navbar title='TextUtils' about='About TextUtils' mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className='container my-3'>
 <TextForm showAlert={showAlert} heading='Enter the Text to Analyze below' mode={mode}/>
 {/* <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={}> */}
            
          {/* </Route>
   </Routes> */}
 </div>
 {/* </Router> */}
</>
);
}
export default App;
