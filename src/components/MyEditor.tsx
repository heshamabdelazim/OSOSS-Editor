import React, { useState, useCallback, useEffect } from 'react';
import {
  Editor,
  EditorState,
} from 'draft-js';
import 'draft-js/dist/Draft.css';
import { actionObj, actions} from './Actions';
import { MyEditorProps } from './types';

const MyEditor: React.FC<MyEditorProps> = React.memo(({
  value,
  onChange,
  className,
  style,
  renderToolbar,
}) => {
  
  const [internalState, setInternalState] = useState(() =>EditorState.createEmpty());
  const isControlled :boolean = value !== undefined; 
  const editorState:EditorState = isControlled ? value : internalState;
  const updateState = isControlled ? onChange : setInternalState;
  const actionsArr: actionObj[] | false = !renderToolbar && [
    { actionName: "bold", method: actions(internalState, updateState).toggleBold },
    { actionName: "Italic", method: actions(internalState,updateState).toggleItalic },
    { actionName: "Underline", method: actions(internalState,updateState).toggleUnderline }];
  
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
      {/* Default Toolbar */}
      {renderToolbar ? (
        renderToolbar()
      ) : (
        <div style={{ marginBottom: '1rem' }}>
              {actionsArr?.map(ele => (
                <button key={ele.actionName} onMouseDown={e => (e.preventDefault(), ele.method?.())}>
                  {ele.actionName}
                </button>
              ))}
          </div>
      )}
        <Editor editorState={editorState} onChange={updateState} />
        </div>
    )
});

export default MyEditor;