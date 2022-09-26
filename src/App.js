
import './App.css';
import About from './components/about';
import NavBar from './components/navBar';
import TextForm from './components/TextForm';
import BasicForm from './components/forms/basicForm'
function App()
{
  return (
    <div className="App">
    {/* <BasicForm/> */}
    <NavBar title="TextUtils" about="About TextUtils"/>
    <div className="container my-3">
      {/* <TextForm heading="Enter the text to analyze below"/> */}
      <About/>
    </div>
    </div>
  );
}

export default App;
