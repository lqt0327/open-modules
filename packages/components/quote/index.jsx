import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Quote1 from './quote1'
import Quote2 from './quote2'

function Quote(props) {

  const {
    template,
    content
  } = props

  return (
    <div className="use-tag">
      {
        template === 'quote1' ?
          <Quote1 text={content} /> :
          template === 'quote2' ?
            <Quote2 text={content} /> : ""
      }
    </div>
  )
}

Quote.propTypes = {
  content: PropTypes.string
}

export default React.memo(Quote)