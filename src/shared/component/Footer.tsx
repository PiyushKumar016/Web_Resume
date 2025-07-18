

const Footer = () => {
  return (
    <div className=" p-8 font-sans text-white">
        <div className='text-4xl w-[100%] flex justify-center mb-[20px]'>Contacts</div>
      <div className="space-y-10">
        
        {/* -- Location Item -- */}
        

        {/* -- Phone Item -- */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-[purple]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Phone Number</h3>
            <div className="mt-1 text-base">
              <p>+91 99999 88888</p>
            </div>
          </div>
        </div>

        {/* -- Email Item -- */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-[purple]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Email Address</h3>
            <div className="mt-1 text-base">
              <p>PiyushKumar@gmail.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;