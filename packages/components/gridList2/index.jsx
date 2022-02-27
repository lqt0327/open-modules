import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import './style.sass'
import Card2 from './cardlist2'
import Card1 from './cardlist1'
import Grid2 from './gridlist2'
import Grid1 from './gridlist1'

function GridList2(props) {

  const {
    template,
    content,
  } = props

  const {
    tag,
    img_address,
    link_address,
    title,
    subtitle
  } = content

  return (
    <div className="use-tag" style={{ position: "relative" }}>
      {
        template === 'cardlist2' ?
          <Card2
            tag={tag}
            img_address={img_address}
            title={title}
            subtitle={subtitle}
            link_address={link_address}
          /> :
          template === 'cardlist1' ?
            <Card1
              tag={tag}
              img_address={img_address}
              title={title}
              subtitle={subtitle}
              link_address={link_address}
            /> :
            <div className={cx("fd-grid", {
              "comp_list_grid_3": template === 'gridlist2' ? true : false,
              "comp_list_grid_1": template === 'gridlist1' ? true : false
            })}>
              {
                content.map((item, i) => {
                  return (
                    <div className="fd-grid-row" key={i}>
                      {
                        item.children.map((item2, j) => {
                          return (
                            <div className="fd-grid-col" key={j}>
                              {
                                template === 'gridlist2' ?
                                  <Grid2
                                    imgUrl={item2.img_address}
                                    tag={item2.tag}
                                    title={item2.title}
                                    desc={item2.subtitle}
                                    link_address={item2.link_address}
                                  /> :
                                  template === 'gridlist1' ?
                                    <Grid1
                                      imgUrl={item2.img_address}
                                      title={item2.title}
                                      desc={item2.subtitle}
                                      link_address={item2.link_address}
                                    /> : ''
                              }
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
      }
    </div>
  )
}

GridList2.propTypes = {
  // children: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
  //     title: PropTypes.string,
  //     subtitle: PropTypes.string,
  //     tag: PropTypes.string,
  //     img_address: PropTypes.string
  // }))),
  tag: PropTypes.string,
  title: PropTypes.string,
  img_address: PropTypes.string,
  subtitle: PropTypes.string
}

export default React.memo(GridList2)