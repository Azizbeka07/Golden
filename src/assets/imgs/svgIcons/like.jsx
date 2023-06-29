import * as React from "react"

const LikeIcon = (props) => (
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
      d="M10.75 5C7.575 5 5 7.61 5 10.829c0 2.599 1.006 8.767 10.911 15.002a1.113 1.113 0 0 0 1.178 0C26.994 19.596 28 13.428 28 10.829 28 7.609 25.425 5 22.25 5S16.5 8.533 16.5 8.533 13.925 5 10.75 5Z"
    />
  </svg>
)
export default LikeIcon;