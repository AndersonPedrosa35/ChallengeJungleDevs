import { BrowserRouter } from 'react-router-dom';
import Provider from './context/context';
import Home from './Pages/Home';


function App() {
  return (
    
    <BrowserRouter>
      <Provider>
        <header>
          <Home />
        </header>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
