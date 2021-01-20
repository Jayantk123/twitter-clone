import React, {useState, useEffect} from 'react';
import TweetBox from "./TweetBox";
import './Feed.css';
import Post from "./Post";
import db from './firebase';
import FlipMove from 'react-flip-move';


export default function Feed() {
const [posts, setPosts] = useState([]);


useEffect ( () => {
db.collection('posts').onSnapshot(snapshot => (
    setPosts(snapshot.docs.map(doc => doc.data()))
    /*give all of the data in array from fb*/
))
}, []);
    return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
      {posts.map((post) => (
        <Post
        key={post.text}/*firebase document id*/
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
      </FlipMove>
    </div>
  );
}
