fetch(
  //   // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
  //   // per_page = things per page
  //   // state = state of the current issue (git)
  //   // sort = sort by created, updated, or comments
  //   // direction = how to return sorted results
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// // Parameter explanation.

// fetch("https://en.wikipedia.org/wiki/JSON"
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data)
//   }))