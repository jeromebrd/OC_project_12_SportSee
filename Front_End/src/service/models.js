/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {Object[]} data
 * @param {number} userId
 */

export const getMockUserById = (data, userId) =>
  data.filter((user) => user.id === userId);
