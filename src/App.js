import './App.css';
import Container from './components/container/container';
import Home from './components/home/home';
import Login from './components/login/login';
import Perfil from './components/perfil/perfil';
import Rotas from './components/routes';
import SingIn from './components/singIn/singIn';

function App() {
  return (
    <div className="App">
        <Rotas/>
    </div>
  );
}

export default App;
