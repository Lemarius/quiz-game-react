import { motion } from "framer-motion";
import { styled } from "styled-components";

const StyledContainer = styled(motion.div)`
    width: 40%;
    margin: auto;
    background-color: rgb(255, 230, 199);
    border-radius: 10px;
    padding: 40px;
    margin-top: 30px;
`;

const StyledOptionCont = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

const StyledQuestion = styled(motion.h1)`
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    padding-bottom: 40px;
`;

const StyledOption = styled(motion.div)`
    width: 60%;
    padding: 30px 55px;
    background-color: rgb(255, 165, 89);
    border: 5px solid rgb(69, 69, 69);
    border-radius: 20px;
    margin: auto;
    cursor: pointer;
    transition: 0.3s all ease;

`;

const StyledAnswer = styled(motion.h2)`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    color: rgb(69, 69, 69);
`;

export {StyledContainer, StyledOptionCont, StyledQuestion, StyledOption, StyledAnswer};