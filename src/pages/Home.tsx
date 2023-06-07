import Container from "../components/container/container.component";

const Home = () => {
  return (
    <div className="mt-[56px]">
      <section className="w-full h-[600px] bg-home-main-img bg-cover bg-[50%] bg-no-repeat flex justify-center flex-col p-10 md:items-center">
        <div className="">
          <h1 className="mb-4 text-4xl font-semibold tracking-wide text-white">
            Welcome to Jamia RCA{" "}
          </h1>
          <h3 className="mb-4 text-md font-light tracking-wide text-white md:max-w-[30rem]">
            IAS Coaching in Delhi for UPSC-Civil Serivces Exams Preparation to
            become an IAS officer.
          </h3>
          <button className="w-32 px-4 py-2 text-white duration-300 border-2 border-white rounded-sm hover:bg-gray-800 hover:scale-95">
            Click Here
          </button>
        </div>
      </section>
      <Container>
        <section className="flex flex-col items-center justify-center my-10">
          <h1 className="mb-4 text-3xl font-[500] text-[color:var(--primary-text-color)]">
            Best IAS Coahing in Delhi
          </h1>
          <p className="text-center">
            <span className="font-semibold">Jmi RCA</span> is Achievers 1st
            choice IAS coaching center based in Delhi offering best IAS coaching
            in Delhi. experience through it’s offline UPSC coaching in Delhi as
            well as best online IAS coaching. If you are looking for a Top IAS
            coaching in Delhi or Best coaching for IAS in India, join Vajirao
            IAS today!
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-2 bg-[color:var(--primary-text-color)] text-white border-2 border-[color:var(--primary-color)] hover:text-[color:var(--primary-text-color)] hover:bg-white duration-300">
              Enroll Now
            </button>
            <button className="px-6 py-2 bg-white text-[color:var(--primary-text-color)] border-2 border-[color:var(--primary-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-300">
              Request an Enquiry
            </button>
          </div>
        </section>
      </Container>
      <section className="bg-blue-600"></section>
    </div>
  );
};

export default Home;
