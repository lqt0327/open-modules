import { Carousel } from 'antd';
import PropTypes from 'prop-types'
import React from 'react'

function carousel(props) {

    const { 
        content,
    } = props

    return (
        <div className="carousel-content" >
            <Carousel autoplay>
                {
                    content.map((item,i)=>{
                        return (
                            <div key={i}>
                                <a>
                                    <img src={item["img_address"]} alt={i+1} width="375" height="140" />
                                </a>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>  
    )
}

carousel.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
        img_address: PropTypes.string.isRequired,
        link_address: PropTypes.string,
    }))
}

export default React.memo(carousel);