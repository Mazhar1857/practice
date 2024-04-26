import React, { useState } from 'react'
import { data } from './data'
import './project.css';
const Project = () => {
    const [isActive, setIsActive] = useState(1);


    const handleNext = () => {

        setIsActive((pre) => {
            return ((pre % 3 + 1))
        })
    }

    const handlePre = () => {

        setIsActive(() => {

        })

    }
    return (
        <div className='products-parent'>
            <button onClick={handleNext}>next</button>
            {data.map((item, index) => {
                return <div className={`product ${isActive === (index + 1) ? 'active' : 'deactive'}`}>
                    <div>{item['product-name']}</div>
                    <div>
                        <div>{item['product-description']}</div>
                    </div>
                    <div> {`product left ${item['total-left']}`}</div>
                    <div>
                        <img src={item['pic']} alt="" />
                    </div>
                </div>
            })}
        </div>
    )
}

export default Project
