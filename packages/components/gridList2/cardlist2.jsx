const Card2 = (props) => {
  const { tag, img_address, title, subtitle, link_address } = props
  return (
    <a href={link_address} className="fd-link fd-card comp_list_card_2">
      <div className="fd-card-inner">
        <div className="fd-card-inner-head">
          <div className="fd-link fd-jumbo size-lg">
            <div className="fd-link fd-cover fd-jumbo-cover" style={{ backgroundImage: "url(" + img_address + ")" }}></div>
            <div className="fd-jumbo-mask"></div>
            <div className="fd-jumbo-content">
            </div>
            <div className="fd-jumbo-tag">
              <label htmlFor="">{tag}</label>
            </div>
          </div>
        </div>
        <div className="fd-card-inner-body">
          <h1 className="fd-title">{title}</h1>
        </div>
        <div className="fd-card-inner-tail">
          <p className="fd-desc">{subtitle}</p>
        </div>
      </div>
    </a>
  )
}

export default Card2