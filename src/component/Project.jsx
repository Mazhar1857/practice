import React from 'react';
import BackThisProjectItem from './ProjectItem';
import './project.css'
import {data} from './data'

function Project() {
    return (
        <div className='back-this-project'>
            <div className='project-close'>x</div>
            <h1>Back this project</h1>
            <div>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</div>
            <div>
                {data.map((product, index) => {
                    return <BackThisProjectItem
                        key={index}
                        productName={product['product-name']}
                        totalPledge={product['total-pledge']}
                        productDescription={product['product-description']}
                        totalLeft={product['total-left']}
                        index={index}
                    />
                })}

            </div>

        </div >
    )
}

export default Project
