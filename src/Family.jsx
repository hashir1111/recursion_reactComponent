import React, { useState } from 'react'
import './Family.css'

const Family = ({ familyTree }) => {
    const [isVisible, setIsVisible] = useState(false)
    const expand = () => {
        setIsVisible(!isVisible);
    }
    return (
        <li style={{listStyle:'none'}}>
            <button className='button' onClick={expand}>{familyTree.name} {isVisible ? '-' : '+'}</button>
            
            {isVisible ? (
                familyTree?.children?.map((child) => {
                    return(
                        <ul key={child.name}>
                            <Family familyTree={child} />
                        </ul>
                    )
                })
            ) : (<></>)}
            
        </li>
    )
}

export default Family;