import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="max-w-screen-xl py-16 mx-auto">
        <div className="grid grid-cols-1 gap-8 text-center mx-auto">
          <div>
            <p className="font-signika"><b>Tingting Chen</b></p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Contact me at<br />ttina.chenn@gmail.com
            </p>
            <div className="flex mx-auto">
              <div className="mx-auto space-x-6 flex mt-8 text-gray-600 dark:text-gray-300">
                <a className="transition duration-300 hover:opacity-75" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <p className="mt-8 text-xs text-gray-600 dark:text-gray-300 text-center">
        © 2023 Designed by
        <a href="https://www.linkedin.com/in/joão-franco-452161195/" className="underline">João Franco</a>
        {" "} and Developed by
        <a href="https://www.linkedin.com/in/joão-franco-452161195/" className="underline">Tingting Chen</a>
      </p>
    </footer>
  );
}

export default Footer;
