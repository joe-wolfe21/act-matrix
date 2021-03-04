import "../questions"
import "./ActQuestion"
import "./ResultsView"
import "@material-ui/core/Button"
import "react"
import ActQuestion
import Button
import questions
import ResultsView
import { useState }

const ActView = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(["", "", "", "", ""]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUpdateAnswer = (event) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = event.target.value;

    setAnswers(updatedAnswers);
  };

  const handlePreviousClick = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSubmitClick = (event) => {
    setIsSubmitted(true);
  };

  const questionImg = questions[currentQuestion];
  const answer = answers[currentQuestion];

  if (isSubmitted) {
    return <ResultsView answers={answers} />;
  }

  const lastAnswerableQuestion = questions.length - 1;

  return (
    <div className="act-view">
      <ActQuestion questionImg={questionImg} />
      <textarea
        className="act-answer"
        placeholder="starting writing..."
        value={answer}
        onChange={handleUpdateAnswer}
      />
      <div className="button-group">
        {currentQuestion > 0 && (
          <Button
            className="btn-previous"
            variant="contained"
            color="secondary"
            onClick={handlePreviousClick}
          >
            Previous
          </Button>
        )}
        {currentQuestion === lastAnswerableQuestion ? (
          <Button
            className="btn-progress"
            variant="contained"
            color="primary"
            onClick={handleSubmitClick}
          >
            Submit
          </Button>
        ) : (
          <Button
            className="btn-progress"
            variant="contained"
            color="primary"
            onClick={handleNextClick}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default ActView;
