import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <>

      <hr className="border-gray-200 w-"  />
      <footer className="py-10 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand and Social */}
            <div className="lg:col-span-2">
              <h2 className="absolute font-[Inter] font-normal text-[24px] leading-[150%] align-middle w-[152px] h-[36px] top-[52px] left-[80px]">
                FreshHarvest
              </h2>
              <div className="flex gap-2 mt-[144px] ml-[80px] w-[230px] h-[72px]">
                <a href="#" className="text-gray-400 hover:text-gray-600"><FaFacebook size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-600"><FaLinkedin size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-600"><FaYoutube size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-600"><FaInstagram size={24} /></a>
              </div>
            </div>

            {/* Support Column */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          
        </div>
      </footer>
    </>
  );
}
