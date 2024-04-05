const { default: Link } = require("next/link")
import {motion} from "framer-motion"
const JoinUs=()=>{
    return(
        <div className="w-screen h-calc([100vh-400px]) mt-7 flex flex-col gap-16 items-center justify-center bg-gradient-to-b from-yellow-300 to-black text-center">
        <h1 className="text-2xl">Want to do A Command?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Fashion and Shoe Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    )
}

export default JoinUs