class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  Showprofile(user) {
    this.profile.innerHTML = `<div class= "card card-body mb-3">
                <div class ="row">
                   <div class= "col-md-3">
                   <img class="img-fluid mb-2" src="${user.avatar_url}">
                   <a href="${
                     user.html_url
                   }" target=_blank class="btn btn-primary btn-block">View Profile</a>
                   </div>
                   <div class="col-md-9">
                        <span class="badge-primary">Public Repose: ${
                          user.public_repos
                        }</span>
                        <span class="badge-primary">Public Gist: ${
                          user.public_gists
                        }</span>
                        <span class="badge-success">Followers: ${
                          user.followers
                        }</span>
                        <span class="badge-info">Following: ${
                          user.following
                        }</span>
                      <br><br>
                      <ul class="list-group">
                        <li class= "list-group-item">${
                          user.company === null || "undefined"
                            ? "No Data"
                            : user.company
                        }</li>
                        <li class= "list-group-item">${
                          user.blog === null || "undefined"
                            ? "No Data"
                            : user.blog
                        }</li>
                        <li class= "list-group-item">${
                          user.location === null || "undefined"
                            ? "No Data"
                            : user.location
                        }</li>
                        <li class= "list-group-item">${user.created_at}</li>
                      </ul>
                   </div>
                </div>
          </div>
          <h3 class="page-heading mb-3">Latest Repos<h3>
          <div id="repos"></div>
          `;
  }

  Showrepose(repos) {
    let output = "";
    repos.forEach((repo) => console.log(repo));
  }

  Showalert(msg, className) {
    // stops the alert from reoccuring
    this.clearAlert();

    const div = document.createElement("div");

    div.className = className;

    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);

    setTimeout(() => {
      this.currentAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
