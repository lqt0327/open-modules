const Btn3 = (props) => {

  const { text } = props

  return (
      <footer className="fd-fixed-footer comp_btn_full">
          <div className="fd-fixed-footer-inner">
              <button className="fd-button comp_btn_full-btn" style={{ background: "rgb(229,177,101)" }} type="button">{text}</button>
          </div>
      </footer>
  )
}

export default Btn3