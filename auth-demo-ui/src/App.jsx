import './App.css';
import { useState } from 'react';
import { UserContext } from './UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main'
import LoginForm from './components/LoginForm/LoginForm';
import SignupForm from './components/SignupForm/SignupForm';

function App() {
  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <div className="app">
      <UserContext.Provider value={{ user, updateUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Main /> : <LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
