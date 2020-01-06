import React from "react"
import {render} from "@testing-library/react"
import DarkMode from "./DarkMode"

test("does it render", () => {
    const wrapper = render(<DarkMode />)
})

test("does it contain toggle dark mode", () => {
    const {getByText} = render(<DarkMode />)
    getByText(/Toggle Dark Mode/i)
})
test("does it contain fail", () => {
    const {getByText} = render(<DarkMode />)
    getByText(/fail/i)
})