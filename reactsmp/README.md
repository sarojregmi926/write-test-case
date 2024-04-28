### App.js
```
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


```
```
Test 1: Testing whether all the components have rendered
Test 2: Testing the default value of the text element
Test 3: Testing the toggle ability of the button
```
### App.test.js
```
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  cleanup();
})


describe("App Component", () => {
  // Test 1
  test("App Rendering", () => {
    render(<App />);
    const text = screen.getByTestId('text');
    const button = screen.getByTestId('button');
    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  })

  // Test 2
  test("Default Text", ()=>{
    render(<App/>);
    const text = screen.getByTestId('text');
    expect(text).toHaveTextContent("GeeksForGeeks");
  });
// Test 3
test("Toggling Text", ()=>{
  render(<App/>);
  const text = screen.getByTestId("text");
  const button = screen.getByTestId("button");
  expect(text).toHaveTextContent("GeeksForGeeks");
  fireEvent.click(button);
  expect(text).toBeEmptyDOMElement();
  fireEvent.click(button);
  expect(text).toHaveTextContent("GeeksForGeeks");
})

})

```
### Text.js
```
import React from 'react'

const Text = ({ toggle, displayTxt }) => {
    return (
        <h1 data-testid="text">{toggle ? displayTxt : ""}</h1>
    )
}

export default Text
```
### Test.test.js
```
Testing the Text Component: We are going to perform three tests on the Text Component.

Test 1: Testing if the text element is rendered correctly to the DOM.
Test 2: Testing the content of the text element when the toggle is set to true.
Test 3: Testing the content of the text element when the toggle is set to false.
```
```
import { cleanup, render, screen } from "@testing-library/react";
import Text from "./Text";

afterEach(() => {
    cleanup();
})

describe("Text Component", () => {
    //test 1
    test("Text Rendering", () => {
        render(<Text toggle={true} displayTxt={"GeeksForGeeks"} />);
        const text = screen.getByTestId("text");
        expect(text).toBeInTheDocument();
    })

    // Test 2
    test("Displayed Text when toggle is set to true", () => {
        render(<Text toggle={true} displayTxt={"GeeksForGeeks"} />);
        const text = screen.getByTestId("text");
        expect(text).toHaveTextContent("GeeksForGeeks");
    });

    // Test 3
    test("Displayed Text when toggle is set to false", () => {
        render(<Text toggle={false} displayTxt={"GeeksForGeeks"} />);
        const text = screen.getByTestId("text");
        expect(text).toBeEmptyDOMElement();
    })


});
```
### Button.js
```
import React from 'react'

const Button = ({ setToggle, btnTxt }) => {
    return (
        <button data-testid="button" onClick={() => setToggle(prev => !prev)}>
            {btnTxt}
        </button>
    )
}
export default Button;
```
### Button.test.js
 
```
1. Button has setToogle function so set it mock
2. Render Button component with props setToogle and btnTxt; // define values of props too
3. Test: Button is present in the document(<button> tag) and Button has text "Click me"

```
```
import Button from "./Button";
import {render, screen, cleanup } from "@testing-library/react"

afterEach(() => {
    cleanup();
})

describe("Button Component", () => {
    const setToggle = jest.fn();
    render(<Button setToggle={setToggle} btnTxt="Click Me!" />);
    const button = screen.getByTestId("button");
    // Test 1
    test("Button Rendering", () => {
        expect(button).toBeInTheDocument();
    })

    // Test 2
    test("Button Text", () => {
        expect(button).toHaveTextContent("Click Me!");
    })
})
```