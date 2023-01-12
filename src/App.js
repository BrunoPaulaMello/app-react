import './App.css';
import Rotas from './components/routes';


function App() {

  let userData = {email: "bma142536@gmail.com", token: "0c1cb4a0018da26d27aaa61743b8d3c2b351dd658e419d8adc1c2573af57efc0"}
  localStorage.setItem("user", JSON.stringify(userData))

  return (
    <div className="App">
        <Rotas/>
    </div>
  );
}

export default App;
