import './App.css';
import Crawling from './Crawling';
import client from './webcraw/client';

function App() {
  fetch('localhost:4000/')
  .then(res => res.json)
  .then(res=> {
    console.log(res);
  })
  return (
    <div className="App">
      {client()}
    </div>
  );
}

export default App;
