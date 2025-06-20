
import { ThemeProvider } from "./hooks/ThemeProvider";
import RoutesProvider from "./routes/RoutesProvider";
function App() {
  return (
    <ThemeProvider>
      <RoutesProvider />
    </ThemeProvider>
  )
}

export default App
