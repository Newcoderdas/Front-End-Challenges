import { useEffect } from 'react'
import './App.css'
import axios from "axios";
import Page from './(pages)/page';
function App() {
useEffect(()=>{
  axios.get("https://bc16-54-80-43-90.ngrok-free.app/api/public/website-data?data=menuItems")
  .then((res)=>console.log("API Data",res))
  
},[]);

  return (
    <Page/>
      )
}

export default App
