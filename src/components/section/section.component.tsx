// import Hats from '../../assets/hats.png'
import type CSS from 'csstype'

interface Props {
  sectionName: string
  sectionImage: string
}

export const Section: React.FC<Props> = ({ sectionName, sectionImage }): JSX.Element => {
  const style: CSS.Properties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${sectionImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: '5s'
  }

  return (
    <div className="group relative w-3/12 min-w-[500px] h-[450px] flex justify-center items-center grow overflow-hidden cursor-pointer">
      <div style={style} className='hover:scale-[110%]'></div>
      <div className="group-hover:opacity-[0.99] opacity-80 w-[200px] h-[200px] bg-white border-black border-4 flex flex-col justify-evenly items-center">
        <h2 className="text-2xl font-bold text-slate-500"> {sectionName} </h2>
        <p className="font-semibold text-slate-500"> SHOP NOW </p>
      </div>
    </div>
  )
}
