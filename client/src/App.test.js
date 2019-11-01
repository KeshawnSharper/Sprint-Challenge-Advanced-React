import React from "react"
import {render} from "@testing-library/react"
import App from "./App"

test("does it render", () => {
    const wrapper = render(<App/>)
}
)

test ("conatin players list", () => {
  const {getByText}= render(<App />)
  getByText(/PLAYERS LIST/i)
})
test ("Shouldn't contain this", () => {
  const {getByText}= render(<App />)
  getByText(/this/i)
})