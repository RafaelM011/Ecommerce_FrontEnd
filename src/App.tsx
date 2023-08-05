import { Outlet } from 'react-router-dom'
import { NavBar } from './components/navbar/nav_bar.component'

const App: React.FC = (): JSX.Element => {
  return (
    <div className='px-16'>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default App
