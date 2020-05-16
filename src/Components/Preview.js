import React from 'react';
import marked from 'marked';


const Preview = (props) => {

  const rawMarkup = () => {
    let rawMarkup = marked(props.text);
    return { __html: rawMarkup };
  }

  return (
    <div className = "uk-container uk-container-small uk-margin">
      <div id="preview" className="uk-card uk-card-secondary">
        <span dangerouslySetInnerHTML={rawMarkup()} />
      </div>
    </div>
  )
}


export default Preview
