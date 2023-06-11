import Container from '../../components/container/container.component'
import booksImg from '../../assets/home/books-facility.webp'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

const ResultWhite = () => {
  return (
    <div>
      {/*reusable columns */}
      <section className='bg-white w-full'>
        <Container className='flex flex-col items-center justify-center py-10'>
          <h1 className='mb-2 text-3xl font-[500] text-[color:var(--primary-text-color)] text-center '>
            UPSC Civil Services Topper 2022
          </h1>
          <p className='mt-2 text-center text-[color:var(--primary-text-color)]'>
            346 Selections Out of 685 Vacancies (6 in Top 10)
          </p>
          <div className='grid grid-cols-1 gap-8 mt-8 place-content-center sm:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col items-center justify-center'>
              <img
                src={booksImg}
                className='object-cover h-75 border-2 border-[color:var(--primary-text-color)] aspect-square '
                alt=''
              />
              <p className='mt-2 text-center text-[color:var(--primary-text-color)]'>
                Vickey Gupta
              </p>
              <p className='mt-1 text-center text-[color:var(--primary-text-color)]'>
                All India Rank 1
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img
                src={booksImg}
                className='object-cover h-75 border-2 border-[color:var(--primary-text-color)] aspect-square'
                alt=''
              />
              <p className='mt-2 text-center text-[color:var(--primary-text-color)]'>
                Faizan Choudary
              </p>
              <p className='mt-1 text-center text-[color:var(--primary-text-color)]'>
                All India Rank 2
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img
                src={booksImg}
                className='object-cover h-75 border-2 border-[color:var(--primary-text-color)] aspect-square'
                alt=''
              />
              <p className='mt-2 text-center text-[color:var(--primary-text-color)]'>
                Sania
              </p>
              <p className='mt-1 text-center text-[color:var(--primary-text-color)]'>
                All India Rank 3
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <img
                src={booksImg}
                className='object-cover h-75 border-2 border-[color:var(--primary-text-color)] aspect-square'
                alt=''
              />
              <p className='mt-2 text-center text-[color:var(--primary-text-color)]'>
                Insharah
              </p>
              <p className='mt-1 text-center text-[color:var(--primary-text-color)]'>
                All India Rank 4
              </p>
            </div>
          </div>
          <Link
            to='/results'
            className='flex flex-col items-center justify-center px-6 py-2 mt-4 bg-white text-[color:var(--primary-text-color)] border-2 border-[color:var(--primary-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-300'
          >
            View other (IAS,IPS,IFS) Toppers
          </Link>
        </Container>
      </section>
    </div>
  )
}

export default ResultWhite
