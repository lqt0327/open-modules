import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './style.sass'

function NormalList(props) {

  const {
    template,
    content,
  } = props

  const {
    title,
    img_address,
    tag
  } = content

  return (
    <div className="use-tag">
      <div>
        <div className={cx("fd-link fd-subject comp_list_normal_2", { "reverse": template === 'normal3' ? true : false })}>
          <div className={cx("fd-subject-cover", { "hide": template === 'normal1' ? true : false })} style={{ backgroundImage: 'url(' + img_address + ')' }}></div>
          <div className="fd-subject-content">
            <div>
              <h1 className="fd-title title">{title}</h1>
              <span className="fd-tag-list">
                {
                  tag.map((item, i) => {
                    return (
                      <label key={i}>
                        <p className="fd-desc">{item}</p>
                      </label>
                    )
                  })
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

NormalList.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.array,
    img_address: PropTypes.string
  })
}

export default React.memo(NormalList)