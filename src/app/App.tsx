import './App.css'
import Invoices from './pages/Invoices';
import PaymentsMainPage from './pages/PaymentsMainPage';

function App() {

  return (
    <div className='flex'>
      <Invoices />
      <PaymentsMainPage />
    </div>
  )
}

export default App
