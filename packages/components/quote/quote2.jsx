const Quote2 = (props) => {
  return (
    <div className="comp_quote_4">
      <div className="fd-foreword has-left">
        <div className="fd-foreword-left">
          <svg viewBox="0 0 20 21" version="1.1" xmlns="http://www.w3.org/2000/svg" className="comp_quote_4-left"><g id="通用组件（113）" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="详情（32）" transform="translate(-503.000000, -105.000000)"><g id="Group-10" transform="translate(487.000000, 94.000000)"><g id="Group-7" transform="translate(16.000000, 11.114583)"><ellipse id="Oval" fill="#333333" cx="10" cy="10.1041667" rx="10" ry="10.1041667"></ellipse><text id="“" fontFamily="PingFangSC-Medium, PingFang SC" fontSize="20" fontWeight="400" fill="#FFFFFF"><tspan x="4" y="23.1666667">“</tspan></text></g></g></g></g></svg>
        </div>
        <div className="fd-foreword-body">
          <div className="comp_quote_4-text">{props.text}</div>
        </div>
      </div>
    </div>
  )
}

export default Quote2