import './App.css';
import Text from "./components/Text"
import Button from "./components/Button"
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="App">
      <Text toggle={toggle} displayTxt="GeeksForGeeks" />
      <Button setToggle={setToggle} btnTxt="Toggle Text" />
    </div>
  );
}

export default App;

/* 
Test 1: Testing whether all the components have rendered
Test 2: Testing the default value of the text element
Test 3: Testing the toggle ability of the button
 */