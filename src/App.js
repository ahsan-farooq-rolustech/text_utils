
import './App.css';
import NavBar from './components/navBar';
import TextForm from './components/TextForm';

function App()
{
  return (
    <div className="App">
    <NavBar title="TextUtils" about="About TextUtils"/>
    <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"/>
    </div>
    </div>
  );
}

export default App;
