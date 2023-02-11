import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import './globals.css'
import {QueryClient,QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(

<QueryClientProvider client={queryClient} >
    <Home />
<ReactQueryDevtools position='bottom-right' initialIsOpen  = "false" ></ReactQueryDevtools>

</QueryClientProvider>
)
