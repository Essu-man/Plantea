
import ReactDOM from 'react-dom/client'; // Use createRoot for React 18+
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './App.css';
import NextScreen from './NextScreen';
const Root = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/next" element={<NextScreen />} />
      <Route path="/signup" element={<signup />} />
    </Routes>
  </BrowserRouter>
);

// Use ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure 'root' matches your HTML
root.render(<Root />);
