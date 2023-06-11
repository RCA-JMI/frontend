import { AiFillRightCircle, AiOutlineGlobal } from "react-icons/ai";
import {
  BsArrowRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTelephoneFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaBook, FaLocationArrow, FaSchool, FaThumbsUp } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { IoRibbonSharp, IoTrophySharp } from "react-icons/io5";
import { MdEmail, MdLocationOn } from "react-icons/md";
import Container from "../components/container/container.component";

import booksImg from "../assets/home/books-facility.webp";
import feesImg from "../assets/home/fees-facility.webp";
import hostelImg from "../assets/home/hostel-facility.webp";
import rcaImg from "../assets/home/rca-facility.webp";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[56px]">
      {/* main */}
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

      {/* enroll and enquiry */}
      <Container>
        <section className="flex flex-col items-center justify-center my-12">
          <h1 className="mb-6 text-3xl font-[500] text-[color:var(--primary-text-color)]">
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
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            <button className="px-6 py-2 bg-[color:var(--primary-text-color)] text-white border-2 border-[color:var(--primary-color)] hover:text-[color:var(--primary-text-color)] hover:bg-white duration-300">
              Enroll Now
            </button>
            <button className="px-6 py-2 bg-white text-[color:var(--primary-text-color)] border-2 border-[color:var(--primary-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-300">
              Request an Enquiry
            </button>
          </div>
        </section>
      </Container>

      {/* logos  */}
      <section className="bg-[color:var(--primary-color)] text-white py-12">
        <Container className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center">
            <IoRibbonSharp className="mb-4 text-6xl" />
            <p className="text-center max-w-[30rem]">
              34 years of legacy. Produced 1/3 of all bureaucrats across cadres
              since 1989.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoMdSchool className="mb-4 text-6xl" />
            <p className="text-center max-w-[30rem]">
              Trusted high qulaity UPSC centric teaching by India’s top UPSC
              faculty.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaThumbsUp className="mb-4 text-6xl" />
            <p className="text-center max-w-[30rem]">
              To ensure personalized attention and effective learning, we
              maintain small batch sizes.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoTrophySharp className="mb-4 text-6xl" />
            <p className="text-center max-w-[30rem]">
              Our students have achieved remarkable results in the IAS
              examination, securing top ranks.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaSchool className="mb-4 text-6xl" />
            <p className="text-center max-w-[30rem]">
              Comprehensive Study materials and Test Series to cover the entire
              syllabus timely.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <AiOutlineGlobal className="mb-4 text-6xl" />
            <p className="text-center max-w-[30rem]">
              Goal Oriented pedagogy prepares you to Crack IAS in your first
              attempt.
            </p>
          </div>
        </Container>
      </section>

      {/* our courses */}
      <Container className="my-12">
        <section className="flex flex-col items-center justify-center">
          <h1 className="mb-4 text-3xl font-[500] text-[color:var(--primary-text-color)]">
            Our Courses
          </h1>
          <p className="mb-12 text-center">
            We offer one stop solution for UPSC civil services exam preparation
            from Prelims to Mains and after Interview. Join a course to start
            your preparation with our Best IAS Coaching in India.
          </p>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 ">
            <div className="flex flex-col items-center gap-4 overflow-hidden shadow-lg shadow-gray-400 rounded-xl max-w-[24rem]">
              <div className="flex flex-col w-full  items-center gap-4 justify-center bg-[color:var(--primary-color)] text-white p-6">
                <FaBook className="text-6xl " />
                <h3 className="text-xl font-semibold text-center">
                  IAS Classroom Course
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 px-4 mb-6">
                <p className="text-center text-[--secondary-text-color]">
                  Our classroom courses are ideal for students who prefer to
                  join regular IAS classes in Delhi. These classes are held in a
                  conducive environment, and we provide you with all the study
                  material you need to prepare for the exam.{" "}
                </p>
                <button className="flex items-center justify-around gap-4 px-6 py-2 bg-white text-[color:var(--primary-text-color)] border-2 border-[color:var(--primary-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-300 rounded-md">
                  <h3>Explore Course</h3> <BsArrowRight className="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 overflow-hidden shadow-lg shadow-gray-400 rounded-xl max-w-[24rem]">
              <div className="flex flex-col w-full  items-center gap-4 justify-center bg-[color:var(--primary-color)] text-white p-6">
                <FaBook className="text-6xl " />
                <h3 className="text-xl font-semibold text-center">
                  Weekend Batches for IAS
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 px-4 mb-6">
                <p className="text-center text-[--secondary-text-color]">
                  Our classroom courses are ideal for students who prefer to
                  join regular IAS classes in Delhi. These classes are held in a
                  conducive environment, and we provide you with all the study
                  material you need to prepare for the exam.{" "}
                </p>
                <button className="flex items-center justify-around gap-4 px-6 py-2 bg-white text-[color:var(--primary-text-color)] border-2 border-[color:var(--primary-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-300 rounded-md">
                  <h3>Explore Course</h3> <BsArrowRight className="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 overflow-hidden shadow-lg shadow-gray-400 rounded-xl max-w-[24rem]">
              <div className="flex flex-col w-full  items-center gap-4 justify-center bg-[color:var(--primary-color)] text-white p-6">
                <FaBook className="text-6xl " />
                <h3 className="text-xl font-semibold text-center">
                  Online IAS Coaching
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 px-4 mb-6">
                <p className="text-center text-[--secondary-text-color]">
                  Our classroom courses are ideal for students who prefer to
                  join regular IAS classes in Delhi. These classes are held in a
                  conducive environment, and we provide you with all the study
                  material you need to prepare for the exam.{" "}
                </p>
                <button className="flex items-center justify-around gap-4 px-6 py-2 bg-white text-[color:var(--primary-text-color)] border-2 border-[color:var(--primary-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-300 rounded-md">
                  <h3>Explore Course</h3> <BsArrowRight className="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 overflow-hidden shadow-lg shadow-gray-400 rounded-xl max-w-[24rem]">
              <div className="flex flex-col w-full  items-center gap-4 justify-center bg-[color:var(--primary-color)] text-white p-6">
                <FaBook className="text-6xl " />
                <h3 className="text-xl font-semibold text-center">
                  UPSC Test Series
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 px-4 mb-6">
                <p className="text-center text-[--secondary-text-color]">
                  Our classroom courses are ideal for students who prefer to
                  join regular IAS classes in Delhi. These classes are held in a
                  conducive environment, and we provide you with all the study
                  material you need to prepare for the exam.{" "}
                </p>
                <button className="flex items-center justify-around gap-4 px-6 py-2 bg-white text-[color:var(--primary-text-color)] border-2 border-[color:var(--primary-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-300 rounded-md">
                  <h3>Explore Course</h3> <BsArrowRight className="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 overflow-hidden shadow-lg shadow-gray-400 rounded-xl max-w-[24rem]">
              <div className="flex flex-col w-full  items-center gap-4 justify-center bg-[color:var(--primary-color)] text-white p-6">
                <FaBook className="text-6xl " />
                <h3 className="text-xl font-semibold text-center">
                  UPSC Correspondence Course
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 px-4 mb-6">
                <p className="text-center text-[--secondary-text-color]">
                  Our classroom courses are ideal for students who prefer to
                  join regular IAS classes in Delhi. These classes are held in a
                  conducive environment, and we provide you with all the study
                  material you need to prepare for the exam.{" "}
                </p>
                <button className="flex items-center justify-around gap-4 px-6 py-2 bg-white text-[color:var(--primary-text-color)] border-2 border-[color:var(--primary-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-300 rounded-md">
                  <h3>Explore Course</h3> <BsArrowRight className="" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 overflow-hidden shadow-lg shadow-gray-400 rounded-xl max-w-[24rem]">
              <div className="flex flex-col w-full  items-center gap-4 justify-center bg-[color:var(--primary-color)] text-white p-6">
                <FaBook className="text-6xl " />
                <h3 className="text-xl font-semibold text-center">
                  Interview Guidance Program
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 px-4 mb-6">
                <p className="text-center text-[--secondary-text-color]">
                  Our classroom courses are ideal for students who prefer to
                  join regular IAS classes in Delhi. These classes are held in a
                  conducive environment, and we provide you with all the study
                  material you need to prepare for the exam.{" "}
                </p>
                <button className="flex items-center justify-around gap-4 px-6 py-2 bg-white text-[color:var(--primary-text-color)] border-2 border-[color:var(--primary-color)] hover:bg-[color:var(--primary-text-color)] hover:text-white duration-300 rounded-md">
                  <h3>Explore Course</h3> <BsArrowRight className="" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* about us */}
      <section className="bg-[color:var(--primary-color)] text-white py-12">
        <Container className="flex flex-col items-center gap-2">
          <h1 className="mb-4 text-3xl font-[500] text-white text-center ">
            About Us
          </h1>
          <div className="flex flex-col items-start w-full gap-6 tracking-wide md:flex-row">
            <div className="w-full">
              <iframe
                className="w-full h-[320px]"
                src="https://www.youtube.com/embed/kIpQvDsjHRg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 md:w-11/12">
              <p>
                <strong>JMI RCA</strong> is{" "}
                <strong>India's well known Institute</strong> preparing
                candidates for the <strong>Civil Services Examination</strong>
                at all the three levels: UPSC Preliminary Exam, UPSC Main
                Examination and Personality Test. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Vitae suscipit perferendis
                mollitia doloribus, sint, exercitationem quia amet magnam
                tempora, aliquam ducimus. Ad at similique corrupti commodi,
                accusamus possimus est ipsum dicta unde?
              </p>
              <p>
                Year after year some of our students have secured positions
                amongst the Top 10 successful candidates. The teaching faculty
                of the Institute has been drawn from highly qualified and
                experienced teachers of the Central Universities and other
                reputed Institutes. To provide quality education and guidance
                normally a minimum of two teachers are engaged for each subject.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* our acheivements */}
      <Container className="my-12">
        <section className="flex flex-col items-center justify-center">
          <h1 className="mb-4 text-3xl font-[500] text-[color:var(--primary-text-color)]">
            Our Acheivements
          </h1>
          <p className="mb-2 text-center">
            Click on See all achievement to view list of selections.
          </p>
          <Carousel
            responsive={responsive}
            className="w-full h-[280px]"
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={true}
            swipeable
          >
            <div className="border-8 flex items-center justify-center border-[--primary-color] h-48 shadow-md m-4">
              Item1
            </div>
            <div className="border-8 flex items-center justify-center border-[--primary-color] h-48 shadow-md m-4">
              Item2
            </div>
            <div className="border-8 flex items-center justify-center border-[--primary-color] h-48 shadow-md m-4">
              Item3
            </div>
            <div className="border-8 flex items-center justify-center border-[--primary-color] h-48 shadow-md m-4">
              Item4
            </div>
            <div className="border-8 flex items-center justify-center border-[--primary-color] h-48 shadow-md m-4">
              Item5
            </div>
            <div className="border-8 flex items-center justify-center border-[--primary-color] h-48 shadow-md m-4">
              Item6
            </div>
            <div className="border-8 flex items-center justify-center border-[--primary-color] h-48 shadow-md m-4">
              Item7
            </div>
          </Carousel>
          <Link
            to="/results"
            className="px-6 py-2 mt-4 bg-[color:var(--primary-text-color)] text-white border-2 border-[color:var(--primary-color)] hover:text-[color:var(--primary-text-color)] hover:bg-white duration-300"
          >
            See All Achievements
          </Link>
        </section>
      </Container>

      {/* faciltities */}
      <section className="bg-home-facility-img bg-cover bg-[50%] bg-no-repeat w-full">
        <Container className="flex flex-col items-center justify-center py-16">
          <h1 className="mb-4 text-3xl font-[500] text-white text-center ">
            Facilities at JMI RCA
          </h1>
          <div className="grid grid-cols-1 gap-12 mt-16 place-content-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center justify-center">
              <img
                src={rcaImg}
                className="object-cover h-56 border-4 border-white aspect-square "
                alt=""
              />
              <p className="mt-2 text-center text-white">
                World-Class Infrastructure
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={hostelImg}
                className="object-cover h-56 border-4 border-white aspect-square"
                alt=""
              />
              <p className="mt-2 text-center text-white">
                World-Class Infrastructure
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={booksImg}
                className="object-cover h-56 border-4 border-white aspect-square"
                alt=""
              />
              <p className="mt-2 text-center text-white">
                World-Class Infrastructure
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={feesImg}
                className="object-cover h-56 border-4 border-white aspect-square"
                alt=""
              />
              <p className="mt-2 text-center text-white">
                World-Class Infrastructure
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* blogs and resources */}
      <Container>
        <section className="flex flex-col items-center justify-center my-12">
          <h1 className="mb-4 text-3xl font-[500] text-[color:var(--primary-text-color)]">
            Blogs & Resources
          </h1>
          <p className="mb-2 text-center">
            JMI RCA IAS free resources for beginner UPSC aspirants are
            specifically designed from the perspective of UPSC Civil Services
            Examination. These are aligned to the demands of UPSC prelims, mains
            and complimented with previous years question papers.
          </p>
          <div className="grid gap-6 px-6 mt-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-[500]">How to Start Preperation</h1>
              <p className="mt-2 text-sm">
                Worried about How to start UPSC exam preparation? Read our
                Beginner guide to get start.
              </p>
              <Link
                to="/"
                className="flex items-center gap-1 mt-1 text-sm text-blue-700"
              >
                Learn more
                <AiFillRightCircle className="text-sm text-blue-700" />
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-[500]">How to Start Preperation</h1>
              <p className="mt-2 text-sm">
                Worried about How to start UPSC exam preparation? Read our
                Beginner guide to get start.
              </p>
              <Link
                to="/"
                className="flex items-center gap-1 mt-1 text-sm text-blue-700"
              >
                Learn more
                <AiFillRightCircle className="text-sm text-blue-700" />
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-[500]">How to Start Preperation</h1>
              <p className="mt-2 text-sm">
                Worried about How to start UPSC exam preparation? Read our
                Beginner guide to get start.
              </p>
              <Link
                to="/"
                className="flex items-center gap-1 mt-1 text-sm text-blue-700"
              >
                Learn more
                <AiFillRightCircle className="text-sm text-blue-700" />
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-[500]">How to Start Preperation</h1>
              <p className="mt-2 text-sm">
                Worried about How to start UPSC exam preparation? Read our
                Beginner guide to get start.
              </p>
              <Link
                to="/"
                className="flex items-center gap-1 mt-1 text-sm text-blue-700"
              >
                Learn more
                <AiFillRightCircle className="text-sm text-blue-700" />
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-[500]">How to Start Preperation</h1>
              <p className="mt-2 text-sm">
                Worried about How to start UPSC exam preparation? Read our
                Beginner guide to get start.
              </p>
              <Link
                to="/"
                className="flex items-center gap-1 mt-1 text-sm text-blue-700"
              >
                Learn more
                <AiFillRightCircle className="text-sm text-blue-700" />
              </Link>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-[500]">How to Start Preperation</h1>
              <p className="mt-2 text-sm">
                Worried about How to start UPSC exam preparation? Read our
                Beginner guide to get start.
              </p>
              <Link
                to="/"
                className="flex items-center gap-1 mt-1 text-sm text-blue-700"
              >
                Learn more
                <AiFillRightCircle className="text-sm text-blue-700" />
              </Link>
            </div>
          </div>
        </section>
      </Container>

      {/* contact us */}
      <section className="w-full py-12 bg-home-contact-img bg-cover bg-[50%] bg-no-repeat flex justify-center flex-col p-10 md:items-center">
        <Container className="flex items-center justify-center">
          <div className="w-0 md:w-1/2"></div>
          <div className="flex flex-col text-white">
            <h2 className="text-3xl font-[500]">Contact Information</h2>
            <p className="flex flex-wrap mt-6">
              <strong className="flex items-center gap-1">
                <MdLocationOn />
                Adresss : &nbsp;
              </strong>
              Jamia Nagar New Delhi, India
            </p>
            <p className="flex flex-wrap mt-4">
              <strong className="flex items-center gap-1">
                <BsTelephoneFill />
                Telephone : &nbsp;
              </strong>
              011-26981717, 26984617, 26984658
            </p>

            <p className="flex flex-wrap mt-4">
              <strong className="flex items-center gap-1">
                <MdEmail />
                Email : &nbsp;
              </strong>
              jmirca@gmail.com
            </p>
            <p className="flex flex-wrap mt-4">
              <strong className="flex items-center gap-1">
                <FaLocationArrow />
                Location : &nbsp;
              </strong>
              <Link
                to="https://www.google.com/maps/place/Centre+for+Coaching+and+Career+Planning/@28.5547121,77.2750214,16.02z/data=!4m10!1m2!2m1!1sJamia+rca!3m6!1s0x390ce38b551422e5:0x929eec49dd6be5f4!8m2!3d28.5552237!4d77.2830574!15sCglKYW1pYSByY2FaCyIJamFtaWEgcmNhkgEPY29hY2hpbmdfY2VudGVymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU13ZVRkZldGTm5FQUXgAQA!16s%2Fg%2F124sx53q8?entry=ttu"
                target="_blank"
              >
                &nbsp;Find Us on Google Map
              </Link>
            </p>
            <p className="mt-8">Follow us on Social Media</p>
            <div className="flex gap-4 mt-4">
              <Link to="/">
                <BsFacebook className="text-2xl" />
              </Link>
              <Link to="/">
                <BsTwitter className="text-2xl" />
              </Link>
              <Link to="/">
                <BsInstagram className="text-2xl" />
              </Link>
              <Link to="/">
                <BsLinkedin className="text-2xl" />
              </Link>
              <Link to="/">
                <BsYoutube className="text-2xl" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* enquiry */}
      <Container>
        <section className="flex flex-col items-center justify-center my-12">
          <h1 className="mb-4 text-3xl font-[500] text-[color:var(--primary-text-color)]">
            Request A Call Back
          </h1>
          <p className="mb-2 text-center">
            If you have any query feel free to connect with us
          </p>
          <button className="px-6 py-2 mt-4 bg-[color:var(--primary-text-color)] text-white border-2 border-[color:var(--primary-color)] hover:text-[color:var(--primary-text-color)] hover:bg-white duration-300">
            Get Enquiry Today
          </button>
        </section>
      </Container>
    </div>
  );
};

export default Home;
