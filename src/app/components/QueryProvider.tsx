'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { FC, ReactNode } from "react"

type IQueryProviderProps ={
    children:ReactNode
}

const QueryProvider:FC<IQueryProviderProps> = ({children}) => {

    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
           <ReactQueryDevtools initialIsOpen={false} />
           {children}
        </QueryClientProvider>
    )
}

export default QueryProvider