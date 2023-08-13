import { color } from "framer-motion";
import { proxy } from "valtio";

{
  /**valtio is an alternative of Redux it use proxy state instade of immutable state of redux */
}

const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
