import * as React from "react";
const ArrowIcon = (props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={32}
        height={32}
        fill='none'
        {...props}
    >
        <path
            stroke='#161C24'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M21.332 26.667 10.665 16 21.332 5.333'
        />
    </svg>
);
export default ArrowIcon;
