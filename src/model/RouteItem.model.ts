import { ComponentType, FC } from "react";

// RouteItem is an interface for defining the application routes and navigation menu items
interface RouteItem {
    key: String
    title: String
    tooltip?: String
    path?: String
    component?: FC<{}>
    enabled: boolean
    icon?: ComponentType
    subRoutes?: Array<RouteItem>
    appendDivider?: boolean
}

export default RouteItem;
