// Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-indigo-800 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between w-full">
            {/* Image on the Left */}
            <div className="flex justify-center sm:justify-start items-center sm:mr-6 mb-4 sm:mb-0">
              <img
                src="/images/3.png" // Image in the public folder
                alt="Logo"
                className="h-16 w-auto object-contain" // Adjust size of the image
              />
            </div>
  
            {/* Address and Copyright */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between text-gray-200 w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-sm text-center sm:text-left">Your Company | Address, City, State</p>
              <p className="text-sm text-center sm:text-right">© 2025 Your Company</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  