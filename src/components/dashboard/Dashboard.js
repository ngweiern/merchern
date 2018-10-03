import React from 'react'
import PropTypes from 'prop-types'
import Filter from '../Filter'
import ProductList from '../products/ProductList'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
    justify: 'center'
  },
  overall: {
    position: 'absolute',
    top: '110px',
    // [theme.breakpoints.down('sm')]: {
    //   top: '90px'
    // },
    // [theme.breakpoints.up('md')]: {
    //   top: '90px'
    // }
  }

});

const Dashboard = (props) => {

  const { classes } = props;
  return (
    <Grid container className={classes.overall}>
      <Filter/>
      <ProductList/>
    </Grid>
  )
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);