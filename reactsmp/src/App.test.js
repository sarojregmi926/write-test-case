// import { cleanup, fireEvent, render, screen } from '@testing-library/react';
// import App from './App';

// afterEach(() => {
//   cleanup();
// })


// describe("App Component", () => {
//   // Test 1
//   test("App Rendering", () => {
//     render(<App />);
//     const text = screen.getByTestId('text');
//     const button = screen.getByTestId('button');
//     expect(button).toBeInTheDocument();
//     expect(text).toBeInTheDocument();
//   })

//   // Test 2
//   test("Default Text", ()=>{
//     render(<App/>);
//     const text = screen.getByTestId('text');
//     expect(text).toHaveTextContent("GeeksForGeeks");
//   });
// // Test 3
// test("Toggling Text", ()=>{
//   render(<App/>);
//   const text = screen.getByTestId("text");
//   const button = screen.getByTestId("button");
//   expect(text).toHaveTextContent("GeeksForGeeks");
//   fireEvent.click(button);
//   expect(text).toBeEmptyDOMElement();
//   fireEvent.click(button);
//   expect(text).toHaveTextContent("GeeksForGeeks");
// })

// })

/* 
Test 1: Testing whether all the components have rendered
Test 2: Testing the default value of the text element
Test 3: Testing the toggle ability of the button
*/



