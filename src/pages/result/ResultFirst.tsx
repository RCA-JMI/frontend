import Container from '../../components/container/container.component'
import booksImg from '../../assets/home/books-facility.webp'
import 'react-multi-carousel/lib/styles.css'

const ResultFirst = () => {
  return (
    <div className='mt-[56px]'>
      {/*reusable columns */}
      <section className='bg-white w-full'>
        <Container className='flex flex-col items-center justify-center py-10'>
          <h1 className='mb-2 text-3xl font-[500] text-[color:var(--primary-text-color)] text-center '>
            RECENT RESULT HIGHLIGHTS
          </h1>
          <p className='mt-2 text-center text-[color:var(--primary-text-color)]'>
            This section includes recent result updates.Watch this place for
            latest achievements by Jamia students in UPSC Result 2022.
          </p>
          <p className='mt-2 text-center text-[color:var(--primary-text-color)]'>
            Jamia has delieved 617 Selections Out of 933 Vacancies (7 in Top 10)
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
          <div className='flex flex-wrap items-center justify-center gap-6 mt-6'>
            <button className='px-5 py-2 bg-[color:var(--primary-text-color)] text-white border-2 border-[color:var(--primary-color)] hover:text-[color:var(--primary-text-color)] hover:bg-white duration-300'>
              Read Topper's Reviews
            </button>
            <button className='px-5 py-2 bg-[color:var(--primary-text-color)] text-white border-2 border-[color:var(--primary-color)] hover:text-[color:var(--primary-text-color)] hover:bg-white duration-300'>
              View Topper List
            </button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ResultFirst
