'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Image from './Image';

const links = [
  {
    title: "Website",
    href: "/WebApp",
    src: "Coding.png"
  },
  {
    title: "Graphic",
    href: "/Graphic",
    src: "Graphicdesign.png"
  },
  {
    title: "Production",
    href: "/Production",
    src: "Camera.png"
  },
  {
    title: "Drawing",
    href: "/Drawing",
    src: "Drawing.png"
  },
  
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <div className="comp">
      <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
        </div>
        <Image src={links[selectedLink.index].src} className='Images' width={200} height={200}  isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
    </div>
  )
}