export const getAllPosts = callback => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => callback(json));
};

export const getPost = (postId, callback) => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + postId)
    .then(response => response.json())
    .then(json => callback(json));
};
