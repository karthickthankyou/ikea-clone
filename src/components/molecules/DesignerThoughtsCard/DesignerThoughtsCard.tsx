import { Children } from 'src/types'

export interface IDesignerThoughtsCardProps {
  designerName: string
  thoughts: Children
  src: string
}

const DesignerThoughtsCard = ({
  designerName,
  thoughts,
  src,
}: IDesignerThoughtsCardProps) => (
  <div>
    <p className='mb-6 text-xl font-semibold '>Designer thougths</p>

    <div className='h-full'>
      <div
        style={{ shapeOutside: 'circle(50%)' }}
        className='float-left object-cover border rounded-full shadow-lg mb-14 mr-14 w-36 h-36 border-white/10'
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=''
          src={src}
          className='object-cover rounded-full aspect-square'
        />
        <div className='mt-4 text-xs tracking-widest text-center text-black uppercase'>
          {designerName}
        </div>
      </div>
      <div className='font-serif italic'>
        <div className='max-w-lg font-light leading-relaxed '>
          <span className='absolute z-10 text-9xl text-primary/30'>
            &ldquo;
          </span>
          <span className='mt-12 text-lg text-gray-600 '>{thoughts}</span>
        </div>
      </div>
    </div>
  </div>
)

export default DesignerThoughtsCard
