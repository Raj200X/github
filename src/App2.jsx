//import {createBrowserRouter, RouterProvider} from "react-router-dom";
//import Practice from "./components/Practice.jsx";
//import Input from "./components/Input.jsx";
//import Nav from "./navbar.jsx";
//import Param from "./components/param.jsx";
//import Store from "./GLobal/store.js"
//import {Provider} from "react-redux"
//import Form from "./Form/Form.jsx"
//import Fetch from "./Form/fetch.jsx"
//const route = createBrowserRouter([
//    {
//        path: "/",
//        element:
//            <div>
//                <Nav />
//                <Practice />
//                <Fetch/>
//            </div>
//    },
//    {
//        path: "/first",
//        element: <div>
//            <Nav />
//            <Input />
//        </div>
//
//    },
//    {
//        path: "/param/:id",
//        element: <div>
//            <Nav />
//            <Param />
//        </div>
//    },
//    {
//        path: "/form",
//        element: <div>
//            <Form />
//        </div>
//    }
//])
//
//
//function App(){
//    return(
//        <>
//            <h1>Hello</h1>
//            <Provider store={Store}>
//                <RouterProvider router={route} />
//            </Provider>
//
//        </>
//    )
//}
//export default App