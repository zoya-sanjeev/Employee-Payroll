import logo from './logo.svg';
import './App.css';
import PayrollForm from './components/payroll-form/Payrollform';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PayrollForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
