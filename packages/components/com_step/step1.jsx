const Step1 = (props) => {
  const { param } = props
  return (
    <div className="comp_step_1">
      {
        param.map((item, i) => {
          return (
            <section className="comp_step_1-row" key={i}>
              <div className="comp_step_1-row-step">
                {item.step}
              </div>
              <div className="comp_step_1-row-content">
                <img src={item.img_address} alt="" className="comp_step_1-row-content-icon" />
                <div className="comp_step_1-row-content-main">
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
              </div>
            </section>
          )
        })
      }
    </div>
  )
}

export default Step1