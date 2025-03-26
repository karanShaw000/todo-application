import { RouterProvider } from 'react-router'
import { routes } from './routes'
import { Provider } from "react-redux"
import { store } from './state/store'

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App
