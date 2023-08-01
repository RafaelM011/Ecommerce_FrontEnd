// import Hats from '../../assets/hats.png'

interface Props {
  sectionName: string
  sectionImage: string
}

export const Section: React.FC<Props> = ({ sectionName, sectionImage }): JSX.Element => {
  const style = {
    backgroundImage: `url(${sectionImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className="w-3/12 min-w-[500px] h-[450px] flex justify-center items-center grow" style={style}>
      <div className="w-[200px] h-[200px] border-white border-2 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-white"> {sectionName} </h2>
        <p className="font-semibold text-white"> SHOP NOW </p>
      </div>
    </div>
  )
}
