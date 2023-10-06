import React from 'react';


const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>ToDo App</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Tasks</button>
      </div>
    </header>
  );
};

export default Header;
