import React from 'react';
import PropTypes from 'prop-types'
import './style.sass'
import Btn3 from './btn3'
import Btn2 from './btn2'
import Btn1 from './btn1'

function ComButton(props) {
    const { 
        template,
        content
    } = props

    const {
        text,
        // link_address
    } = content

    return (
        <div className="use-tag">
            {
                template === 'btn3' ? 
                <Btn3
                    text={text}
                /> :
                template === 'btn2' ?
                <Btn2
                    text={text}
                /> :  
                template === 'btn1' ?
                <Btn1 
                    text={text}
                /> : ""
            }
        </div>
    )
}

ComButton.propTypes = {
    content: PropTypes.shape({
        text: PropTypes.string,
        link_address: PropTypes.string
    })
}

export default React.memo(ComButton)