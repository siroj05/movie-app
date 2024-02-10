import MainNavbar from '../../components/navbar/navbar'

const Home = () => {
  return (
    <>
      <div>
        <MainNavbar/>
      </div>
      {/* main konten */}
      <div className='flex justify-center mt-12'>
        <div className='w-3/5 bg-black'>
          test
        </div>
      </div>
    </>
  )
}

export default Home