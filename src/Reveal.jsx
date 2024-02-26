import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = "full" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();
    useEffect(() => {
        console.log(isInView)
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])
    return (
        <div ref={ref} className={`relative w-${width} overflow-hidden`}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 100 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{duration: 0.7, delay: 0.3}}
            >
            {children}
            </motion.div>
        </div>
    )
}

export default Reveal