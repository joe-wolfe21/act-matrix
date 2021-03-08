import moment from "moment";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CompletedMatrix from "./CompletedMatrix";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const CompletedMatrixAccordion = ({
  createdOn,
  bottomRight,
  bottomLeft,
  topLeft,
  topRight,
}) => {
  const classes = useStyles();

  return (
    <Accordion className="result-view">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          {moment(createdOn).format("MMMM Do YYYY - h:mm a")}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <CompletedMatrix
            bottomRight={bottomRight}
            bottomLeft={bottomLeft}
            topLeft={topLeft}
            topRight={topRight}
          />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CompletedMatrixAccordion;
