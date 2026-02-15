import { Button, Textarea, Container } from "@mantine/core";
import { useState } from "react";

export default function CreateTweet({ addTweet }) {
    const [content, setContent] = useState("");

    const isLong = content.length > 140

    return (<>
        <Container>
            <Textarea color="black" variant="unstyled" size="lg" value={content} placeholder="What you have in mind..."
                onChange={(event) => setContent(event.currentTarget.value)} >
            </Textarea><Button disabled={isLong || content.length === 0 ? true : false}
                onClick={() => {
                    addTweet("esti", content);
                    setContent("");

                }}
            >Tweet</Button>
            <label >{isLong ? "The tweet can`t contain more than 140 chars." : ""}</label>
        </Container ></>)
}