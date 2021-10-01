import { makeStyles, Theme } from "@material-ui/core/styles";

export const EmptySearchMsg = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    margin: "1vw",
    overflow: "hidden",
  },
  img: {
    maxWidth:400,
    width: "40%",
    marginTop:'2rem'
  },
  message: {
    fontFamily: "Lucida Console, Times, Sans-serif ",
    margin: '1rem',
  },
  text:{
    color:'red'
  }
}));
