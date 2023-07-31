interface Props {
  sectionName: string
}

export const Section: React.FC<Props> = ({ sectionName }): JSX.Element => {
  return (
    <div className="">
      {/* <img src={} alt=''/> */}
      <div className="">
        <h2 className="text-2xl font-bold"> {sectionName} </h2>
        <p className="font-semibold"> SHOP NOW </p>
      </div>
    </div>
  )
}
