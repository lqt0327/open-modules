import React from 'react';
import PropTypes from 'prop-types'
import './style.sass';

function ComponentImg(props) {

    const { 
        template,
        img_address,
        desc
    } = props

    return (
        <div className="use-tag">
            <div className="comp_img_2">
                <img src={img_address} alt="" className="comp_img_2-img"/>
                {
                    template === 'img2' ? 
                    <p className="fd-desc sub comp_img_2-text">{desc}</p> :
                    ""
                }
            </div>
        </div>
    )
}

ComponentImg.propTypes = {
    img_address: PropTypes.string,
    desc: PropTypes.string
}

export default React.memo(ComponentImg)