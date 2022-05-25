import './App.css';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');
socket.on('ticker', (data) => {
  console.log(data);
});
function App() {
  return <div className="App"></div>;
}

export default App;
