import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PaletteComponent from './PaletteComponent';

// const useStyles = makeStyles({
//   card: {
//     width: '32%',
//     display: 'inline-block'
//   },
//   media: {
//     maxHight: 100,
//   },
// });

// export default function MediaCard(props) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={props.url}
//           // title="Contemplative Reptile"
//         />
//         <CardContent>
//           {/* <Typography gutterBottom variant="h5" component="h2">
//             Lizard
//           </Typography> */}
//           {/* <Typography variant="body2" color="textSecondary" component="p">
//             Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//             across all continents except Antarctica
//           </Typography> */}
//           <PaletteComponent palette={props.palette} />
//         </CardContent>
//       </CardActionArea>
//       {/* <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary">
//           Learn More
//         </Button>
//       </CardActions> */}
//     </Card>
//   );
// }


function makeStyleObject() {
  return  {
      
      width: '32%',
      display: 'inline-block',
      margin: '3px auto'
  };
}

function makeStyleObjectTwo() {
  return  {
      
      width: '100%',
      border: '1px solid white'
      // display: 'inline-block',
  };
}

export default function MediaCard(props) {
  // const classes = useStyles();

  return (
    <span style={makeStyleObject()}>
      <img src={props.url} style={makeStyleObjectTwo()} />
      <PaletteComponent palette={props.palette} />
    </span>
  );
}
