import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FullscreenPlayer from './components/FullscreenPlayer'

function App() {
  const [count, setCount] = useState(0)
  const [url, setUrl] = useState({temporary_url:'https://brenopolanski.github.io/html5-video-webvtt-example/MIB2.mp4'})

  const renderComponent = () => {
    if (count === 0) {
      return (
        <FullscreenPlayer attachment={url} ></FullscreenPlayer>
      )
    } else {
      return null;
    }
  }
/*
        <FullscreenPlayer attachment={url} ></FullscreenPlayer>
*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        {renderComponent()}
      </header>
    </div>
  )
}

export default App
