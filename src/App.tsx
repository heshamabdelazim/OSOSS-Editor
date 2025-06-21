import { useCallback, useState } from "react";
import "./App.css";
import { EditorState } from "draft-js";
import MyEditor from "./components/MyEditor";
import { actionObj } from "./components/types";
import { actions } from "./components/Actions";

function App() {
  const [state, setState] = useState(EditorState.createEmpty());
  
  const actionsArr : actionObj[] = [
    { actionName: "B", method: actions(state,setState).toggleBold },
    { actionName: "I", method: actions(state,setState).toggleItalic },
    { actionName: "Throw", method: actions(state,setState).toggleThrough },
  ];
  //to add a new action go to /Actions.tsx and add one, then call it here

  return (
    <>
      <div>
        <h3>Un-Controlled Default Editor</h3>
        <MyEditor />
      </div>
      <div>
        <h3>Controlled Editor</h3>
        <MyEditor
          config={{state:state,actionsArr:actionsArr,onChange:setState}}
          className="EditorParent"
          style={{borderRadius:"10%"}}
        />
      </div>
    </>
  );
}

export default App;
