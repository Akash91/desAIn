import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

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
      {value === 0 && <TabContainer>{props.cluster[0]}</TabContainer>}
      {value === 1 && <TabContainer>{props.cluster[1]}</TabContainer>}
      {value === 2 && <TabContainer>{props.cluster[2]}</TabContainer>}
      {value === 3 && <TabContainer>{props.cluster[3]}</TabContainer>}
      {value === 4 && <TabContainer>{props.cluster[4]}</TabContainer>}
    </div>
  );
}
