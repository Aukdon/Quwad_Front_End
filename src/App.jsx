
import { Provider } from 'react-redux'
import './App.css'
import AppRoutes from './layout/AppRoutes.jsx'
import store from './store/store.js'

function App() {

  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  )
}

export default App
