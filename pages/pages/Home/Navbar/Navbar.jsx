import {React, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Logo from './images/logo.svg'
import { MdMenuOpen,MdClose } from 'react-icons/md';
import Icon from '../../../common/Icon/Icon'


const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <div className={`${isMobileMenu && styles.mobile_nav_open} ${styles._main_area}`} >
      <div className="container">
        <div className={styles._row} >
          <div className={styles._logo} >
            <Link href='/home'><Image src={Logo} alt="Vercel Logo" width={193} height={42} /></Link>
          </div>
          <div className={styles._navright}>
            <button onClick={() => setIsMobileMenu(!isMobileMenu)} className={`${styles._toggle} btn btn-none`} ><MdClose /></button>
            <div className={styles._menu} >
              <ul>
                <li><Link href='#Home'>Home</Link></li>
                <li><Link href='#Home'>Overview</Link></li>
                <li><Link href='#Home'>Pages</Link></li>
                <li><Link href='#Home'>Product</Link></li>
                <li><Link href='#Home'>Reviews</Link></li>
                <li><Link href='#Home'>FAQ</Link></li>
              </ul>
            </div>
            <div className={styles._actions} >
              <button type="button" className={styles._action} ><Icon name={`ic-chat`} className={styles._icon} /></button>
              <button type="button" className={styles._action} ><Icon name={`ic-user`} className={styles._icon} /></button>
              <button type="button" className={styles._action} ><Icon name={`ic-shop`} className={styles._icon} /></button>
            </div>
          </div>
          <button onClick={() => setIsMobileMenu(!isMobileMenu)} className={`${styles._toggle} btn btn-none`} ><MdMenuOpen /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar