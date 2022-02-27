import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'
import Normal2 from './normal2'
import Normal1 from './normal1'
import Dot3 from './dot3'
import Dot2 from './dot2'
import Dot1 from './dot1'
import Block1 from './block1'

function Title(props) {

  const {
    template,
    content,
    color
  } = props

  return (
    <div className="use-tag">
      {
        template === 'normal2' ?
          <Normal2 title={content} /> :
          template === 'normal1' ?
            <Normal1 title={content} color={color} /> :
            template === 'dot3' ?
              <Dot3 title={content} /> :
              template === 'dot2' ?
                <Dot2 title={content} /> :
                template === 'dot1' ?
                  <Dot1 title={content} /> :
                  template === 'block1' ?
                    <Block1 title={content} /> : ""
      }
    </div>
  )
}

Title.propTypes = {
  content: PropTypes.string
}

export default React.memo(Title)