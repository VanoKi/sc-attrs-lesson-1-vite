import './App.css';
import {Header} from "./layout/Header.tsx";
import {Main} from "./layout/Main.tsx";
import {Skills} from "./layout/Skills.tsx";
import {Experience} from "./layout/Experience.tsx"


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Experience />
        </div>
    );
}

export default App;

