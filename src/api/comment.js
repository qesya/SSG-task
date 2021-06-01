export const getComments = (postId, callback) => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments')
    .then(response => response.json())
    .then(json => callback(json));
};
