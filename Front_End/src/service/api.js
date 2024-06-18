import {
  getMockUserById,
  getMockUserActivity,
  getMockUserAverageSessions,
  getMockUserPerformance,
} from '../mock/mockApi';
const apiUrl = 'http://localhost:3000';
const isMockData = true;

export const getUserById = async (userId) => {
  try {
    if (isMockData) {
      getMockUserById(userId);
    } else {
      const response = await fetch(`${apiUrl}/user/${userId}`);
      if (!response.ok) {
        throw new Error(`Error fetching data from API: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export const getUserActivity = async (userId) => {
  try {
    if (isMockData) {
      getMockUserActivity(userId);
    } else {
      const response = await fetch(`${apiUrl}/user/${userId}/activity`);
      if (!response.ok) {
        throw new Error(`Error fetching data from API: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error fetching user activity:', error);
    throw error;
  }
};

export const getUserAverageSessions = async (userId) => {
  try {
    if (isMockData) {
      getMockUserAverageSessions(userId);
    } else {
      const response = await fetch(`${apiUrl}/user/${userId}/average-sessions`);
      if (!response.ok) {
        throw new Error(`Error fetching data from API: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error fetching user average sessions:', error);
    throw error;
  }
};

export const getUserPerformance = async (userId) => {
  try {
    if (isMockData) {
      getMockUserPerformance(userId);
    } else {
      const response = await fetch(`${apiUrl}/user/${userId}/performance`);
      if (!response.ok) {
        throw new Error(`Error fetching data from API: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error('Error fetching user performance:', error);
    throw error;
  }
};
