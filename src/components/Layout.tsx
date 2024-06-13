import { Children, ReactNode } from "react"
interface LayoutProps {
    children: ReactNode; //children은 리액트가 렌더링할수있는 모든타입이 될수있음을 정의함
}

export const Layout = ({children}: LayoutProps) => {
    return <div className="layout">{children}</div>
}