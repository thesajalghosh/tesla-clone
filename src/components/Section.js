import React from 'react'
import '../CssFile/Section.css'
import { IoIosArrowDown } from 'react-icons/io'

const Section = (props) => {

 

  return (
    <div className='wrap' style={{
      backgroundImage: `url(${props.backgroundImg})`,
    
     
     
    }}>

      <div className='section__text'>
        <h1 className='section__header'>
          {props.title}
        </h1>
        <p>{props.description}</p>
      </div>
      <div className='section__footer'>
        <div className='section__btn'>
          <button className='left__btn'>{props.lefttext}</button>
          {props.righttext && 
            <button className='right__btn'>{props.righttext}</button>}
          
        </div>
        <IoIosArrowDown className="down__arrow"  size='30px'/>
      </div>
    </div>
  )
}

export default Section
