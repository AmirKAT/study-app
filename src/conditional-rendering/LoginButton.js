import React, { useState } from 'react';

function LoginButton() {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Button that toggles login state and changes label accordingly
  return <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>;
}

export default LoginButton;
