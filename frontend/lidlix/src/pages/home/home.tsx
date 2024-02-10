import MainNavbar from '../../components/navbar/navbar'
import CardItem from '../../components/content/card-item'

const Home = () => {
  const cardItems = Array.from({ length: 12 }, (_, index) => (
    <CardItem key={index}/>
  ));
  return (
    <>
      <div>
        <MainNavbar/>
      </div>
      {/* main konten */}
      <div className='flex justify-center mt-12'>
        <div className='w-3/5' data-theme='winter'>
          <div className='p-8'>
            <div className='grid grid-cols-4 gap-4'>
              {cardItems}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home