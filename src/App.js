import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Homescreen from './components/screens/homescreen/Homescreen';
import Sidebar from './components/sidebar/Sidebar'


function App() {
  return (
    <div className="App">
        <Header/>
        <div className="app_container">
            <Sidebar />
            <Container fuild className="app_main">
              <Homescreen/>
            </Container>
        </div>
    </div>
  );
}

export default App;
