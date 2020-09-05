import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  color: {
      color: 'orange'
  },
  paper: {
    padding: theme.spacing(5),
    margin: 'auto',
    maxWidth: 700,
  },
  image: {
    width: 188,
    height: 188,
},
img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '200%',
    borderRadius: '50%',
  },
}));

// A particular comment is showed by using material ui...
const Comments = ({comment}) => {
    const {name,email,body,image} = comment
    const classes = useStyles();
    return (
        <div className={`col-md-12`} style={{marginBottom: '15px'}}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={image}/>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1">
                                    <span className={classes.color}>Comment:</span> {body}.
                                </Typography>
                                <hr/>
                                <Typography color="primary" variant="body2" gutterBottom>
                                    Name: {name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2" style={{ cursor: 'pointer'}} color="secondary">
                                    Email: {email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default Comments;