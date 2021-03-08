import Alert from "@material-ui/lab/Alert";
import CompletedMatrix from "./CompletedMatrix";

const ResultsView = ({ answers }) => (
  <div className="result-view">
    <Alert className="header" severity="success" color="info">
      Do you think you might have the opportunity to notice these things?
    </Alert>
    <CompletedMatrix
      bottomRight={answers[0]}
      bottomLeft={answers[1]}
      topLeft={answers[2]}
      topRight={answers[3]}
    />
  </div>
);

export default ResultsView;
