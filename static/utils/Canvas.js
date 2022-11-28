import { Gradient } from "./Gradient";

var gradient;

export function initCanvas(canvasId) {
  gradient = new Gradient();
  gradient.initGradient(canvasId);
}
