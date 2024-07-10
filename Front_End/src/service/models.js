/**
 * Fetch data from a given URL and set it to the provided state function.
 * If an error occurs, sets the error state.
 * @async
 * @function fetchData
 * @param {string} url - The URL to fetch data from.
 * @param {function} setData - The state function to set the fetched data.
 * @param {function} setError - The state function to set the error if fetching fails.
 * @returns {Promise<void>} A promise that resolves when the fetch operation is complete.
 */

export const fetchData = async (url, setData, setError) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('404');
      }
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    setData(data);
  } catch (error) {
    if (error.message.includes('404')) {
      setError({ code: 404, message: 'User not found' });
    } else {
      setError(error);
    }
  }
};
