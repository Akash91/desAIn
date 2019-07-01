import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PaletteComponent from './PaletteComponent';
import MediaCard from './MediaCard';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function printToScreen (cluster, palette) {
  let jsx = [];
  for (var i=0;i<cluster.length;i++) {
    jsx.push(<MediaCard url={cluster[i].props.src} palette={palette[i]} />)
  }
  return jsx;
}

export default function ScrollableTabsButtonAuto(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Mood board 1" />
          <Tab label="Mood board 2" />
          <Tab label="Mood board 3" />
          <Tab label="Mood board 4" />
          <Tab label="Mood board 5" />
        </Tabs>
      </AppBar>
      {console.log('from tab - cluster: ', props.cluster)}
      {console.log('from tab- palette: ', props.palette)}

      {value === 0 && <TabContainer>{printToScreen(props.cluster[0], props.palette[0])}</TabContainer>}
      {value === 1 && <TabContainer>{printToScreen(props.cluster[1], props.palette[1])}</TabContainer>}
      {value === 2 && <TabContainer>{printToScreen(props.cluster[2], props.palette[2])}</TabContainer>}
      {value === 3 && <TabContainer>{printToScreen(props.cluster[3], props.palette[3])}</TabContainer>}
      {value === 4 && <TabContainer>{printToScreen(props.cluster[4], props.palette[4])}</TabContainer>}

    </div>
  );
}
