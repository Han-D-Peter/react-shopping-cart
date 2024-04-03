/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ConfigImport } from './routes/config'

// Create Virtual Routes

const ShopsIndexLazyImport = createFileRoute('/shops/')()
const OrdersIndexLazyImport = createFileRoute('/orders/')()
const MyordersIndexLazyImport = createFileRoute('/myorders/')()
const CartsIndexLazyImport = createFileRoute('/carts/')()
const ShopsIdLazyImport = createFileRoute('/shops/$id')()
const MyordersOrderIdLazyImport = createFileRoute('/myorders/$orderId')()

// Create/Update Routes

const ConfigRoute = ConfigImport.update({
  path: '/config',
  getParentRoute: () => rootRoute,
} as any)

const ShopsIndexLazyRoute = ShopsIndexLazyImport.update({
  path: '/shops/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/shops/index.lazy').then((d) => d.Route))

const OrdersIndexLazyRoute = OrdersIndexLazyImport.update({
  path: '/orders/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/orders/index.lazy').then((d) => d.Route))

const MyordersIndexLazyRoute = MyordersIndexLazyImport.update({
  path: '/myorders/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/myorders/index.lazy').then((d) => d.Route),
)

const CartsIndexLazyRoute = CartsIndexLazyImport.update({
  path: '/carts/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/carts/index.lazy').then((d) => d.Route))

const ShopsIdLazyRoute = ShopsIdLazyImport.update({
  path: '/shops/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/shops/$id.lazy').then((d) => d.Route))

const MyordersOrderIdLazyRoute = MyordersOrderIdLazyImport.update({
  path: '/myorders/$orderId',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/myorders/$orderId.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/config': {
      preLoaderRoute: typeof ConfigImport
      parentRoute: typeof rootRoute
    }
    '/myorders/$orderId': {
      preLoaderRoute: typeof MyordersOrderIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/shops/$id': {
      preLoaderRoute: typeof ShopsIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/carts/': {
      preLoaderRoute: typeof CartsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/myorders/': {
      preLoaderRoute: typeof MyordersIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/orders/': {
      preLoaderRoute: typeof OrdersIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/shops/': {
      preLoaderRoute: typeof ShopsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  ConfigRoute,
  MyordersOrderIdLazyRoute,
  ShopsIdLazyRoute,
  CartsIndexLazyRoute,
  MyordersIndexLazyRoute,
  OrdersIndexLazyRoute,
  ShopsIndexLazyRoute,
])

/* prettier-ignore-end */
