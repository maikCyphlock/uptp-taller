(function () {
  const socket = io();
  socket.on("reload", () => {
    console.log("Reloading page...");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  });
})();
