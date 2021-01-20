import React,{useState} from 'react'
import './TweetBox.css';
import { Avatar,Button } from "@material-ui/core"; /*tweet button image avatar*/
import db from './firebase'; 

function TweetBox() {

const [tweetMessage, setTweetMessage] = useState("");
const [tweetImage, setTweetImage] = useState("");

const sendTweet = e =>{
    e.preventDefault();/*stop refreshing during tweet click button*/

db.collection('posts').add({
displayName: 'jk',
username: 'userjk',
verified: true,
text: tweetMessage,
image: tweetImage,
avatar:
"https://www.facebook.com/photo?fbid=502666553966525&set=a.123796555186862"


});

setTweetMessage("");
setTweetImage("");
};

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
        <Avatar />
         <input 
                onChange={(e) => setTweetMessage(e.target.value)}/*get tweet grom user*/
                value ={tweetMessage}
                type="text" placeholder="What's happening?"></input>
                </div>

        <input 
         onChange={(e) => setTweetImage(e.target.value)}/*get tweetimagr grom user*/
         value ={tweetImage}
  className="tweetBox__imageInput"
     type="text" placeholder="Enter image URL"></input>
                <Button onClick={sendTweet}
                 type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox;
