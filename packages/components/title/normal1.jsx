const Normal1 = (props) => {

  const { style } = props
  const { color } = style

  return (
    <div className="comp_title_normal_1">
      <div className="fd-title" style={{color: color}}>{props.title}</div>
    </div>
  )
}

export default Normal1