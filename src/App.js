
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginHome from './components/LoginComponent';
import Register from './components/RegisterComponent';
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import LoginSuccess from './components/LoginSuccess';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginHome />} />
          <Route path='/login' element={<LoginHome />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/loginsuccess' element={<LoginSuccess/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
