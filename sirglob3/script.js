document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 115, timeBetweenNPCs: 3400, npcCollisionRadius: 100, actionDuration:500, jumpHeight: 225});
});