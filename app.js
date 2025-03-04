const github = new Github();
const ui = new UI();
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const userInput = e.target.value;

  if (userInput !== "") {
    github.getUser(userInput).then((data) => {
      if (data.profile.message === "Not Found") {
        ui.Showalert("User not found", "alert alert-danger");
      } else {
        ui.Showprofile(data.profile);
        ui.Showrepose(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
