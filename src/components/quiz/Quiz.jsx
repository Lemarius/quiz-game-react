import { useState } from 'react';
import { QUESTIONS } from '../../constants/questions';
import {
	StyledAnswer,
	StyledContainer,
	StyledOption,
	StyledOptionCont,
	StyledQuestion
} from './styles';
import Answers from '../answers/Answers';
import { AnimatePresence } from 'framer-motion';

const Quiz = () => {
	const [counter, setCounter] = useState(0);
	const [answers, setAnswers] = useState([]);
	console.log(answers);

	return (
		<>
			<StyledContainer
				initial={{ scale: 0.5, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1 }}
			>
				{counter === QUESTIONS.length ? (
					<Answers answers={answers} />
				) : (
					<>
						{<StyledQuestion>{QUESTIONS[counter].question}</StyledQuestion>}
						<StyledOptionCont>
							<AnimatePresence key={counter}>
								{QUESTIONS[counter].options.map((option, index) => (
									<StyledOption
										key={index}
										onClick={() =>
											handleOptionClick(
												counter,
												setCounter,
												answers,
												setAnswers,
												option
											)
										}
										initial={{ opacity: 0, scale: 0.3 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: index * 0.3 }}
									>
										<StyledAnswer>{option}</StyledAnswer>
									</StyledOption>
								))}
							</AnimatePresence>
						</StyledOptionCont>
					</>
				)}
			</StyledContainer>
		</>
	);
};

const handleOptionClick = (
	counter,
	setCounter,
	answers,
	setAnswers,
	option
) => {
	setAnswers([...answers, option]);

	if (counter < QUESTIONS.length) {
		setCounter(counter + 1);
	}
};

export default Quiz;
