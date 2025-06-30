import { BrowserRouter as Router } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
import AppRouter from './routes/AppRouter';
import './App.css';

function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
        <div className="App">
          <AppRouter />
        </div>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
