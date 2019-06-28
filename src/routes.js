import React from 'react';

const AppRoutes = props => (
  <div className={props.classes.container}>
    <Grid
      className={props.classes.viewFrame}
    >
      <div className={props.classes.subContainer}>
        <ProjectRoutes routesAvailable={props.getRoutesByPermission()} />
      </div>
    </Grid>
  </div>
);

AppRoutes.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string,
    viewFrame: PropTypes.string,
    subContainer: PropTypes.string,
  }).isRequired,
  getRoutesByPermission: PropTypes.func.isRequired,
};

export default AppRoutes;
