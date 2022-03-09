import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Pages/Login'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' component={Login}/>
      </Routes>
    </div>
  );
}

export default App;
