import './App.css';
import Text from "./components/Text"
import Button from "./components/Button"
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <Text toggle={toggle} displayTxt="GeeksForGeeks" />
      <Button setToggle={setToggle} btnTxt="Toogle Text" />
    </div>
  );
}

export default App;
