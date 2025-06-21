import { RichUtils,EditorState } from "draft-js";
import { ToolbarActions } from "./types";
export const BOLDTEXT = "BOLD",
  ITALICTEXT = "ITALIC",
  UNDERLINETEXT = "UNDERLINE",
  THROWTEXT = "STRIKETHROUGH" //If future customization - keywords of draft.js
/*
 2 steps to add an action
  -Add an action inside actions()
  #finally, Use actions(x,y).toggle 
*/

export const toggleStyle = (style: string, editorState, onChange) => {
  const newState = RichUtils.toggleInlineStyle(editorState, style);
  onChange?.(newState);
};
export const actions = (editorState: EditorState, onChange): ToolbarActions => {
    return {
        toggleBold: () => toggleStyle(BOLDTEXT,editorState,onChange),
        toggleItalic: () => toggleStyle(ITALICTEXT,editorState,onChange),
      toggleUnderline: () => toggleStyle(UNDERLINETEXT, editorState, onChange),
        toggleThrough: ()=> toggleStyle(THROWTEXT, editorState,onChange),
        // add more actions
    }
}

