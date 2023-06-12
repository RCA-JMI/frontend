import Container from '../../components/container/container.component'
import booksImg from '../../assets/home/books-facility.webp'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

const ResultGreen = () => {
  return (
    <div>
      {/*reusable columns */}
      <section className='bg-[color:var(--primary-text-color)] w-full'>
        <Container className='flex flex-col items-center justify-center py-10'>
          <h1 className='mb-2 text-3xl font-[500] text-white text-center '>
            UPSC Civil Services Topper 2022
          </h1>
          <p className='mt-2 text-center text-white'>
            346 Selections Out of 685 Vacancies (6 in Top 10)
          </p>
          <div className='grid grid-cols-1 gap-8 mt-8 place-content-center sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col items-center justify-center'>
              <img
                src={booksImg}
                className='object-cover h-75 border-2 border-white aspect-square '
                alt=''
              />
              <p className='mt-2 text-center text-white'>Vickey Gupta</p>
              <p className='mt-1 text-center text-white'>All India Rank 1</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img
                src={booksImg}
                className='object-cover h-75 border-2 border-white aspect-square'
                alt=''
              />
              <p className='mt-2 text-center text-white'>Faizan Choudary</p>
              <p className='mt-1 text-center text-white'>All India Rank 2</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img
                src={booksImg}
                className='object-cover h-75 border-2 border-white aspect-square'
                alt=''
              />
              <p className='mt-2 text-center text-white'>Sania</p>
              <p className='mt-1 text-center text-white'>All India Rank 3</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img
                src={booksImg}
                className='object-cover h-75 border-2 border-white aspect-square'
                alt=''
              />
              <p className='mt-2 text-center text-white'>Insharah</p>
              <p className='mt-1 text-center text-white'>All India Rank 4</p>
            </div>
          </div>
          <Link
            to='/results'
            className='flex flex-col items-center justify-center px-6 py-2 mt-4 bg-white text-[color:var(--primary-text-color)] border-2 border-white hover:bg-[color:var(--primary-text-color)] hover:text-white duration-300'
          >
            View other (IAS,IPS,IFS) Toppers
          </Link>
        </Container>
      </section>
    </div>
  )
}

export default ResultGreen
