import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { darkMode } = useTheme();
  
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`mt-16 py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold dark:text-white">Marketing Explorer</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Data-driven insights for digital marketing success
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-md font-medium dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/compare" className="footer-link dark:text-gray-300">
                  Channel Comparison
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link dark:text-gray-300">
                  About Developer
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-md font-medium dark:text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm dark:text-gray-300">
                shivam18012003@gmail.com
              </li>
              <li className="text-sm dark:text-gray-300">
                +91 93043 32221
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm dark:text-gray-400">
            © 2023 Marketing Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}