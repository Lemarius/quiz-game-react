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
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 1.5, delay: 0.5 }}
								>
									<StyledAnswer>{option}</StyledAnswer>
								</StyledOption>
							))}
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
