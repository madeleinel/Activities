var newActivityName = document.getElementById("activity_name"),
    newActivityTime = document.getElementById("activity_time"),
    newActivityCategory = document.getElementById("activity_category"),
    saveButton = document.getElementById("save_input"),
    outputSection = document.getElementById("output");

function createDeleteButton() {
  var deleteBtn = document.createElement("a");
  deleteBtn.textContent = "X";
  deleteBtn.classList.add("delete_activity");
  // deleteBtn.setAttribute("href", "#");
  return deleteBtn;
}
// Set up event handler to listen for 'click' on the save button
// ONLY when the elements are valid
// if (newActivityName !== null && newActivityTime !== null && newActivityCategory !== null) {

saveButton.addEventListener("click", (e) => {
  var newActivity,  // element containing the new activity
      deleteButton, // Button to remove each activity
      submittedName = newActivityName.value,
      submittedTime = newActivityTime.value,
      submittedCategory = newActivityCategory.value;

  // when the user has input values into all input fields
  if (submittedName !== null && submittedTime !== null && submittedCategory !== null) {
    // create text elements for each part of the new activity
    // >> to switch this later on, to use a database instead
    newActivity = document.createElement("p");
    newActivity.textContent = submittedName + " " + submittedTime + " " + submittedCategory;

    // add delete button to the activity (call what's being returned within the createDeleteButton() function)
    deleteButton = createDeleteButton();
    newActivity.insertAdjacentElement("afterbegin", deleteButton);

    // display the new element in the output section
    outputSection.appendChild(newActivity);

    // Erase the input from the input elements, to enable the user to add more activities
    submittedName = "",
    submittedTime = "",
    submittedCategory = "";
  }
  e.preventDefault(); // prevent the browser from executing the default button behaviour

  // Create event handler for activity removal
  // Listen for "click" within the entire output section
  // >> then find which delete button was clicked, and remove the activity that it's attached to
  // ie, the entire element that contains the clicked delete button
  outputSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete_activity")) {
      outputSection.removeChild(e.target.parentNode);
      e.preventDefault();
    };
  }, false);

}, false);

// }
