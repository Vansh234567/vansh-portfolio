"use client";
import { motion } from "framer-motion";
export default function About(){return <section id="about" className="section-wrap"><div className="page-shell section-grid">
 <p className="section-kicker">01 / About</p>
 <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.25}} transition={{duration:.7}}>
  <h2 className="display-heading">My work sits where <span>mathematics</span>, markets and practical product thinking meet.</h2>
  <div className="copy-columns"><p>I&apos;m a Mathematics &amp; Computing student at MIT Manipal, drawn to problems where data can improve a decision: understanding a market, testing a signal or explaining a financial choice.</p><p>I learn by building. That has taken me from quantitative research and financial analytics to a placement guidance platform and a small D2C venture.</p></div>
 </motion.div>
 </div></section>}
