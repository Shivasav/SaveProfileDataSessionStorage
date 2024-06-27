"use strict";

$(document).ready(() => {
  // Display data from session storage
  $("#email").text(sessionStorage.getItem("email"));
  $("#phone").text(sessionStorage.getItem("phone"));
  $("#postal").text(sessionStorage.getItem("postal"));
  $("#dob").text(sessionStorage.getItem("dob"));

  $("#back").click(() => {
    // Go back to the previous page
    window.history.back();
  });
});
