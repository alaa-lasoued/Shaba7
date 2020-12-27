import React , { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from '../../tileData.js';
import ReactPlayer from 'react-player'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "transparent",
   
  },
  gridList: {
    width: "auto",
    height: "auto",
  
  },
  CardBorder:{
    borderRadius:"20px"
  }
}));


export default function ImageGridList(props) {
  const classes = useStyles();
  const [column,setcolumn] = useState(null)

  useEffect(() => {
    if(props.isMobile){
      setcolumn(1)
    }else{
      setcolumn(3)
    }

  });
 const MobileChecker=()=>{
   if(props.isMobile){
     return 1
   }else{
     return null
   }
 } 
  
  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList} cols={column} spacing={8}>
        {tileData.map((tile) => {
          if(!tile.type){
            console.log(tile.xs)
            return <GridListTile key={tile.img} cols={MobileChecker() || tile.cols} rows={tile.height} >
            <img src={tile.img} alt={tile.title} style={{borderRadius:"15px"}}/>
          </GridListTile>
          }else if(tile.type=="video"){
         return <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.height} >
         <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width={"auto"} height={"400px"} />
       </GridListTile>
          }
          
        }
          
        )}
      </GridList>
    </div>
  );
}