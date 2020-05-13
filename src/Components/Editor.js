import React from 'react'

const Editor = (props) => {
  return (
    <div className="uk-container uk-container-small">
      <textarea 
        id="editor" 
        className="uk-textarea uk-text-center uk-form-width-large"
        rows="12"
        value={props.text} 
        onChange={props.onChange}
        >
      
      </textarea>
    </div>
  )
}

export default Editor
