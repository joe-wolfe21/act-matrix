import React, { useState, useEffect } from "react";
import CompletedMatrixAccordion from "./CompletedMatrixAccordion";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "75%",
    margin: "0 auto",
  },
  header: {
    margin: "24px 0",
    fontWeight: "bold",
  },
}));

const MatrixHistory = () => {
  const [completedMatrices, setCompletedMatrices] = useState([]);
  const classes = useStyles();

  // replace
  const url = "/api/users/4b0caca0-eed4-4156-bb57-28200d0eeea8/matrices";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCompletedMatrices(data.matrices));
  }, [url]);

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="subtitle1">
        Your Matrix History
      </Typography>
      {completedMatrices.map((completedMatrix) => (
        <CompletedMatrixAccordion
          key={completedMatrix.id}
          createdOn={completedMatrix.created_on}
          bottomRight={completedMatrix.answer_bottom_right}
          bottomLeft={completedMatrix.answer_bottom_left}
          topLeft={completedMatrix.answer_top_left}
          topRight={completedMatrix.answer_top_right}
        />
      ))}
    </div>
  );
};

export default MatrixHistory;
