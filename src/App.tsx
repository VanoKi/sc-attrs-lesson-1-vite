import './App.css';
import {Header} from "./layout/Header.tsx";
import {Main} from "./layout/Main.tsx";
import {Skills} from "./layout/Skills.tsx";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
        </div>
    );
}

export default App;

