import {ErrorBoundary} from "react-error-boundary";
import FallBackUIOnError from "../fall_back_ui/FallBackUI.tsx";

function App() {

  return (
      <ErrorBoundary fallbackRender={FallBackUIOnError} onReset={() => location.reload()}>

      </ErrorBoundary>
  )
}

export default App
