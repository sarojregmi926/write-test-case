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

/* 
1. Button has setToogle function so set it mock
2. Render Button component with props setToogle and btnTxt; // define values of props too
3. Test: Button is present in the document(<button> tag) and Button has text "Click me"
*/