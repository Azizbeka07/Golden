import * as React from "react"
const CartIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#454F5B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.667 9.333h18.386a2.667 2.667 0 0 1 2.653 2.932l-.8 8a2.667 2.667 0 0 1-2.653 2.402H11.52a2.667 2.667 0 0 1-2.616-2.144L6.667 9.333ZM6.667 9.333 5.587 5.01A1.333 1.333 0 0 0 4.293 4H2.666M10.666 28h2.667M21.334 28H24"
    />
  </svg>
)
export default CartIcon;