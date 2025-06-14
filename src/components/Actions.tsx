import { RichUtils,EditorState } from "draft-js";
export const BOLDTEXT = "BOLD",
  ITALICTEXT = "ITALIC",
  UNDERLINETEXT = "UNDERLINE",
  THROWTEXT = "STRIKETHROUGH" //If future customization - keywords of draft.js


interface ToolbarActions  {
  toggleBold: () => void;
  toggleItalic: () => void;
  toggleUnderline: () => void;
  toggleThrough?: ()=> void
};

export interface actionObj{
  actionName: String,
  method?: ()=>void
}
/*
 2 steps to add an action
  1-add an action inside actions()
  2-add a case inside getAction()

  #finally, Use getAction(x,y,z) to put a method
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

export function getAction(actionName:String, state:EditorState, setState){
  switch (actionName) {
    case BOLDTEXT: return () => { actions(state, setState).toggleBold() };
    case ITALICTEXT: return () => { actions(state, setState).toggleItalic() };
    case UNDERLINETEXT: return () => { actions(state, setState).toggleUnderline() };
    case THROWTEXT: return () => { actions(state, setState).toggleThrough?.() };
    // add more cases based on actions setted above
  }
}

