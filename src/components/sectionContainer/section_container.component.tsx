interface Props {
  section: string
}

export const sectionContainer: React.FC<Props> = ({ section }): JSX.Element => {
  return (
    <div className="">
      {/* <img src={} alt=''/> */}
      <div className="">
        <h2> {section} </h2>
        <p> SHOP NOW </p>
      </div>
    </div>
  )
}
