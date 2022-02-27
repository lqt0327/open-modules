const Detail3 = (props) => {
  const { title, tag } = props
  return (
    <section className="comp_detail_3">
      <h1 className="fd-title comp_detail_3-title">
        {title}
      </h1>
      <div className="comp_detail_3-desc">
        <span className="fd-tag-list comp_detail_3-desc-tags">
          {
            tag.map((item, i) => {
              return (
                <label htmlFor="" key={i}>
                  <p className="fd-desc" style={{ color: "rgb(252, 101, 101)" }}>{item}</p>
                </label>
              )
            })
          }
        </span>
      </div>
    </section>
  )
}

export default Detail3