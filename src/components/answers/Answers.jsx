import { QUESTIONS } from '../../constants/questions';
import { StyledDiv, StyledH1, StyledH2, StyledH3, StyledSpan } from './styles';

const Answers = ({ answers }) => {
	return (
		<>
			<StyledH1>FINAL RESULT</StyledH1>
			{answers.map((answer, index) => (
				<StyledDiv key={index}>
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
		</>
	);
};

export default Answers;
