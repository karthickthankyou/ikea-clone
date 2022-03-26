import Button from 'src/components/atoms/Button/Button'
import Container from 'src/components/atoms/Container'

export interface IFooterProps {}

const JoinFamily = () => (
  <div>
    <div className='font-bold'>Join IKEA Family</div>
    <div className='max-w-md mt-1 text-sm'>
      Get exclusive offers, inspiration, and lots more to help bring your ideas
      to life. All for free.
    </div>
    <Button color='black' size='lg' className='mt-4'>
      Join us
    </Button>
  </div>
)

const FooterMenu = ({ title, items }: { title: string; items: string[] }) => (
  <div className='max-w-sm space-y-2'>
    <div className='mb-4 font-semibold'>{title}</div>
    {items.map((item) => (
      <div key={item} className='text-sm'>
        {item}
      </div>
    ))}
  </div>
)

const menuItems = {
  IKEAFamily: [
    'Log in',
    'Join IKEA Family',
    'Member offers',
    'Workshops & Events',
  ],

  Services: [
    'Design your room',
    'Delivery Service',
    'Installation Service',
    'Assembly Service',
    'Kitchen Planning',
    'Measuring Service',
    'Customer Service',
    'Recycle Program',
    'Track Your Order',
  ],

  Help: [
    'How to shop',
    'Return policy',
    'Prices and price tags',
    'Contact us',
    `FAQ's`,
    'Planners',
    'Size guide - Beds & mattresses',
    'Buying guides',
    'Gift Card',
    'Feedback',
  ],

  AboutIKEA: [
    'This is IKEA',
    'Working at IKEA',
    'Newsroom',
    'Sustainability',
    'IKEA Stores',
    'IKEA Restaurant',
    'IKEA for Business',
  ],
}

const FooterFooter = () => (
  <div className='justify-between py-8 my-8 text-xs border-t sm:flex'>
    <div>© Karthick Ragavendran 2022</div>
    <div className='flex flex-wrap gap-2 mt-2 sm:mt-0'>
      <div>Privacy policy</div>
      <div>Cookie policy</div>
      <div>Cookie settings</div>
      <div>Terms and Conditions</div>
    </div>
  </div>
)

const Footer = () => (
  <div className='py-12 bg-gray-100'>
    <Container>
      <div className='gap-4 sm:flex'>
        <JoinFamily />
        <div className='grid grid-cols-1 gap-4 mt-6 xs:grid-cols-2 lg:grid-cols-4 sm:mt-0'>
          <FooterMenu title='About IKEA' items={menuItems.AboutIKEA} />
          <FooterMenu title='Help' items={menuItems.Help} />
          <FooterMenu title='IKEAFamily' items={menuItems.IKEAFamily} />
          <FooterMenu title='Services' items={menuItems.Services} />
        </div>
      </div>
      <FooterFooter />
    </Container>
  </div>
)

export default Footer