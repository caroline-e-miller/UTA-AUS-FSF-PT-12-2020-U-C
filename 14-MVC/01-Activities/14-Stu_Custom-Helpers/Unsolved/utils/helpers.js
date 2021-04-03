module.exports = {
  format_time: (date) => {

    return date.toLocaleTimeString();
  },
  formatDate: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear(Y + 5)}`
  }
  // TODO: Create a custom helper 'format_date' that takes in a timestamp,
  // adds five years to the date, and formats it as M/D/YYYY
};
