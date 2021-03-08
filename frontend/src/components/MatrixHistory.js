import React, { useState, useEffect } from "react";
import CompletedMatrixAccordion from "./CompletedMatrixAccordion";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
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

  console.log(completedMatrices);

  return (
    <div className={classes.root}>
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
