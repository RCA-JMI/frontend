const AboutUs = () => {

  return <div className="mt-16">
        <div className="flex flex-col items-center justify-center">

          <div className="flex flex-col justify-center py-5 px-5 max-w-7xl m-3"> 
          <div>
          <h2 className="text-4xl font-medium mb-4">About Institute</h2>
          {/* <hr className="m-auto w-full max-w-[35%] border-t-1 border-indigo-200 mb-3"/> */}
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-center">
            <div className="mt-4 w-fit sm:min-w-max min-h-max">
              <figure>
              <img src="src\assets\home\About-us-1.jpg"/>
              <figcaption className="font-sm text-gray-500"><i> Best IAS Coaching in Delhi</i></figcaption>
              </figure>
            </div>
            <p className="p-5 lg:px-10 text-base">Vajirao Reddy is India’s well-known Institute preparing candidates for the Civil Services Examination at all the three levels – Preliminary Test, Main Examination and Personality Test. The Institute of Vajirao and Reddy was founded in 1989 by S. S. Chaudhary Sir with the aim of empowering IAS candidates to enhance thier skills to Clear UPSC Civil Services Examination like IAS, IFS, IRS, IPS and State Level PCS examinations. A Journey of pride and passion starts with one step in the right direction and Vajirao &amp; Reddy is with you in this journey&nbsp; <strong>Institute’s Vice Chairman S.S. Chaudhary Sir</strong> has been guiding the students for the last 34 years. C SAT, General Studies, History, Public Administration &amp; Geography engages a group of 50 outstanding teachers each one being the best known master of his area. <br/> <br/> It is this specialization that enables us to deliver top-notch excellence in all the areas of these subjects. <br/> <br/> Vajirao Institute’s core team awaits here to guide you step by step towards overall excellence that automatically leads to success. You simply cannot get such teaching excellence anywhere else. This core team awaits here to guide you step by step towards overall excellence that automatically leads to success. </p>
          </div>
          </div> 

          <div className="flex flex-col justify-center py-5 px-5 max-w-7xl m-3"> 
          <div>
          <h2 className="text-center text-3xl font-medium mb-4">Our Faculty</h2>
          {/* <hr className="m-auto w-full max-w-[35%] border-t-1 border-indigo-200 mb-3"/> */}
          </div>
          <p className="p-2 text-center"><strong>“Delhi’s Highly Qualified Faculty is the primary pillar of our Institute”</strong></p>
          <div className="flex flex-col justify-center">
            <p className="p-5 text-base">Our faculty helps students to gain basic conceptual clarity. Obviously, the success stories of our previous Achievements prove the quality of education. Being the Nation’s Most Trusted <strong> Best Coaching Centre </strong> for Civil Services Exams preparation, We own a unique learning method. Here is a list of the key features that we promises to deliver the Best to our students:</p>
            <ul className="list-disc p-5 lg:px-10">
              <li>Interactive Classroom Coaching</li>
              <li>Detailed Test Performance Analysis</li>
              <li>Latest and Updated Study Materials</li>
              <li>Excellent Administrative Management</li>
              <li>High-Quality Postal Coaching Material</li>
              <li>Standard Practice Test Series Programs</li>
              <li>Interview Guidance and DAF Analysis</li>
              <li>Motivational Classes by Our Institute's Toppers</li>
            </ul>
          </div>
          </div> 

          <div className="flex flex-col justify-center py-5 px-5 max-w-7xl m-3"> 
          <div>
          <h2 className="text-center text-3xl font-medium mb-4">Teaching Methodology</h2>
          {/* <hr className="m-auto w-full max-w-[35%] border-t-1 border-indigo-200 mb-4"/> */}
          </div>
          <p className="p-2 text-center"><strong>“Leadership is the capacity to translate vision into reality”</strong></p>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="w-fit sm:min-w-max min-h-max">
              <img  src="src\assets\home\About-us-2.jpg"/>
            </div>
            <div>
              <p className="p-5 lg:px-10 text-base">What you need first of all is conceptual clarity on all the topics, so that you handle any question with supreme confidence. To do this, we have developed a highly modern &amp; efficient teaching style – that relies on:</p>
              <ul className="list-decimal p-5 lg:px-11">
                <li>Colored figures &amp; interlinked flow charts to illustrate even a small concept. It is this approach that fetches you a 360+score in the IAS Main.</li>
                <li>Simple &amp; lucid explanation in day-to-day language, using innovative analogies to totally simplify the concepts.</li>
                <li>A lot of interactivity during classroom discussion does not consolidate your understanding.</li>
                <li>Greater emphasis on explanation rather than dictation in the classroom. We are strongly convinced that the dictation style of teaching is really primitive and takes away the joy of learning. All the notes you need are already in the printed form, which we revise and update after every batch. So, you can use your classroom sessions to actually develop a mastery of the concepts.</li>
              </ul> 
            </div>
          </div>
          </div> 

          <div className="flex flex-col justify-start py-5 px-5 max-w-7xl m-3"> 
          <div>
          <h2 className="text-center text-3xl font-medium mb-4">Director's Message</h2>
          {/* <hr className="m-auto w-full max-w-[35%] border-t-1 border-indigo-200 mb-5"/> */}
          </div>
          <div className="flex flex-col lg:flex-row items-start justify-center">
            <div className="w-fit sm:min-w-max min-h-max">
              <img src="src\assets\home\About-us-3.webp" />
            </div>
            <div className="flex flex-col justify-center max-w-md px-10">
            <br />
            <p className="text-base"><i>Looking forward to welcome you to the institute.</i></p>
            <br />
            <h3><strong>S. S. Chaudhary Sir</strong></h3>
            <p>Director Vajirao and Reddy Institute Pvt. Ltd. (Institute For IAS Examination), New Delhi</p>
            <br />
            <a href="#"><h3><strong>View Director's Message</strong></h3></a>
            </div>
          </div>
          </div>

        </div>
    </div>;
  return <div className="mt-16">AboutUs</div>;
};

export default AboutUs;