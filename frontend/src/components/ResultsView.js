import "../images/act-matrix-blank.png"
import "@material-ui/lab/Alert"
import Alert
import emptyMatrix

const ResultsView = ({ answers }) => (
  <div className="result-view">
    <Alert className="header" severity="success" color="info">
      Do you think you might have the opportunity to notice these things?
    </Alert>
    <div className="result">
      <img
        className="act-matrix"
        src={emptyMatrix}
        alt="completed act matrix"
      />
      <div className="bottom-right">{answers[0]}</div>
      <div className="bottom-left">{answers[1]}</div>
      <div className="top-left">{answers[2]}</div>
      <div className="top-right">{answers[3]}</div>
      <div className="centered">{answers[4]}</div>
    </div>
  </div>
);

export default ResultsView;
