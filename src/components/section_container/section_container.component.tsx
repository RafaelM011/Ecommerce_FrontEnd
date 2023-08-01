import { Section } from '../section/section.component.js'
import { sections } from './section_containerconst.js'

export const SectionContainer: React.FC = (): JSX.Element => {
  return (
    <div>
      {
        sections.map(section => {
          return <Section key={section.id} sectionName={section.title} sectionImage={section.imageUrl}/>
        })
      }
    </div>
  )
}
