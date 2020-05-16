import React, {useState, useEffect} from 'react'
import Editor from './Editor'
import Preview from './Preview'


const Content = () => {

  const [text, setText] = useState('');

  useEffect(() => {
    const markdownPath = require('../Markdown/Example.md');

    fetch(markdownPath)
      .then(res => res.text())
      .then(responseText => setText(responseText))
  }, [])
  

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="uk-section uk-section-muted">
      <Editor text={text} onChange={handleChange}/>
      <Preview text={text}/>
    </div>
  )
}

export default Content
