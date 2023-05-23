import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
