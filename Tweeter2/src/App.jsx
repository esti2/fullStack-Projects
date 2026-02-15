import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css';
import Navbar from './components/Navbar';
import axios from "axios";

import CreateTweet from './components/CreateTweet';
import ViewTweeter from './components/ViewTweeter';


function App() {
  const [count, setCount] = useState(0)
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    async function fetchTweets() {
      const response = await axios.get(
        "https://agsaphbcwazvuenwsnca.supabase.co/rest/v1/Tweets?apikey=sb_publishable_3kTDeTVg6NfWrboe7oMopA_X-cuT_ih");
      setTweets(response.data);
    }
    fetchTweets();
  }, []);

  try {
    async function addTweet(userName, content) {
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

  } catch (error) {
    alert(error.response.data)
  }

  return (
    <>
      <Navbar>

        <CreateTweet addTweet={addTweet}>
        </CreateTweet>
        <ViewTweeter tweets={tweets}></ViewTweeter>
      </Navbar>
    </>
  )
}

export default App
