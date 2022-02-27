const Grid1 = (props) => {

  const { imgUrl, title, desc, link_address } = props

  return (
    <a href={link_address} className="fd-link fd-jumbo size-md comp_list_grid_1-jumbo">
      <div className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url(" + imgUrl + ")" }}></div>
      <div className="fd-jumbo-mask"></div>
      <div className="fd-jumbo-content">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </a>
  )
}

export default Grid1