const Btn2 = (props) => {

  const { text } = props

  return (
      <footer className="fd-fixed-footer comp_btn_stick">
          <div className="fd-fixed-footer-inner">
              <div className="comp_btn_stick-wrap">
                  <button className="fd-button comp_btn_stick-btn" style={{ background: "rgb(229,177,101)" }} type="button">{text}</button>
              </div>
          </div>
      </footer>
  )
}

export default Btn2