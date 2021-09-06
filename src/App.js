import { BrowserRouter } from 'react-router-dom';
import Provider from './context/context';
import Home from './Pages/Home';


function App() {
  return (
    
    <BrowserRouter>
      <Provider>
        <Home />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
