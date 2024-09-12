import { Suspense } from 'react'
import routes from "./routes";
import { Route, Routes, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom'

/* 
    统一渲染的组件
        在这里可以做一些处理【权限/登录态校验,传递属性....】
*/
const Element = (props) => {
    let { component: Component } = props
    // 把路由信息先获取到，最后基于属性传递给组件
    const navigate = useNavigate(),
        location = useLocation(),
        params = useParams(),
        [usp] = useSearchParams()
    // 只要是基于<Route>匹配渲染的组件，都可以基于属性获取路由信息
    return <Component navigate={navigate} location={location} params={params} usp={usp}/>
}

/* 递归创建Route */
const createRoute = (routes) => {
    return (
        <>
            {
                routes.map((item, index) => {
                    let { path, children } = item
                    return <Route key={index} path={path} element={<Element {...item}/>}>
                        { Array.isArray(children)? createRoute(children) : null }
                    </Route>
                })
            }
        </>
    )
}

/* 路由容器 */
export default function RouterView() {
    return <Suspense fallback={<>正在加载中...</>}>
        <Routes>
            {createRoute(routes)}
        </Routes>
    </Suspense> 
}

/* 创建withRouter */
export const withRouter = (Component) => {
    // Component: 真实要渲染的组件
    return function HOC(props) {
        // 提前获取路由信息，作为属性传递给Component
        const navigate = useNavigate(),
            location = useLocation(),
            params = useParams(),
            [usp] = useSearchParams()
        return <Component {...props} navigate={navigate} location={location} params={params} usp={usp}/>
    }
}