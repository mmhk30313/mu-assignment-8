import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
    margin: '0 auto'
  },
  line: {
      width: '100%',
      height: '1.5px',
      backgroundColor: 'lightgray',
  }
});

// A particular post is showed by using material ui...
const PostCard = ({post}) => {
    const classes = useStyles();
    const {id,title,body,userId} = post;
    const time = new Date();
    return (
        <div className='col-md-12 text-center' style={{marginBottom: '25px',padding: '0 20%'}}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} color="primary" gutterBottom>
                        Post of the Day - {time.toLocaleDateString()}
                    </Typography>

                    <Typography className={classes.line}></Typography>

                    <Typography variant="h6" component="p" className={classes.pos} color="primary">
                       <span className='text-info'>Title:</span> {title}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {body}
                    </Typography>

                    <Typography style={{marginTop: '10px'}}>
                        <span className={classes.textColor1}>{`POST-ID: ${id}`}</span> & <span className={classes.textColor2}>{`USER-ID: ${userId}`}</span>
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link to={`/details/${id}`} className={classes.button} style={{textDecoration: 'none', width: 'fit-content',height: 'fit-content'}}><Button variant="outlined" color="secondary" endIcon={<Icon>send</Icon>} size="small">See more</Button></Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default PostCard;