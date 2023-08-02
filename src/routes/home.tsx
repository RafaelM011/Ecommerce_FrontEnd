import { NavBar } from '../components/navbar/nav_bar.component'
import { Outlet } from 'react-router-dom'

export const Home: React.FC = (): JSX.Element => {
  return (
    <div className='px-16'>
        <NavBar/>
        <Outlet/>
    </div>
  )
}
