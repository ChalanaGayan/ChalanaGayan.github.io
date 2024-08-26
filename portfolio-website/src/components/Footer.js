import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 flex justify-between">
            <div>© 2024 Chalana Gayan</div>
            <div className="flex space-x-4">
                <a href="https://wa.me/+94779635764" target="_blank" rel="noopener noreferrer">
                    <img src="/Icons/whatsapp.png" alt="WhatsApp" className="w-10 h-10 p-2" />
                </a>
                <a href="mailto:gayanchalana@gmail.com">
                    <img src="/Icons/email.png" alt="Email" className="w-10 h-10 p-2" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
