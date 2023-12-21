
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/BasicExample';
import Navbar2 from './components/Navbar2';
import TextArea from './components/TextArea';

function App() {
  return (
    <div className="App">
     <Navbar2/>
     <div className='dropdown'>
       <BasicExample/>
     </div>
     <div className='textArea'>
     <TextArea/>
     </div>
    </div>
  );
}

export default App;
