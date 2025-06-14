import EditorState from "draft-js";

export type MyEditorProps = {
  value?: EditorState;
  onChange?: (state: EditorState) => void;
  className?: string;
  style?: React.CSSProperties;
  renderToolbar?: () => React.ReactNode;
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
  method?: () => void;
}
