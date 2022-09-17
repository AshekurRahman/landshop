import {React, useState, useEffect} from 'react'
import Link from 'next/link';
import { MdOutlineBolt } from 'react-icons/md';
import styles from './Header.module.css'

const Header = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);

    return () => window.addEventListener('scroll', handleScroll);
  }, [] );

  return (
    <div className={styles._main_area}>
           
    </div>
  )
}

export default Header