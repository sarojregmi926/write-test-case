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




/* 
Testing the Text Component: We are going to perform three tests on the Text Component.

Test 1: Testing if the text element is rendered correctly to the DOM.
Test 2: Testing the content of the text element when the toggle is set to true.
Test 3: Testing the content of the text element when the toggle is set to false.

*/