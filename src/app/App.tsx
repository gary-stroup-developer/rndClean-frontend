import './App.css'
import PaymentPortalForm from './components/PaymentPortalForm';
import Invoices from './pages/Invoices';
import PaymentsMainPage from './pages/PaymentsMainPage';

function App() {

  return (
    <div >
      <Invoices />
      <PaymentsMainPage />
      <PaymentPortalForm />
    </div>
  )
}

export default App
