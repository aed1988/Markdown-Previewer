import React from 'react'

const Editor = (props) => {
  return (
    <div className="uk-container">
      <textarea 
        id="editor" 
        className="uk-textarea uk-text-center"
        rows="12"
        value={props.text} 
        onChange={props.onChange}
      ></textarea>
    </div>
  )
}

export default Editor
