import React from 'react'
import './App.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header/>
        <Main/>
      </div>
      </QueryClientProvider>
  )
}

export default App
