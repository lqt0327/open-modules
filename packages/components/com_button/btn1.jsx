const Btn1 = (props) => {
  const { text } = props
  return (
      <div className="comp_btn_normal-wrap">
          <button className="fd-button comp_btn_normal-btn" style={{ background: "rgb(229,177,101)" }} type="button">{text}</button>
      </div>
  )
}

export default Btn1