import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/routes'
import { UserContextProvider } from './hooks/UserContext'
import './index.css'
import './components/Topics/Topics.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  </StrictMode>
)
