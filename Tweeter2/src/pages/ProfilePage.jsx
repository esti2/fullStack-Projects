import { Textarea } from "@mantine/core";

export default function ProfilePage() {

    return (<>
        <h2>Profile</h2>
        <Textarea
            label="User Name"
            placeholder="Input placeholder"
        />
        <button>Save</button>
    </>)
}