// import { useState } from 'react'
import './App.css';
import {
  getUserById,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from './service/api';
function App() {
  getUserById(18);
  getUserActivity(12);
  getUserAverageSessions(18);
  getUserPerformance(12);
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
