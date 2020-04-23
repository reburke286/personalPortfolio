$(document).ready(function () {
  $(".modal").modal();

  $(".submitBtn").click(function () {
    $(".modal").modal("close");
  });

  $(".sidenav").sidenav();
});
