import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  return (
    <BrowserRouter>
      <header>
        <Home />
      </header>
    </BrowserRouter>
  );
}

export default App;
