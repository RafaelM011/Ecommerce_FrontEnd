import { Section } from '../section/section.component.js'
import { sections } from './section_container.const.js'

export const SectionContainer: React.FC = (): JSX.Element => {
  return (
    <div>
      {
        sections.map(section => {
          return <Section key={section.id} sectionName={section.name}/>
        })
      }
    </div>
  )
}
