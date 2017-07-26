// Get the HTML input elements
var newActivity_Name = document.getElementById("activity_name"),
    newActivity_Time = document.getElementById("activity_time"),
    newActivity_Category = document.getElementById("activity_category"),
    saveBtn = document.getElementById("save_input"),
    outputSection = document.getElementById("output");

// When user clicks Save button >> save the activity to the database
saveBtn.addEventListener("click", (event) => {
  var submitted_Name = newActivity_Name.value,
      submitted_Time = newActivity_Time.value,
      submitted_Category = newActivity_Category.value,
      deleteBtn;

      // When the user has input values into all of the input fields (required):
      if (submitted_Name !== null && submitted_Time !== null && submitted_Category !== null) {
        // Add the activity to the database

        // Erase the input from the input elements, to enable the user to add more activities
        submitted_Name = "",
        submitted_Time = "",
        submitted_Category = "";
      }

      // prevent the browser from executing the default button behaviour
      event.preventDefault();

      // Create event handler for activity removal
      outputSection.addEventListener("click", (event) => {
        // If a Delete button was clicked:
        if (event.target.classList.contains("delete_activity")) {
          // Delete the corresponding activity from the database

          // prevent the browser from executing the default button behaviour
          event.preventDefault();
        };
      }, false);

      // Create event handler for activity editing

}, false);
