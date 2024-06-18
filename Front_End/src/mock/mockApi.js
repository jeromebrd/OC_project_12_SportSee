import mockData from './mockData.json';

export const getMockUserById = (userId) => {
  const user = mockData.USER_MAIN_DATA.find((user) => user.id === userId);
  if (user) {
    console.log('mock user: ', user);
    return user;
  } else {
    throw new Error(`User with id ${userId} not found in mock data`);
  }
};

export const getMockUserActivity = (userId) => {
  const userActivity = mockData.USER_ACTIVITY.find(
    (activity) => activity.userId === userId
  );
  if (userActivity) {
    console.log('mock user acitivty: ', userActivity);
    return userActivity;
  } else {
    throw new Error(
      `Activity for user with id ${userId} not found in mock data`
    );
  }
};

export const getMockUserAverageSessions = (userId) => {
  const userAverageSessions = mockData.USER_AVERAGE_SESSIONS.find(
    (session) => session.userId === userId
  );
  if (userAverageSessions) {
    console.log('mock user average sess: ', userAverageSessions);
    return userAverageSessions;
  } else {
    throw new Error(
      `Average sessions for user with id ${userId} not found in mock data`
    );
  }
};

export const getMockUserPerformance = (userId) => {
  const userPerformance = mockData.USER_PERFORMANCE.find(
    (performance) => performance.userId === userId
  );
  if (userPerformance) {
    console.log('mock user perf: ', userPerformance);

    return userPerformance;
  } else {
    throw new Error(
      `Performance data for user with id ${userId} not found in mock data`
    );
  }
};
