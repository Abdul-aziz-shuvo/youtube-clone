import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Homescreen from './components/screens/homescreen/Homescreen';
import Sidebar from './components/sidebar/Sidebar'
import './_app.scss'
import {useState,useEffect} from "react";
import LoginScreen from "./components/screens/loginscreen/LoginScreen";
import WatchScreen from "./components/screens/watchscreen/watchScreen";
import {Route,Switch,Redirect,useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'


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
            <Container  className="app_main">
                {children}
            </Container>
        </div>

    </div>
  );
}

const App = () => {

    const history = useHistory();
    const {accessToken,loading} = useSelector((state) => {
      return  state.auth;
    })
    useEffect(()  => {
        if(!loading && !accessToken){
           return history.push('/auth')
        }
    },[history,accessToken,loading])
    return (
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
                <Route path='/watch/:id'>
                    <Layout>
                       <WatchScreen/>
                    </Layout>
                </Route>

                <Route>
                    <Redirect to='/'/>
                </Route>
            </Switch>

    )
}
export default App;