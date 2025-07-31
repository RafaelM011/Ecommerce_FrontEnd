import { Outlet } from 'react-router-dom'
import { NavBar } from './components/navbar/nav_bar.component'

// Hi
const App: React.FC = (): JSX.Element => {
  return (
    <div className='px-10'>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default App
