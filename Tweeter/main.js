const renderer = Renderer();
const allPosts = getPosts();

$(document).ready(function () {
    const renderer = Renderer();
    renderer.renderPosts(getPosts());
});