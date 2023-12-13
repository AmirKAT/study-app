import React, { useState } from 'react';
import Greeting from './components/Greeting';
import Timer from './components/Timer';
import LoginButton from './conditional-rendering/LoginButton';
import UserList from './hooks/UserList';
import PostList from './hooks/PostList';

function App() {
  const [name, setName] = useState('React Learner'); // State for the name used in Greeting

  // Function to handle the change in the input field
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      {/* Input field to change the name */}
      <input type="text" value={name} onChange={handleNameChange} />

      {/* Greeting component, name prop passed to display personalized message */}
      <Greeting name={name} />

      {/* Timer component to display time since component mounted */}
      <Timer />

      {/* LoginButton component to toggle login/logout */}
      <LoginButton />

      {/* UserList component to fetch and display a list of users */}
      <UserList />

      {/* PostList component to fetch and display a list of posts */}
      <PostList />
    </div>
  );
}

export default App;
