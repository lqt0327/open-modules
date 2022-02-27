const Step3 = (props) => {
  const { param } = props
  return (
    <div className="comp_step_3">
      {
        param.map((item, i) => {
          return (
            <section className="comp_step_3-row" key={i}>
              <div className="comp_step_3-row-step">
                {item.step}
              </div>
              <div className="comp_step_3-row-content">
                <div className="comp_step_3-row-content-main">
                  <h1>{item.title}</h1>
                  <p>{item.desc}</p>
                </div>
                <img src={item.img_address} alt="" className="comp_step_3-row-content-icon" />
              </div>
            </section>
          )
        })
      }
    </div>
  )
}

export default Step3