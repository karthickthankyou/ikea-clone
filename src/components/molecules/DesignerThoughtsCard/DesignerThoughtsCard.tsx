import { circularProgressClasses } from '@mui/material'
import Image from 'src/components/atoms/Image'

export interface IDesignerThoughtsCardProps {
  designerName: string
  thoughts: string
  src: string
}

const DesignerThoughtsCard = ({
  designerName,
  thoughts,
  src,
}: IDesignerThoughtsCardProps) => (
  <div>
    <p className='mb-6 text-2xl text-gray-700'>Designer thougths</p>
    <img
      src={src}
      // height={100}
      // width={100}
      // layout='intrinsic'
      className='float-left w-56 h-56 mb-12 mr-12 border rounded-full shadow-lg border-white/10'
      style={{ shapeOutside: 'circle(50%)' }}
    />

    <div className='font-serif'>
      <p className='max-w-xl font-light leading-relaxed'>
        <span className='absolute opacity-20 text-9xl -z-10 text-primary'>
          &ldquo;
        </span>
        <span className='text-xl text-gray-600'>{thoughts}</span>
        <span className='absolute text-5xl leading-3 opacity-20 text-primary'>
          &bdquo;
        </span>
      </p>
      <p className='clear-both mt-6 text-xl font-semibold'>
        {designerName}
        <span className='text-primary'>&mdash;</span>
      </p>
    </div>
  </div>
)

export default DesignerThoughtsCard
