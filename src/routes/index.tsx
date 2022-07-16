import configs from '~/configs'

import Accessories from '~/pages/Accessories'
import Account from '~/pages/Account'
import Laptop from '~/pages/Laptop'

type Route = {
    path: string
    component: () => JSX.Element
    layout?: () => JSX.Element
}

const publicRoutes: Route[] = [
    { path: '/', component: Laptop },
    { path: configs.routes.laptop, component: Laptop },
    { path: configs.routes.accessories, component: Accessories },
    { path: configs.routes.account, component: Account },
]

const privateRoutes: Route[] = []

export { publicRoutes, privateRoutes }
