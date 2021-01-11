import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import Projects from './Pages/Projects'

function App() {
  return (
    <main>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/projects"><Projects/></Route>
            <Route component={Error} />
        </Switch>
    </main>
  );
}

export default App;
