import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from 'components/App'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { NotesProvider } from 'contexts/NoteContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <NotesProvider>
      <App />
    </NotesProvider>
  </ThemeProvider>
)
