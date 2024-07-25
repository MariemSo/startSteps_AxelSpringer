import './App.css'
import { RandomImage } from './Components/RandomImage'

function App() {
  const now = new Date().toString()
  return (
    <>
      <div className='App'>
        <h1>Hello World</h1>
        <p>this is a string : 6+9</p>
        <p>this is the sum of 6+9 :{6+9}</p>
        <p>{now}</p>
      </div>
      <p>Some more Things</p>
      <RandomImage/>
      <RandomImage/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis eaque vel sit rerum totam odio facere, sed at nisi quibusdam, molestiae delectus maiores iste pariatur, optio iure obcaecati praesentium cupiditate!</p>
    </>
  )
}

export default App
