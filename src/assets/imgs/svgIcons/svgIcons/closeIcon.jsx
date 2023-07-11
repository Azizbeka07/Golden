import * as React from "react";
const CloseIcon = (props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={20}
        height={20}
        viewBox='0 0 20 20'
        fill='none'
        {...props}
    >
        <path
            d='M16.6673 3.33331L3.33398 16.6666M16.6673 16.6666L3.33398 3.33331L16.6673 16.6666Z'
            stroke='#181818'
            strokeWidth={1.75}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </svg>
);
export default CloseIcon;
