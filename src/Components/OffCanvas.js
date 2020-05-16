import React from 'react'

const OffCanvas = () => {
  return (
    <>
      { /* This is a button toggling the off-canvas */ }
      <button className="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-usage">Cheat Sheet</button>

      { /*This is the off-canvas */}
      <div id="offcanvas-usage" uk-offcanvas="bg-close: false; flip:true">
        <div className="uk-offcanvas-bar">

          <button className="uk-offcanvas-close" type="button" uk-close>X</button>

          <h4>Cheat sheet for markdown</h4>
          <h6>Please pay attention to spacing</h6>

          <ul>
            <li># Heading 1</li>
            <li>## Heading 2</li>
            <li>### Heading 3</li>
            <li>*Italic*</li>
            <li>**Bold**</li>
            <li>***Bold & Italic***</li>
            <li>> Blockquote</li>
          </ul>

          
        </div>
      </div>
    </>
  )
}

export default OffCanvas
