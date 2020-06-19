$(document).ready(function () {
  $(".modal").modal();

  $(".submitBtn").click(function () {
    event.preventDefault();
    const msg = {
      name: $("#name").val().trim(),
      email: $("#email").val().trim(),
      message: $("#message").val().trim(),
    };
    $.post("/msg", msg).then(function (req, res) {
      console.log("msg", msg);
    });
    $(".modal").modal("close");
  });

  $(".sidenav").sidenav();
});
