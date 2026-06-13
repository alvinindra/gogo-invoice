import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
// Self-hosted variable fonts (keeps the app fully offline).
import '@fontsource-variable/fraunces'
import '@fontsource-variable/hanken-grotesk'
import '@fontsource-variable/spline-sans-mono'
import App from './App'
import { AppProvider } from './store/AppStore'
import './index.css'

// Keep the offline cache fresh in the background.
registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
