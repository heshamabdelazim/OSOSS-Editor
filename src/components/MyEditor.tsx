import React, { useState, useRef } from 'react';
import {
  Editor,
  EditorState,
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { actions} from './Actions';
import { actionObj, MyEditorProps } from './types';

const MyEditor: React.FC<MyEditorProps> = React.memo(({
  config,
  className,
  style,
}) => {
  // config exists? it's controlled
  const [internalState, setInternalState] = useState(() =>EditorState.createEmpty());
  const editorState:EditorState = config ? config.state : internalState;
  const updateState:void = config ? config.onChange : setInternalState;
  const defaultActions = useRef([
    { actionName: "bold", method: actions(editorState, updateState).toggleBold},
    { actionName: "Italic", method: actions(editorState, updateState).toggleItalic},
    { actionName: "Underline", method: actions(editorState, updateState).toggleUnderline}
  ]);
  const actionsArr: actionObj[] = config ? config.actionsArr :defaultActions.current;
  
  return (
      <div
      data-testid="wysiwyg-editor"
      className={className}
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        minHeight: '200px',
        ...style,
      }}
    >
        <div style={{ marginBottom: '1rem' }}>
              {actionsArr.map(ele => (
                <button key={ele.actionName} onMouseDown={e => (e.preventDefault(), ele.method())}>
                  {ele.actionName}
                </button>
              ))}
          </div>
        <Editor editorState={editorState} onChange={updateState} />
        </div>
    )
});

export default MyEditor;