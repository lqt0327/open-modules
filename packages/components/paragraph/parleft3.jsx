import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/tomorrow-night-bright.css';


const ParLeft3 = (props) => {
  const { title, content } = props
  const renderer = new marked.Renderer()

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    smartLists: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
  return (
    <div className="comp_detail_par_left_3">
      <h1 className="fd-title-dot comp_detail_par_left_3-header">
        <span className="fd-title-dot-marker">
          <i className="comp_detail_par_left_3-header-marker" style={{ backgroundColor: "rgb(98, 96, 225)" }}></i>
        </span>
        <span className="fd-title-dot-txt">{title}</span>
      </h1>
      <div className="comp_detail_par_left_3-content" dangerouslySetInnerHTML={{ __html: marked(content) }}>
      </div>
    </div>
  )
}

export default ParLeft3