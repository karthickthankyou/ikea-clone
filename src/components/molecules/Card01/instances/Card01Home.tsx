import Badge, { IBadgeProps } from 'src/components/atoms/Badge/Badge'
import PriceMarker from '../../PriceMarker/PriceMarker'
import Card01 from '../Card01'

export type ICard01Home = {
  src: string
  badgeText: string
  badgeColor: IBadgeProps['variant']
  category: string
  displayName: string
  price: number
  detailsTitle: string
  detailsBgColor: string
  detailsTextColor: string
}

const Card01Home = ({
  src,
  badgeText,
  badgeColor,
  category,
  displayName,
  price,
  detailsTitle,
  detailsBgColor,
  detailsTextColor,
}: ICard01Home) => (
  <Card01 href='/products'>
    <Card01.ImageBlock src={src}>
      <Card01.ImageBlockChild className='p-8 bg-white/20'>
        <PriceMarker
          badge={
            <Badge size='sm' variant={badgeColor}>
              {badgeText}
            </Badge>
          }
          displayName={displayName}
          category={category}
          price={price}
          className='flex items-start'
        />
      </Card01.ImageBlockChild>
    </Card01.ImageBlock>
    <Card01.DetailsBlock bg={detailsBgColor} text={detailsTextColor}>
      <Card01.Title>{detailsTitle}</Card01.Title>
      <Card01.ArrowButton />
    </Card01.DetailsBlock>
  </Card01>
)

export default Card01Home
