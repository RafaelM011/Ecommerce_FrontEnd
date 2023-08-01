interface Props {
  sectionName: string
  sectionImage: string
}

export const Section: React.FC<Props> = ({ sectionName, sectionImage }): JSX.Element => {
  const style = {
    backgroundImage: `url(${sectionImage})`
  }

  return (
    <div className="">
      <div style={style}></div>
      <div className="">
        <h2 className="text-2xl font-bold"> {sectionName} </h2>
        <p className="font-semibold"> SHOP NOW </p>
      </div>
    </div>
  )
}
