import React, { useEffect, useContext } from 'react';
import { Context } from '../../App';
import PostCard from '../PostCard/PostCard';

const Home = () => {
    const [posts,setPosts] = useContext(Context);
    
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
        
    }, [setPosts])

    if(posts.length===0){
        return "";
    }

    return (
        <div className="jumbotron">
            <div className="row">
                {
                    // Displaying all post...
                    posts.map(post => <PostCard key={post.id} post={post}></PostCard>)
                }
            </div>
        </div>
    );
};

export default Home;