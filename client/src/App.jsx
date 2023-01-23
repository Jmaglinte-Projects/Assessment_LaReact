import { useState, useEffect } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import './App.css'

const API = axios.create({ baseURL: 'http://127.0.0.1:8000/api' });

function App() {
  const [count, setCount] = useState(0)

	useEffect(() => {
		API.get('/counter').then(function (response) {
			setCount(response.data)
		});
	}, []);
 
	const increment = async () => {
		try {
			const { data } = await API.post('/counter', { clicked: true })
			setCount((count) => count + 1)
		} catch (error) {
			console.error(error);
		}
	}
	const handleClick = () => {
		increment();
		
	}
  return (
    <div className="App">
      <div> 
        <a href="https://reactjs.org" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div> 
      <div className="card" style={{ display: 'flex', gap: '25px', flexDirection: 'column' }}>
		<div style={{ fontSize: '70px', display: 'block', fontWeight: 'bold' }}>{count}</div>
        <button onClick={handleClick} style={{
			background: '#375de1',
			color: '#fff',
			fontWeight: 'bold',
			textTransform: 'uppercase',
			fontSize: '30px',
			boxShadow:' 0 0 10px #00000059',
		}}>
          Click Me
        </button> 
      </div> 
    </div>
  )
}

export default App
