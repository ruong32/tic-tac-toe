import React from 'react'
import './app.css'
import App from './app'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from '@/components'

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </>
)
