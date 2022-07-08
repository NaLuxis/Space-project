import { AppProvider } from "./AppProviders";
import { AppConsumer } from "./AppConsumer";

function App() {
  return (
    <AppProvider>
      <AppConsumer />
    </AppProvider>
  );
}

export default App;
