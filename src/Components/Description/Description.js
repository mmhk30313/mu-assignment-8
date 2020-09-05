import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  textColor1: {
      color: 'orange'
  },
  textColor2: {
      color: '#ab47bc'
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    marginLeft: '30%'
  }
});

// After clicking see more button, the details of the post is showed here...
const Description = ({currentPost}) => {
    const classes = useStyles();
    const {id,title,body,userId} = currentPost;
    const time = new Date();
    return (
        <div className='col-md-12 text-center' style={{marker: '0 auto',marginBottom: '25px',padding: '0 20%'}}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="primary" gutterBottom>
                        Post of the Day - {time.toLocaleTimeString()}
                    </Typography>
                    <hr/>

                    <Typography variant="h6" component="p" className={classes.pos} color="secondary">
                        <span className='text-info'>Title:</span> {title}
                    </Typography>

                    <Typography variant="body2" component="h6">
                        {body}
                        <br/><br/><hr/>
                        <span className={classes.textColor1}>{`POST-ID: ${id}`}</span> & <span className={classes.textColor2}>{`USER-ID: ${userId}`}</span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default Description;