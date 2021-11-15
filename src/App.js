import logo from './logo.svg';
import './App.css';
import Home from './components/home/home'
import PayrollForm from './components/payroll-form/Payrollform';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PayrollForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/Payrollform" element={<PayrollForm />} />
          <Route exact path="/update/:id" element={<PayrollForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
