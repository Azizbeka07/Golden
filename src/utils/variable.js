// Colors

const primaryColor = "#4295E4";
const secondaryColor = "#F2F8FF";
const dark = "#161C24";
const gray = "#454F5B";
const deepDark = "#0D2436";
const light = "#fff";
const borderColor = "#c4cdd5";
const lightGray = "#fafafa";

const colors = {
    primaryColor,
    secondaryColor,
    dark,
    gray,
    deepDark,
    light,
    borderColor,
    lightGray,
};

export const adaptiveValue = (property, startSize, minSize) => {
    const addSize = startSize - minSize;
    return `
		${property}: ${startSize}px;
		@media (max-width: 1440px) {
			${property}: calc(${minSize}px + ${addSize} * ((100vw - 420px) / (1440 - 420)));
		}
`;
};

export default colors;
