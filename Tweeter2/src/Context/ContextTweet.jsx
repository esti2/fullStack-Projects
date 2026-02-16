import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ContextTweet = createContext(null);

export default function ContextTweetProvider({ children }) {

    const [tweets, setTweets] = useState([])

    useEffect(() => {
        async function fetchTweets() {
            const response = await axios.get(
                "https://agsaphbcwazvuenwsnca.supabase.co/rest/v1/Tweets?apikey=sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih");
            setTweets(response.data);
        }
        fetchTweets();
    }, []);


    async function addTweet(userName, content) {
        try {
            const timeCreated = new Date().toLocaleString('en-US');
            let newTweets = [...tweets];
            newTweets.unshift({ userName: userName, date: timeCreated, content: content })
            setTweets(newTweets);


            const response = await axios.post(
                "https://agsaphbcwazvuenwsnca.supabase.co/rest/v1/Tweets",
                {
                    userName: userName,
                    content: content,
                    date: timeCreated
                },
                {
                    headers: {
                        apikey: "sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih",
                        "Content-Type": "application/json"
                    }
                }
            );

            if (response.status === 200 || response.status === 201)
                console.log("sucsses");
        }

        catch (error) {
            alert(error.response.data)
        }
    }

    return (
        <ContextTweet value={{ addTweet: addTweet, tweets: tweets }}>
            {children}
        </ContextTweet >
    )

}
export function useTweets() {
    return useContext(ContextTweet);
}