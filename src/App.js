
import { useEffect } from "react";
import { AppRouter } from "./components/Router/AppRouter";
import './css/styles.scss'
import { enableAnchorSmoothScroll } from "./lib/helpers";

function App() {
  useEffect(() => {
    enableAnchorSmoothScroll()
  }, [])

  return (
    <div >
      <AppRouter />
    </div>
  );
}

export default App;
