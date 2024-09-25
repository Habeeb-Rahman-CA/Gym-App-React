
const SectionWrapper = (props) => {

  const { children, header, title } = props

  return (
    <section>
      <div className="section-wrapper">
        <p>{header}</p>
        <h2>{title[0]} <span>{title[1]}</span> {title[2]}</h2>
      </div>
      <div>
        
      </div>
      {children}
    </section>
  )
}

export default SectionWrapper