import './index.css';

function Footer() {
  return (
    <div className="bg-[#f5f1eb] text-center py-6 text-sm text-gray-700">
      <p>
        All content on this site is licensed under{' '}
        <a
          href="https://github.com/Viper-rgb"
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          a Creative Commons License
        </a>
        . ©2011 Alice Birpemswick.
      </p>
    </div>
  );
}

export default Footer;
