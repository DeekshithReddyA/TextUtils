import './App.css'; 
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';


function App() {
  const [alert,setAlert] =useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const[mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light')
    { 
    setMode('dark')
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    showAlert("Dark mode has been enabled","success")
    // document.title = 'TextUtils - Home (Dark Mode)'
    // setInterval(() => {
    //   document.title = "TextUtils is Amazing";
    // }, 2000);
    // setInterval(() => {
    //   document.title = "Install TextUtils Now";
    // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled","success")
    }
  }


  return (
    <>
    <Navbar logotitle="TextUtils" aboutText="About" mode ={mode} toggleMode={toggleMode}/>
    {/* <Navbar aboutText='About'/> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
