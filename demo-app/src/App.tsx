import { DatePicker ,Layout, Menu} from "antd"
import 'antd/dist/antd.css';
import { Route,BrowserRouter } from "react-router-dom"
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Route path="/" exact>
        <h1>Hello world!</h1>
      </Route>
    </BrowserRouter>
  );
}

export default App;
