import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBare  from "./SearchBar.jsx"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  root: {
marginBottom:"12px",    
backgroundImage:'url("https://w.wallhaven.cc/full/nk/wallhaven-nk9kvq.jpg")',
height:"88vh",
backgroundSize:"cover",
backgroundPosition:"center",

  },
  SearchBare:{
    marginTop:"24vh"
  },
  Typography:{
    position:"relative",
    top:"10vh",
    fontFamily: 'Texturina',
    color:"white"
  }
}));


export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container maxWidth="xl"  >
          
 <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.Typography} gutterBottom>
              LocalPik
            </Typography>
            <div className={classes.SearchBare}>
            <SearchBare/>
            </div>
            </Container>
    </div>
  );
}