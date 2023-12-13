import React, { useState, useEffect } from 'react';

function UserList() {
  // State for storing users
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users when the component mounts
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []); // Empty dependency array means this runs once after the initial render

  // Render a list of users
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default UserList;
