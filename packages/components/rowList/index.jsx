import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'

function RowList(props) {

  const {
    content,
  } = props

  return (
    <div className="use-tag">
      <div className="fd-grid comp_list_v_1">
        {
          content.map((item, i) => {
            return (
              <div className="fd-grid-row" key={i}>
                <div className="fd-grid-col">
                  <div className="fd-link fd-jumbo size-mdx comp_list_v_1-jumbo">
                    <div
                      className="fd-link fd-cover fd-jumbo-cover"
                      style={{ backgroundImage: 'url(' + item.img_address + ')' }}
                    >
                    </div>
                    <div className="fd-jumbo-mask"></div>
                    <div className="fd-jumbo-content">{item.title}</div>
                    <div className="fd-jumbo-tag">
                      <label htmlFor="">{item.tag}</label>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

RowList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    link_address: PropTypes.string,
    img_address: PropTypes.string,
    title: PropTypes.string,
    tag: PropTypes.string
  }))
}

export default React.memo(RowList)