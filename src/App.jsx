import { useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className="d-flex flex-wrap container">
      
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>


    </div>
      
  )  
  
}

export default App
