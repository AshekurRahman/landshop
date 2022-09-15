import React from 'react'
import styles from './SectionTitle.module.css'

const SectionTitle = (props) => {
  return (    
    <div className={`${styles._section_title} ${props.className}`}>                
        {props.suptitle && <p className={styles._top_title}>{props.suptitle}</p>}                
        {props.title && <h2 className={styles._title}>{props.title}</h2>}
        {props.subtitle && <p className={styles._sub_title}>{props.subtitle}</p>}
    </div>
  )
}

export default SectionTitle