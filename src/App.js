import { Home } from './pages/Home'
import { MovementNew } from './pages/MovementNew'
import { Route } from 'wouter'
import './App.css';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/movements/new" component={MovementNew} />
    </div>
  );
}

export default App;
