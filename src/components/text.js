import React, { Component } from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-xcode";

const languages = ["python"];

languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

class TextEditor extends Component{
  state = { 
    mode: ''
  } 
  
  handleClick = () => {
    console.log(this.refs.aceEditor.editor.getValue());
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sent => ' + this.refs.aceEditor.editor.getValue())
    const url ='http://webhook.site/fe25ea0d-0feb-4e38-8b58-d366c8c4dd03'
    const data = { 
      codes: this.refs.aceEditor.editor.getValue()
    }
    fetch(url, { 
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
      headers:{ 
        'Content-Type': 'application/json',
        'Content-type': 'application/json' 
      } 
    })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
  }
  render(){
    return (
      <form className='editor' onSubmit={this.handleSubmit}>
        <AceEditor
          name="name"
          mode="python"
          theme="xcode"
          ref="aceEditor"
          fontSize= "15px"
          width="100%"
          height="270px"
          editorProps={{
              $blockScrolling: true
          }}/>
        <div className="sa_textEditor_options">
          <button className="sa_textEditor_redo tooltip"><i class="fas fa-redo"></i>
            <span class="tooltiptext">Tooltip text</span>
          </button>
          <button className="sa_textEditor_runCode tooltip">Run Codes<span class="tooltiptext">Tooltip text</span></button>
          <input className="sa_textEditor_submit tooltip" type='submit' value='Submit Codes' /> 
        </div>
      </form>
    )
  }
}

export default TextEditor;
