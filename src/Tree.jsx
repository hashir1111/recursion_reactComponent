import React, { useState } from 'react'

const Tree = ({ tree }) => {
    const [isVisible , setIsVisible] = useState(false)
    const expand = () => {
        setIsVisible(!isVisible)
    }
  return (
    <li style={{listStyle:'none'}}>
            <button className='button' onClick={expand}>{tree.label} {isVisible ? '-' : '+'}</button>
            
            {isVisible ? (
                tree?.branches?.map((newtree) => {
                    return(
                        <ul key={newtree.id}>
                            <Tree tree={newtree} />
                        </ul>
                    )
                })
            ) : (<></>)}
            
        </li>
  )
}

export default Tree