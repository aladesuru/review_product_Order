import React from 'react'
import CTAbutton from '../CTAButton'

const QtyCounter = () => {
    return(
        <form className='qty-counter'>
            <input type="text" />
            <CTAbutton backgroundColor='rgba(236, 182, 4, .6)' text='-' />
            <CTAbutton backgroundColor='rgba(27, 131, 3, 0.6)' text='+' />
        </form>
    )
}

export default QtyCounter