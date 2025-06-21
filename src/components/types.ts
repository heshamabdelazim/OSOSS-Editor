import EditorState from "draft-js";

export type MyEditorProps = {
  config?: { state: EditorState; actionsArr: actionObj[]; onChange };
  className?: string;
  style?: React.CSSProperties;
};

// TYPE
export interface ToolbarActions {
  toggleBold: () => void;
  toggleItalic: () => void;
  toggleUnderline: () => void;
  toggleThrough?: () => void;
}

export interface actionObj {
  actionName: String;
  method: () => void;
}
