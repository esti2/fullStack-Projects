
// function renderPosts(posts) {
// const posts=document.querySelector("post");
// posts.innerHTML="";

// for (const item of posts)
// {
// const post=document.createElement("div"); 
// post.textContent=item.post;

// }
// }
const Renderer = function () {
    const renderPosts = function (posts) {
        const $postsDiv = $("#posts");
        $postsDiv.empty();

        for (let post of posts) {
            // שים לב: item הוחלף ב-post כדי להתאים ללופ
            let postHTML = `
                <div class="post" data-id="${post.id}">
                    <div class="post-text">${post.text}</div>
                    <div class="comments"></div>
                    <input type="text" placeholder="Got something to say?" class="comment-input">
                    <button class="comment-button">Comment</button>
                    <div class="delete" data-id="${post.id}">Delete Post</div>
                </div>
            `;

            const $postElement = $(postHTML);

            // רינדור תגובות
            for (let comment of post.comments) {
                $postElement.find(".comments").append(`
                    <div class="comment" data-id="${comment.id}">
                        <span class="delete-comment" data-id="${comment.id}">X</span>
                        ${comment.text}
                    </div>
                `);
            }

            $postsDiv.append($postElement);
        }
    }

    return {
        renderPosts: renderPosts
    }
}