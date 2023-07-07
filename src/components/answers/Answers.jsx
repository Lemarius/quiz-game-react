import { AnimatePresence } from 'framer-motion';
import { QUESTIONS } from '../../constants/questions';
import { StyledDiv, StyledH1, StyledH2, StyledH3, StyledSpan } from './styles';

const Answers = ({ answers }) => {
	return (
		<>
			<StyledH1>FINAL RESULT</StyledH1>
			<AnimatePresence>
				{answers.map((answer, index) => (
					<StyledDiv
						key={index}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: index * 0.3 }}
					>
						<StyledH2>{QUESTIONS[index].question}</StyledH2>
						<StyledH3>
							Tu respuesta:{' '}
							<StyledSpan isCorrect={answer === QUESTIONS[index].correctAnswer}>
								{answer}
							</StyledSpan>
						</StyledH3>
						<StyledH3>
							Respuesta correcta: {QUESTIONS[index].correctAnswer}
						</StyledH3>
					</StyledDiv>
				))}
			</AnimatePresence>
		</>
	);
};

export default Answers;
