import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import TransactionPage from "./pages/Transaction/TransactionPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./pages/Support/Support";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
