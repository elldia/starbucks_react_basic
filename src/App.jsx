import Menu from "./components/Menu";
import logo from './assets/images/logo.png'
import './App.css';
function App(){

    return(<div id="wrap">
        <h1><img src={logo} alt="스타벅스" /></h1>
        <h2 style={{margin:'30px 0 15px'}}>여름 한정 시즌 메뉴</h2>
        <Menu />
    </div>)
}
export default App;