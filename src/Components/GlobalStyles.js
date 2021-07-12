import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset};
    body {
        fond-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Canta;
        margin: 0px;
    }
`;

export default globalStyle;
