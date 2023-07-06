import { motion } from "framer-motion";
import { styled } from "styled-components";

const StyledDiv = styled(motion.div)`
    padding-bottom: 30px;
`;

const StyledH1 = styled(motion.h1)`
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 40px;
`;

const StyledH2 = styled(motion.h2)`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`;

const StyledH3 = styled(motion.h3)`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`;

const StyledSpan = styled(motion.span)`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: ${props => (props.isCorrect ? 'green' : 'red')};
`;

export {StyledDiv, StyledH1, StyledH2, StyledH3, StyledSpan};