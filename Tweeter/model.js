
let posts = [
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't worry second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
];
let postIdCounter = 0;
let commentIdCounter = 0;


function getPosts() {
    return posts;
}

function addPost(text) {
    let idLast = posts[getPosts().length - 1].id;
    idLast = idLast.replace('p', '');
    parseInt(idLast);
    idLast++;
    const newPost = {};
    newPost.text = text;
    newPost.id = idLast;
    newPost.comments = [];
    posts.push(newPost);
}

function removePost(postID) {
    let index = posts.findIndex(p => p.id === postID)
    posts.splice(index, 1);

}

function addComment(postID, text) {
    let index = posts.findIndex(p => p.id === postID)
    let comments = posts[index].comments;
    idLastComment = comments[comments.length - 1].id;
    idLastComment = idLastComment.replace('c', '');
    parseInt(idLastComment);
    idLastComment++;
    const newComment = {};
    newComment.text = text;
    newComment.id = idLastComment;
    comments.push(newComment);
}

function removeComment(postID, commentID) {
    let indexPost = posts.findIndex(p => p.id === postID)
    let comments = posts[indexPost].comments;
    let indexComment = comments.findIndex(c => c.id === commentID)
    posts[indexPost].comments.splice(indexComment, 1);
}