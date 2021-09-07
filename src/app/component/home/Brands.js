import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    paddingRight:'20px',
    paddingLeft:'20px',boxShadow:"inherit"

  },
  img :{
    height: "100%",
    width: "100%",
    '&:hover' : {
      height: '120px',
      width: '250px',
    }
  },
  item :{
    paddingLeft:'30px',
    paddingRight:'30px',
  }
}));

export default function Brands() {
  const classes = useStyles();

  return (
        <div className={classes.root}>
          <Grid container className={classes.item} spacing={3}>
            <Grid item className={classes.item} xs={4} sm={2} >
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/LENOVO.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/TECNO.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/OPPO.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/MOTOROLA.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/ORAIMO.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/MOTOROLA.png'} />
              </Paper>
            </Grid>
          </Grid>
    </div>

  );
}
