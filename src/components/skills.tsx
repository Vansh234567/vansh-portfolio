"use client";
import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
export default function Skills(){return <section id="skills" className="section-wrap"><div className="page-shell section-grid">
 <p className="section-kicker">04 / Capabilities</p>
 <div className="skills-grid">{skillGroups.map((g,i)=><motion.div key={g.category} className="skill-item" initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}><span>0{i+1}</span><h3>{g.category}</h3><p>{g.items.join(' · ')}</p></motion.div>)}</div>
 </div></section>}
