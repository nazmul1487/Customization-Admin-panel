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

export default function WorkPartner() {
  const classes = useStyles();

  return (
        <div className={classes.root}>
          <Grid container className={classes.item} spacing={3}>
            <Grid item xs={4} sm={2} >
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/DARAZ.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/PICKABOO.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/EVALY.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/ROBISHOP.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/G&G.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/OTHOBA.png'} />
              </Paper>
            </Grid>
            <Grid item xs={4} sm={2} >
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/SHOPUP.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/PRIYO-SHOP.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/GEMSCLIP.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/SINDABAD.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/BAGDOOM.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/Ajker-Deal.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/CLICK-BD.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/SHAJGOJ.png'} />
              </Paper>
            </Grid>

            <Grid item xs={4} sm={2}>
              <Paper className={classes.paper}>
                <img className={classes.img} src={'media/logo/MEENACLICK.png'} />
              </Paper>
            </Grid>

          </Grid>

    </div>

  );
}
