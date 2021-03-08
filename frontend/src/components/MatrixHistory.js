import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
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
        <CompletedMatrix
          key={completedMatrix.id}
          createdOn={completedMatrix.created_on}
        />
      ))}
    </div>
  );
};

const CompletedMatrix = ({ createdOn }) => {
  const classes = useStyles();

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{createdOn}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Replace me with an Act Matrix pulled from ResultsView
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default MatrixHistory;
