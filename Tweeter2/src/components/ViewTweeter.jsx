import Tweet from "./Tweet"

export default function ViewTweeter({ tweets }) {


    return (<>

        {tweets.map((tweet, index) => (
            <Tweet key={index} content={tweet.content} userName={tweet.userName} date={tweet.date} />))}


    </>);
}