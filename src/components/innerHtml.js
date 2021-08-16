import { memo } from "react"

const InnerHtml = ({html}) => {
  return (
    <div style={{wordWrap:"break-word"}} dangerouslySetInnerHTML={handleHtmlText(html)}/>
  )
}

function handleHtmlText(text){
  return  {__html: text}
}


export default memo(InnerHtml)

