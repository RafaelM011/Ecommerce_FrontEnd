import { Section } from '../section/section.component.js'
import { sections } from './section_container.const.js'

export const SectionContainer: React.FC = (): JSX.Element => {
  return (
    <div className='flex flex-wrap gap-4 h-[900px]'>
      {
        sections.map(section => {
          return <Section key={section.id} sectionName={section.title} sectionImage={section.imageUrl}/>
        })
      }
    </div>
  )
}
