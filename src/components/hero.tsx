"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials=[
 {href:"https://github.com/Vansh234567",label:"GitHub",icon:FaGithub},
 {href:"https://x.com/vanshbhatiaxyz",label:"X",icon:FaXTwitter},
 {href:"https://linkedin.com/in/vanshbhatia278",label:"LinkedIn",icon:FaLinkedin},
 {href:"mailto:vanshb2785@gmail.com",label:"Email",icon:FaEnvelope},
];
const ease=[0.22,1,0.36,1] as const;
export default function Hero(){return <section id="top" className="page-shell hero-section">
 <div className="hero-grid">
  <motion.div initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8,ease}}>
   <motion.p className="eyebrow" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.15}}>Mathematics · Markets · Products</motion.p>
   <h1 className="hero-title">Vansh<br/>Bhatia<span>.</span></h1>
   <p className="hero-lede">I use data to study markets, research ideas and build useful products.</p>
   <p className="hero-meta">Mathematics &amp; Computing at MIT Manipal <span>·</span> Founder&apos;s Office at Raaj Wealth <span>·</span> Class of 2027</p>
   <div className="hero-actions">
    <a href="#projects" className="button-primary">Explore my work <ArrowDownRight size={17}/></a>
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button-secondary">Resume <ArrowUpRight size={16}/></a>
   </div>
  </motion.div>
  <motion.aside className="hero-card" initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.18,ease}}>
   <div className="portrait-wrap"><Image src="/images/profile.png" alt="Portrait of Vansh Bhatia" width={240} height={240} priority className="portrait"/></div>
   <p className="eyebrow accent">Currently</p>
   <p className="current-copy">Working across finance, analytics and digital initiatives.</p>
   <div className="socials">{socials.map(({href,label,icon:Icon})=><a key={label} href={href} target={href.startsWith('mailto:')?undefined:'_blank'} rel="noopener noreferrer" aria-label={label}><Icon/></a>)}</div>
  </motion.aside>
 </div>
 <motion.div className="hero-stats" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.42,ease}}>
  {[['03+','Projects built'],['₹6K+','Business revenue'],['2027','Graduation year']].map(([v,l])=><div key={l} className="stat"><strong>{v}</strong><span>{l}</span></div>)}
 </motion.div>
 </section>}
