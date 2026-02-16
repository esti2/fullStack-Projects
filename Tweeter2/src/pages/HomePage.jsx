import CreateTweet from '../components/CreateTweet';
import ViewTweeter from '../components/ViewTweeter';

export default function HomePage({ addTweet, tweets }) {

    return (<>

        <h2>homePage</h2>
        <CreateTweet addTweet={addTweet}>
        </CreateTweet>
        <ViewTweeter tweets={tweets}></ViewTweeter>
    </>)
}