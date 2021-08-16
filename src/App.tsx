import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout/MainLayout";
import CategoryDetail from "./pages/Category/CategoryDetail/CategoryDetail";
import CategoryEdit from "./pages/Category/CategoryEdit/CategoryEdit";
import CategoryNew from "./pages/Category/CategoryNew/CategoryNew";
import CategoryPage from "./pages/Category/CategoryPage";
import DashBoradPage from "./pages/DashBorad/DashBoradPage";

const AppRoutes = () => {
   const element = useRoutes([
      {
         path: "",
         element: <MainLayout />,
         children: [{ path: "/", element: <DashBoradPage /> }],
      },
      {
         path: "book-manage",
         element: <MainLayout />,
         children: [
            { path: "/book", element: <DashBoradPage /> },
            { path: "/category", element: <CategoryPage /> },
            { path: "/category/new", element: <CategoryNew /> },
            { path: "/category/:id", element: <CategoryDetail /> },
            { path: "/category/:id/edit", element: <CategoryEdit /> },
         ],
      },
   ]);
   return element;
};

const App: React.FC = () => {
   return (
      <div className="App">
         <Router>
            <AppRoutes />
         </Router>
      </div>
   );
};

export default App;
