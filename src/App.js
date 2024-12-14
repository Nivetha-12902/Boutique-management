import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/admin/index';
import User from './pages/user/index';
import Landing from './pages/Landing';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/user" element={<User/>}/>
        </Routes>
    </div>
  );
}

export default App;
