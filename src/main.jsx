
import ReactDOM from 'react-dom/client'; // Use createRoot for React 18+
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './App.css';
import Home from './Home';
import Login from './Login';
import NextScreen from './NextScreen';
import SignUp from './SignUp';
const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/next" element={<NextScreen />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path= "/Login" element={<Login />}/>
      <Route path= "/Home" element={<Home />}/>
    </Routes>
  </BrowserRouter>
);

// Use ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' matches your HTML
root.render(<Root />);
