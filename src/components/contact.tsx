"use client";
import { motion } from "framer-motion";
export default function Contact(){return <section id="contact" className="contact-section"><div className="page-shell">
 <p className="section-kicker">05 / Contact</p>
 <motion.div className="contact-grid" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.65}}><div><h2>Have an interesting problem or opportunity?</h2><p>I&apos;m open to conversations around data, finance, research and product building.</p></div></motion.div>
 </div></section>}
