import { useCallback, useState } from "react";
import "./App.css";
import { EditorState } from "draft-js";
import MyEditor from "./components/MyEditor";
import { actionObj, BOLDTEXT, getAction, ITALICTEXT, THROWTEXT } from "./components/Actions";

function App() {
  const [state, setState] = useState(EditorState.createEmpty());

  const actionsArr : actionObj[] = [
    { actionName: "B", method: getAction(BOLDTEXT, state, setState) },
    { actionName: "I", method: getAction(ITALICTEXT, state, setState) },
    { actionName: "Throw", method: getAction(THROWTEXT, state, setState) },
  ];
  //to add a new action go to /Actions.tsx and add one, then call it here
  const someActions = () => (
    <div style={{ marginBottom: "1rem" }}>
      {actionsArr.map((ele) => (
        <button
          key={ele.actionName}
          onMouseDown={(e) => (e.preventDefault(), ele.method?.())}
        >
          {ele.actionName}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <div>
        <h3>Un-Controlled Default Editor</h3>
        <MyEditor />
      </div>
      <div>
        <h3>Controlled Editor</h3>
        <MyEditor
          value={state}
          onChange={setState}
          renderToolbar={someActions}
          className="EditorParent"
          style={{borderRadius:"10%"}}
        />
      </div>
    </>
  );
}

export default App;
