import React from 'react';
import marked from 'marked';


const Preview = (props) => {

  const rawMarkup = () => {
    let rawMarkup = marked(props.text);
    return { __html: rawMarkup };
  }

  return (
    <div id="preview" className="uk-container uk-container-medium">
      <span dangerouslySetInnerHTML={rawMarkup()} />
    </div>
  )
}


export default Preview
