const Block1 = (props) => {
  return (
    <h1 className="fd-title-block comp_title_block_8">
      <span className="fd-title-block-marker">
        <i className="comp_title_block_8-marker" style={{ backgroundColor: "rgb(255, 158, 26)" }}></i>
      </span>
      <span className="fd-title-block-txt">{props.title}</span>
      <span className="fd-title-block-marker">
        <i className="comp_title_block_8-marker" style={{ backgroundColor: "rgb(255, 158, 26)" }}></i>
      </span>
    </h1>
  )
}

export default Block1