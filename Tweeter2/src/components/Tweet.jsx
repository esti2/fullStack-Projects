import { Box } from "@mantine/core";

export default function Tweet({ date, content, userName }) {

    return (<>
        <Box my="xl" >
            <label>{userName}</label>
            <label>{date}</label>
            <br />
            {content}

        </Box>
    </>)
}