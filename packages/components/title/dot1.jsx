const Dot1 = (props) => {

  const { style } = props
  const { color, iconColor } = style

  return (
    <div className="comp_title_dot_3">
      <h1 className="fd-title-dot">
        <span className="fd-title-dot-marker">
          <span className="comp_title_dot_3-marker" style={{ backgroundColor: iconColor }}></span>
        </span>
        <span className="fd-title-dot-txt" style={{ color: color }}>{props.title}</span>
      </h1>
    </div>
  )
}

export default Dot1