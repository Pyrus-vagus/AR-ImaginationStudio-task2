AFRAME.registerComponent("scroll-scale", {
  init: function () {
    window.addEventListener("wheel", (e) => {
      console.log("hey");
      let scaleFactor = e.deltaY > 0 ? 0.9 : 1.1;
      let scale = this.el.getAttribute("scale").clone();
      scale.multiplyScalar(scaleFactor);
      this.el.setAttribute("scale", scale);
    });
  },
});
