
import { AppProps } from 'next/app'
import React from 'react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@/services/queryClient'
import { GlobalStyle } from '@/styles/global'


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />     
      <GlobalStyle />    
    </QueryClientProvider>
  )
}

export default App
