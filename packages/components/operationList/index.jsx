import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.sass'

function OperationList(props) {

  const {
    template,
    content,
  } = props

  const {
    title,
    tag,
    area,
    img_address,
    btn
  } = content

  return (
    <div className="use-tag">
      <div>
        <div className="fd-link fd-subject comp_list_operation_1">
          <div className={cx({ "fd-subject-cover": template === 'opt1' ? false : true })} style={{ backgroundImage: "url(" + img_address + ")" }}></div>
          <div className="fd-subject-content">
            <div>
              <h1 className="fd-title title">{title}</h1>
              <span className="fd-tag-list tag-list">
                {
                  tag.map((item, i) => {
                    return (
                      <label key={i}>
                        <p className="fd-desc" style={{ color: "rgb(252,101,101)" }}>{item}</p>
                      </label>
                    )
                  })
                }
              </span>
              <p className="fd-desc desc">{area}</p>
            </div>
          </div>
          <div className="fd-subject-action">
            <button className="fd-button">{btn}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

OperationList.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.array,
    area: PropTypes.string,
    img_address: PropTypes.string,
    btn: PropTypes.string
  })
}

export default React.memo(OperationList)