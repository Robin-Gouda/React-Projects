{
  /**An open source, production-ready motion library for React
   *Create a local snapshot that catches changes. Normally, Valtio's snapshots (created via snapshot() ) are recreated on any change to a proxy, or any of its child
   */
}

import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

{
  /**importing proxy state from store.
   *importing customButton from components.*/
}

import state from "../store";
import { CustomButton } from "../components";

{
  /**animation using the concept of spread operator
   **using concept of " Conditional branching: if, '?'  " " https://javascript.info/ifelse "  */
}

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S
                <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                coustmization tool. <strong>Unleash your Imagination</strong>{" "}
                and define your own style{" "}
              </p>

              <CustomButton
                type="filled"
                title="customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
