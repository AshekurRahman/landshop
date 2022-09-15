import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'
import logo from './images/logo.png';
import Icon from '../../../common/Icon/Icon';

const Footer = () => {
  return (
    <div className={styles._area}>
        <div className="container">
           <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className={styles._logo}>
                    <Image src={logo} alt="" width="386px" height="84px" />
                </div>
                <h2 className={styles._title}>Purchase Maruncy &amp; Build Your Awesome Website Now</h2>
                <Link href="/" ><span className='btn btn-primary'><Icon name={`ic-envato`} className={styles._icon} /> Purchase Now</span></Link>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer