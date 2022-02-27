import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Step1 from './step1'
import Step3 from './step3'

function ComStep(props) {

    const {
        template,
        content
    } = props

    return (
        <div className="use-tag">
            {
                template === 'step1' ?
                    <Step1
                        param={content}
                    /> :
                    template === 'step3' ?
                        <Step3
                            param={content}
                        /> : ""
            }
        </div>
    )
}

ComStep.propTypes = {
    content: PropTypes.arrayOf(PropTypes.shape({
        step: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
        img_address: PropTypes.string
    }))
}

export default React.memo(ComStep)