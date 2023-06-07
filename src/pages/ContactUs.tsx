import { useEffect, useState } from "react";

const ContactUs = () => {
  const [user, setUser]=useState({
    name: "",
    mobileNumber: "",
    email : "",
    message : "",
  });
  useEffect(() => {});
  
  function handleSubmit(event){
    
    // post

  }
  
  return (
    <>
      <div className="px-2 py-12 ">
        <div className="flex flex-no-wrap items-start">
          <div className="w-full ">
            <div className="py-10 px-20">
              <div className="bg-white rounded shadow mt-7 py-7">
                
                  <div className="px-7 header flex bg-white  justify-start py-[30px] border-b-[2px] border-t-[2px] border-slate-100 flex-wrap gap-x-4 ">
                    
                  <p className="lg:hidden text-xl font-bold leading-tight text-[color:var(--tertiary-text-color)]">
                    Institute Details: 
                  </p>
                  <br></br>
                  <div className="text-medium font-semibold leading-tight text-[color:var(--tertiary-text-color)]">
                      <p className="mt-3 font-normal leading-loose ">
                        <strong>Address: </strong>
                        Centre for Coaching and Career Planning,
                        Jamia Millia Islamia,
                        Jamia Nagar, New Delhi-110025 India
                      </p>
                      <p className="mt-3 font-normal leading-loose ">
                        <strong>Contact Number: </strong>
                        Phone: +91 (11) 26985492, 26981717 Extn- 4271, 4272
                      </p>
                      <p className="mt-3 font-normal leading-loose ">
                        <strong>Email: </strong>
                        cccp@jmi.ac.in
                      </p>
                  </div>
                    
                    
                  </div>
                
                
                
                <div className="mt-10 px-7">
                  <p className="text-xl font-bold leading-tight text-[color:var(--tertiary-text-color)]">
                    Get in touch!
                  </p>
                  <p className="mt-2">
                    If you have any query regarding programs, facilities, hostels or have any suggestions,
                    please feel free to connect.

                  </p>
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-9 ">
                    
                    
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Name <span className="text-red-600"> *</span>
                      </p>
                      <input className="w-full p-2 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                      <p className="mt-3 text-xs leading-3 text-gray-600">
                        Please use a legal name.
                      </p>
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Mobile number <span className="text-red-600"> *</span>
                      </p>
                      <input className="w-full p-2 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                      <p className="mt-3 text-xs leading-[15px] text-gray-600">
                        Please enter a valid mobile number.
                      </p>
                    </div>

                    <div>
                      <p className="text-base font-medium leading-none text-gray-800">
                        Email ID:  <span className="text-red-600"> *</span>
                      </p>
                      <input className="w-full p-2 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50" />
                      <p className="mt-3 text-xs leading-[15px] text-gray-600">
                        The above will be used for further contacts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-gray-300 mt-2 px-7">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Message
                  </p>
                  <div className="mt-5 border border-gray-300 rounded">
                    
                    <textarea
                      className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                      placeholder="Start typing here ..."
                      defaultValue={" "}
                    />
                  </div>
                </div>
                <p className="mt-3 text-xs leading-[15px] text-gray-600 px-7">
                  Please describe your concerns. We will respond shortly.
                </p>
                <hr className="h-[1px] bg-gray-100 my-14" />

                
                <div className="mt-2 flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">

                  <button onClick={handleSubmit} className="bg-[color:var(--primary-color)] rounded hover:bg-green-700 transform duration-300 ease-in-out text-sm font-medium px-5 py-3 text-white lg:max-w-[144px] w-full ">
                    Submit
                  </button>
                </div>

              
              </div>
              
              <div className="mt-2 bg-white rounded shadow mt-7 py-7 flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-start md:justify-start gap-x-4 gap-y-4">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Want to contact us via email?
                  </p>
                  <p>
                    You can write to us at cccp@jmi.ac.in. All emails are received
                    at and replied to from the Head Office in New Delhi. If you wish to 
                    request a counselling session or leave feedback/sessions for our Coaching
                    Center, please email us.

                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;



