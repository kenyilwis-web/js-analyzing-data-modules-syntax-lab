require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize the Return Object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge arrays using spread operator
  for (const arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  // Step 5: Get today's date (formatted M/d/yyyy)
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Step 7: Return object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};