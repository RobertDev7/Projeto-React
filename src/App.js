import logo from './logo.svg';
import './App.css';
import sorrindo from "./img/sorrindo.jpg";
import alegre from "./img/feliz.png";
import festa from "./img/festa.png";
import bailarina from "./img/dançarina.png";


function App() {
    const name = 'Robert'
    const newName = name.toUpperCase()
    function sum(a, b) {
        return a + b
    }

    const url = 'https://via.placeholder.com/150'

    return (
        <div className="App">

            <p>Olá, {newName}</p>
            <h1>Hello, World!</h1>
            <img src={sorrindo} alt="sorrindo" title="Sorrindo" height='100px' hidth='100px' />
            <p>Posicione o mouse sobre os emojis, para mostrar os nomes deles.</p>
            <img src={alegre} title="Alegre" height='40px' hidth='40px' />
            <img src={festa} title="Festa" height='40px' hidth='40px' />
            <img src={bailarina} title="Bailarina" height='40px' />

        </div>

    );
}

export default App;