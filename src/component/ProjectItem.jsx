import React, { useEffect, useState } from 'react'
import './projectItem.css'

function ProjectItem({ productName, totalPledge, productDescription, totalLeft, index }) {

    const [isActive, setIsActive] = useState('')

    useEffect(() => {
        console.log(isActive)
    }, [isActive]);

    const handleCheckedProduct = (value) => {
        setIsActive(value);
    }

    return (
        <div className={`product ${index === isActive ? 'checked-radio-btn' : ''} ${index}`} >
            <input type="radio" name='product' id={productName} value={totalPledge} onClick={() => { handleCheckedProduct(index) }} />
            <label className='radio-btn' htmlFor={productName} onClick={() => { handleCheckedProduct(index) }}></label>
            <div className='product-name'>
                <label htmlFor={productName} onClick={() => { handleCheckedProduct(index) }}>{productName}</label><span>Pledge ${totalPledge} or more</span>
            </div>
            <div className='product-left'>
                <span>{totalLeft}</span><span>left</span>
            </div>
            <div className='product-description'>{productDescription}</div>
            <div className={`back-product ${index === isActive ? 'checked-radio-btn' : ''}`}>
                <div>Enter your pledge</div>
                <div className='project-pledge-btn' >
                    <div className='project-input-btn'>
                        <input type='text' defaultValue={totalPledge} />
                    </div>
                    <button>continue</button>
                </div>
            </div>
        </div>
    )
}
export default ProjectItem
