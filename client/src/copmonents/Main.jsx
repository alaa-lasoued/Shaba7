import React , { useState,useEffect }from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import NavBar from "./Navbar.jsx";
import SearchBare from "./SearchBar.jsx";
import Gallery from "./Galery.jsx"
import Header from "./header.jsx"
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        all rights reserved
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Main() {
  const classes = useStyles();
  const [History, setHistory] = useState([]);
  const [UpDown,setPosition] = useState(null)
  const [AppBar,setAppBar] = useState("null")
  const [Cols,setCold]=useState(null)

  useScrollPosition(({ prevPos, currPos }) => {
    setHistory([...History,currPos.y])
    
    console.log(History[History.length-1],currPos.y)



    if(currPos.y<-580&&History[History.length-1]>currPos.y){
    setPosition(true)
    setAppBar("#00000078")
    }else if(currPos.y>-580&&currPos.y<0&&History[History.length-1]<currPos.y){
    setPosition(false)
    setAppBar("transparant")
    }
    console.log(currPos.x)
    console.log(currPos.y)
  })
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar SerchBarDisplay={UpDown} AppBarColor={AppBar}/>
      <main>
        {/* Hero unit */}
        <Header/>
        <div className={classes.heroContent}>
          
            <Container maxWidth="lg"  >
              <Gallery isMobile={isMobile}/>
            </Container>
         
        </div>
       
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          LocalPik
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}