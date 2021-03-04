import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import ActQuestion from "./ActQuestion";
import ResultsView from "./ResultsView";
import questions from "../questions";

const styles = {
  helper: {
    color: "blue",
    textAlign: "right",
    margin: "0",
  },
};

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

      <TextField
        className="act-answer"
        id="outlined-multiline-static"
        label="Answer"
        multiline
        rows={4}
        placeholder="start writing..."
        value={answer}
        variant="outlined"
        onChange={handleUpdateAnswer}
        helperText={answer.length + "/140"}
        inputProps={{ maxLength: 140 }}
        FormHelperTextProps={{ style: styles.helper }}
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
