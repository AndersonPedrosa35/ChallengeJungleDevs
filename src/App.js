import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from './Pages/Blog';
import BrowseShares from './Pages/BrowseShares';
import CreateNanny from './Pages/CreateNanny';
import Home from './Pages/Home';
import OurStory from './Pages/OurStory';
import Terms from './Pages/Terms';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/create" component={ CreateNanny } />
        <Route path="/blog" component={ Blog } />
        <Route path="/terms" component={ Terms } />
        <Route path="/story" component={ OurStory } />
        <Route path="/browse-shares" component={ BrowseShares } />
        <Route path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
