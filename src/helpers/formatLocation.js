/**
 *
 * @description  a method for formatting location string
 * @function formatLocationString
 * @property location {string}
 * @returns string
 */

const formatLocationString = (location) => {
  if (!location) return;
  const words = location.substring(1).split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
  }

  return words.join(' ');
};

export default formatLocationString;
