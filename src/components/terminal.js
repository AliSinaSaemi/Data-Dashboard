import React, { Component } from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/theme-terminal";

const languages = ["python"];

languages.forEach(lang => {
  require(`ace-builds/src-noconflict/mode-${lang}`);
  require(`ace-builds/src-noconflict/snippets/${lang}`);
});

class Terminal extends Component{
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
      method: 'GET',
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
      <form className='terminal' onSubmit={this.handleSubmit}>
        <AceEditor
          name="name"
          theme="terminal"
          width="100%"
          height="240px"
          editorProps={{
            $blockScrolling: true
          }}/>
    
      </form>
    )
  }
}

export default Terminal;
