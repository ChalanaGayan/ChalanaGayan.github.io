import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 p-4 flex justify-between">
            <div>© 2024 Chalana Gayan</div>
            <div className="flex space-x-4">
                <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                    <img src="whatsapp-logo.png" alt="WhatsApp" className="w-6 h-6" />
                </a>
                <a href="mailto:your-email@example.com">
                    <img src="email-logo.png" alt="Email" className="w-6 h-6" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
