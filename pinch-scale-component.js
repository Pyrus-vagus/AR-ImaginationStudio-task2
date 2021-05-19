AFRAME.registerComponent("pinch-scale", {
  schema: {
    min: { default: 0.33 },
    max: { default: 3 },
    scale: { default: 0 }, // If scale is set to zero here, the object's initial scale is used.
  },
  init() {
    const s = this.data.scale;
    this.initialScale =
      (s && { x: s, y: s, z: s }) || this.el.object3D.scale.clone();
    this.scaleFactor = 1;
    this.handleEvent = this.handleEvent.bind(this);
    window.addEventListener("scroll", this.handleEvent);
    console.log("something");
    this.el.classList.add("cantap"); // Needs "objects: .cantap" attribute on raycaster.
  },
  remove() {
    window.removeEventListener("scroll", this.handleEvent);
  },
  handleEvent(event) {
    this.scaleFactor *=
      1 + event.detail.spreadChange / event.detail.startSpread;
    this.scaleFactor = Math.min(
      Math.max(this.scaleFactor, this.data.min),
      this.data.max
    );
    console.log("scrolling");
    this.el.object3D.scale.x = this.scaleFactor * this.initialScale.x;
    this.el.object3D.scale.y = this.scaleFactor * this.initialScale.y;
    this.el.object3D.scale.z = this.scaleFactor * this.initialScale.z;
  },
});
