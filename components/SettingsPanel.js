import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSettings, FiX } from 'react-icons/fi';

export default function SettingsPanel() {
  const { darkMode, toggleDarkMode, settingsOpen, setSettingsOpen } = useTheme();

  return (
    <>
      <motion.button
        whileHover={{ rotate: 45 }}
        whileTap={{ scale: 0.9 }}
        className="fixed right-6 bottom-6 p-3 bg-blue-600 text-white rounded-full shadow-xl z-50"
        onClick={() => setSettingsOpen(!settingsOpen)}
      >
        <FiSettings size={24} />
      </motion.button>

      {settingsOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed right-6 bottom-24 w-72 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl z-50"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold dark:text-white">Settings</h3>
            <button 
              onClick={() => setSettingsOpen(false)}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <FiX size={20} className="dark:text-white" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="dark:text-white">Dark Theme</span>
              <button
                onClick={toggleDarkMode}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${
                  darkMode ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <motion.div
                  className="w-4 h-4 bg-white rounded-full shadow-md"
                  animate={{ x: darkMode ? 24 : 0 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="dark:text-white">Animations</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round"></span>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="dark:text-white">Data Refresh</span>
              <select className="dark:bg-gray-700 dark:text-white px-2 py-1 rounded">
                <option>Real-time</option>
                <option>Every 5 mins</option>
                <option>Manual</option>
              </select>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}