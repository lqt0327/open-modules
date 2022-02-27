import React from 'react';
import './index.sass';
import cx from 'classnames';
import PropTypes from 'prop-types'

function Banner(props) {
    
    const { 
        content,
    } = props

    const {
        link_address,
        img_address
    } = content

    return (
        <div className={cx("banner",props.className)}>
            <a>
                <img src={img_address} alt=""/>
            </a>
        </div>
    )
}

Banner.propTypes = {
    content: PropTypes.shape({
        img_address: PropTypes.string.isRequired,
        link_address: PropTypes.string
    })
    
}

export default Banner
