import { BrowserRouter as Router } from 'react-router-dom';
import { SellerAuthProvider } from './context/SellerAuthContext';
import AppRouter from './routes/AppRouter';
import './App.css';

function App() {
  return (
    <Router>
      <SellerAuthProvider>
        <div className="App">
          <AppRouter />
        </div>
      </SellerAuthProvider>
    </Router>
  );
}

export default App;
