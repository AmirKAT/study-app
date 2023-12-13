import React, { useState, useEffect } from 'react';

function PostList() {
  // State 'posts' to store the list of blog posts.
  const [posts, setPosts] = useState([]);

  // State 'loading' to track the loading status of the API request.
  const [loading, setLoading] = useState(true);

  // State 'error' to store any error that occurs during the API request.
  const [error, setError] = useState(null);

  // useEffect hook is used to perform side effects in functional components.
  useEffect(() => {
    // Fetching data from the API.
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json()) // Parsing the JSON response.
      .then(data => {
        setPosts(data);  // Setting the 'posts' state with the fetched data.
        setLoading(false); // Updating the 'loading' state to false as data is fetched.
      })
      .catch(error => {
        setError(error); // If an error occurs, set the 'error' state with the caught error.
        setLoading(false); // Even on error, 'loading' is set to false as the fetching process is complete.
      });
  }, []); // The empty dependency array ensures this effect runs only once after the initial render.

  // Conditional rendering based on 'loading' and 'error' states.
  if (loading) return <div>Loading...</div>; // Render a loading text when data is being fetched.
  if (error) return <div>Error: {error.message}</div>; // Render error message if an error occurred.

  // Render the list of posts.
  return (
    <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}

export default PostList;
