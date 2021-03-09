import moment from "moment";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CompletedMatrix from "./CompletedMatrix";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  row: {
    padding: "12px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  subheading: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: theme.spacing(2),
  },
  details: {
    justifyContent: "center",
  },
  icon: {
    paddingBottom: "3px",
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
        <div className={classes.row}>
          <Typography className={classes.heading} variant="subtitle1">
            <CheckCircleOutlineIcon
              className={classes.icon}
              color="primary"
              fontSize="small"
            />{" "}
            {moment(createdOn).format("MMMM Do YYYY")}
          </Typography>
          <Typography className={classes.subheading} variant="subtitle2">
            Submitted at {moment(createdOn).format("h:mma")}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails className={classes.details}>
        <CompletedMatrix
          bottomRight={bottomRight}
          bottomLeft={bottomLeft}
          topLeft={topLeft}
          topRight={topRight}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default CompletedMatrixAccordion;
