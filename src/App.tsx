import './App.css';
import {Header} from "./layout/Header.tsx";
import {Main} from "./layout/Main.tsx";
import {Skills} from "./layout/Skills.tsx";
import {Experience} from "./layout/Experience.tsx"
import {Testimony} from "./layout/Testimony.tsx";
import {Connect} from "./layout/Connect.tsx";


function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Experience />
            <Testimony />
            <Connect />
        </div>
    );
}

export default App;

