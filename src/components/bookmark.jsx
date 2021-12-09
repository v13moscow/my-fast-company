import React from 'react'

const Bookmark = (props) => {
  const getBookClass = (classes) => {
    return classes ? 'bi bi-bookmark-star-fill': 'bi bi-bookmark-star'
    }
    
    return <button 
              onClick={props.onChange}><i className={getBookClass(props.bookmark)}></i>
           </button>
}

export default Bookmark