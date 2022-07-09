import { AppProvider } from "./AppProviders";
import { AppConsumer } from "./AppConsumer";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <AppConsumer />
    </AppProvider>
  );
}

export default App;
