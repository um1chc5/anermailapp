import homeImage from '../../images/under-construction.png'

function HomeBody() {
  return (
    <div className='relative h-full'>
      <img src={homeImage} alt='Under Construction' className='absolute left-1/2 top-10 -translate-x-1/2' />
    </div>
  )
}

function HomeSidebar() {
  return <div className='flex h-full w-full justify-center pt-16'>Construction</div>
}

const Home = {
  Body: HomeBody,
  Sidebar: HomeSidebar
}

export default Home
