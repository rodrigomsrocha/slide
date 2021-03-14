import SlideNav from "./slide.js";

const slide = new SlideNav(".slide", ".slide-wrapper", "active");
slide.init();
slide.addPrevNext(".prev", ".next");
slide.addControl(".custom-controls");
