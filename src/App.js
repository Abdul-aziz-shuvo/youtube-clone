import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Homescreen from './components/screens/homescreen/Homescreen';
import Sidebar from './components/sidebar/Sidebar'
import './_app.scss'
import {useState} from "react";
import LoginScreen from "./components/screens/loginscreen/LoginScreen";
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

const Layout = ({children})  => {
    const [sidebar,setSidebar] = useState(false)
    const toggleSidebar = () => {
        setSidebar((prevState) => (
            !prevState
        ))
    }
  return (
    <div className="App">
        <Header toggleSidebar={toggleSidebar}/>
        <div className="app_container">
            <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar}/>
            <Container fuild className="app_main">
                {children}
            </Container>
        </div>

    </div>
  );
}

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Layout>
                        <Homescreen/>
                    </Layout>
                </Route>
                <Route path='/auth' >
                    <LoginScreen/>
                </Route>
                <Route path='/search'>
                    <Layout>
                        <h3 style={{color:'white'}}>Search</h3>
                    </Layout>
                </Route>
                <Route>
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </Router>
    )
}
export default App;