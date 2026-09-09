import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidateSignup from "./pages/auth/CandidateSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
              <h1 className="text-4xl font-bold text-blue-600">
                FlexConnect AI
              </h1>
            </div>
          }
        />

        <Route
          path="/candidate/signup"
          element={<CandidateSignup />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;