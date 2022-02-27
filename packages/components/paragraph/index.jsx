import React from 'react'
import PropTypes from 'prop-types'
import ParLeft3 from './parleft3'
import Detail3 from './detail3'
import './style.sass'

function Paragraph(props) {

  const {
    template,
    content,
  } = props

  return (
    <div className="use-tag">
      {
        template === 'parleft3' ?
          <ParLeft3
            title={content.title}
            content={content.text}
          /> :
          template === 'detail3' ?
            <Detail3
              title={content.title}
              tag={content.tag}
            /> : ''
      }
    </div>
  )
}

Paragraph.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.array,
    text: PropTypes.string
  })
}

export default React.memo(Paragraph)