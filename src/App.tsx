import React from 'react'
import './App.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ChakraProvider} from '@chakra-ui/react'
import {ReactQueryDevtools} from 'react-query/devtools'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const queryClient = new QueryClient()

function App() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
      <div className="App">
        <Header/>
        <Main/>
      </div>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    
  )
}

export default App
