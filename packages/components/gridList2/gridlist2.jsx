const Grid2 = (props) => {

  const { imgUrl, tag, title, desc, link_address } = props

  return (
    <a href={link_address} className="fd-link comp_list_grid_1-jumbo">
      <div className="fd-link fd-jumbo size-md">
        <div className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url(" + imgUrl + ")" }}></div>
        <div className="fd-jumbo-mask"></div>
        <div className="fd-jumbo-content">
        </div>
        <div className="fd-jumbo-tag">
          <label htmlFor="">{tag}</label>
        </div>
      </div>
      <h1 className="fd-title line-cut-1 comp_list_grid_3-item-title">{title}</h1>
      <p className="fd-desc line-cut-1 comp_list_grid_3-item-desc">{desc}</p>
    </a>
  )
}

export default Grid2