import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById, getCommentsById } from '../../Utility/dbManager';
import Description from '../Description/Description';
import Comments from '../Comments/Comments';

const Details = () => {
    const Id = useParams();
    // console.log(id);
    const [currentPost, setCurrentPost] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const post = getPostById(Number(Id.userId));
        post.then(result => {
            // console.log(result)
            setCurrentPost(result);
        });
        const comment = getCommentsById(Number(Id.userId));
        comment.then(result => {
            setComments(result);
        })
    },[Id]);
    
    // Making random image url of a commenter...
    comments.map((comment) => {
        const id = Math.floor((Math.random()*100));
        let image = `https://randomuser.me/api/portraits/men/${id}.jpg`;
        if(id%3===0){
            image = `https://randomuser.me/api/portraits/women/${id}.jpg`
        }
        return comment.image = image;
    });

    if(comments.length<1){
        return "";
    }
    
    return (
        <div className="jumbotron">
            <div className="text-center row">
                {/* Displaying details of the post which is already clicked... */}
                <Description currentPost={currentPost}></Description>
            </div>
            <div className="comments row">
                {
                    // Displaying all comments of the post...
                    comments.map(comment => <Comments key={comment.id} comment={comment}></Comments>)
                }
            </div>
        </div>
    );
};

export default Details;