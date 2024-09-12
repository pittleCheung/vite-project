import { HashRouter, Routes, Route, Navigate, useRoutes } from "react-router-dom";
import HomeHeader from "./components/HomeHead";
/* 导入需要的组件 */
import A from "./views/A";
import B from "./views/B";
import C from "./views/C";
import A1 from './views/a/A1'
import A2 from './views/a/A2'
import A3 from './views/a/A3'
import RouterView from "./router";

// function App() {
//   return (
//     <HashRouter>
//       <HomeHeader />
//       <div className="content">
//         {/* <Routes>
//           <Route path="/" element={<Navigate to="/a" />}></Route>
//           <Route path="/a" element={<A />}>
//             <Route path="/a" element={<Navigate to="/a/a1" />}></Route>
//             <Route path="/a/a1" element={<A1></A1>}></Route>
//             <Route path="/a/a2" element={<A2></A2>}></Route>
//             <Route path="/a/a3" element={<A3></A3>}></Route>
//           </Route>
//           <Route path="/b" element={<B />}></Route>
//           <Route path="/c" element={<C />}></Route>
//           <Route path="*" element={<Navigate to={{
//             pathname: '/a',
//             search: '?from=404'
//           }} />}></Route>
//         </Routes> */}
//         <RouterView />
//       </div>
//     </HashRouter>
//   );
// }

const App = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/a" />
    },
    {
      path: '/a',
      element: <A />,
      children: [
        {
          path: '/a',
          element: <Navigate to="/a/a1" />,
        },
        {
          path: '/a/a1',
          element: <A1 />,
        },
        {
          path: '/a/a2',
          element: <A2 />,
        },
        {
          path: '/a/a3',
          element: <A3 />,
        },
      ]
    },
    {
      path: '/b',
      element: <B />,
    },
    {
      path: '/c',
      element: <C />,
    },
  ])
  return (
    <>
      <HomeHeader />
      <div className="content">
        {element}
      </div>
    </>
  )
}

export default App;
