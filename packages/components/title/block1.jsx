const Block1 = (props) => {

  const { style } = props
  const { color, iconColor } = style

  return (
    <h1 className="fd-title-block comp_title_block_8">
      <span className="fd-title-block-marker">
        <i className="comp_title_block_8-marker" style={{ backgroundColor: iconColor }}></i>
      </span>
      <span className="fd-title-block-txt" style={{ color: color }}>{props.title}</span>
      <span className="fd-title-block-marker">
        <i className="comp_title_block_8-marker" style={{ backgroundColor: iconColor }}></i>
      </span>
    </h1>
  )
}

export default Block1