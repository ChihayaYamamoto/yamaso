
        function loadMore() {
            const feed = document.getElementById('feed');
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.innerHTML = '<img src="newimage.jpg" alt="New Post">';
            feed.appendChild(newPost);
        }
    