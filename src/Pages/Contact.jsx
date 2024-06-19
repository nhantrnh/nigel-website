import React from 'react';

export default function ContactPage() {
  return (
    <div className=" dark:bg-black min-h-screen">
      <div className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Contact Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContactItem
              icon={<i className="fab fa-facebook-square text-3xl"></i>}
              label="Facebook"
              link="https://www.facebook.com/profile.php?id=100071242029433"
            />
            <ContactItem
              icon={<i className="fab fa-instagram-square text-3xl"></i>}
              label="Instagram"
              link="https://www.instagram.com/raymondsdiary/"
            />
            <ContactItem
              icon={<i className="fab fa-github-square text-3xl"></i>}
              label="GitHub"
              link="https://github.com/nhantrnh"
            />
            <ContactItem
              icon={<i className="fab fa-linkedin text-3xl"></i>}
              label="LinkedIn"
              link="https://www.linkedin.com/in/nhantrnh"
            />
            <ContactItem
              icon={<i className="fas fa-envelope-square text-3xl"></i>}
              label="Gmail"
              link="nhantrnh03@gmail.com"
            />
            <ContactItem
              icon={<i className="fas fa-camera text-3xl"></i>}
              label="Unsplash"
              link="https://unsplash.com/@radjad"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactItem = ({ icon, label, link }) => {
  return (
    <a
      href={link}
      className="flex items-center p-4 bg-gray-200 dark:bg-gray-700 rounded-md dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 ease-in-out"
    >
      <div className="mr-4">{icon}</div>
      <div className="text-lg">{label}</div>
    </a>
  );
}

