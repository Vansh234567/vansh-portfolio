"use client";
import { motion } from "framer-motion";
import { experiences } from "../data/experience";
export default function Experience(){return <section id="experience" className="section-wrap"><div className="page-shell section-grid">
 <p className="section-kicker">02 / Experience</p>
 <div className="experience-list">{experiences.map((item,i)=><motion.article key={item.company} className="experience-row" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:.55,delay:i*.06}}>
  <div className="experience-number">0{i+1}</div><div className="experience-main"><h3>{item.role}</h3><p className="company">{item.company}</p><p className="description">{item.description}</p></div><time>{item.period}</time>
 </motion.article>)}</div>
 </div></section>}
