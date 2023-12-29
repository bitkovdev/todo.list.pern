import "./index.scss";
import { withProviders } from "app/providers";
import AppRouter from "app/router";

const App = withProviders(() => {
  return <AppRouter />;
});

export default App;
