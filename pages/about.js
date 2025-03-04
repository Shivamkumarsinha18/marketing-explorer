import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function AboutPage() {
  const { darkMode } = useTheme();

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto py-12 px-4"
      >
        <h1 className="text-4xl font-bold mb-8 gradient-text">About Developer</h1>
        
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold dark:text-white">Shivam Kumar Sinha</h2>
              <ul className="space-y-2 dark:text-gray-300">
                <li>📧 shivam18012003@gmail.com</li>
                <li>📱 +91 93043 32221</li>
                <li>📍 India</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://github.com/yourprofile"
                  className="social-link dark:text-white"
                >
                  GitHub
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  href="https://linkedin.com/in/yourprofile"
                  className="social-link dark:text-white"
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
            
            <motion.div
              whileHover={{ rotate: 2 }}
              className="relative w-64 h-64 mx-auto"
            >
              <div className={`absolute inset-0 rounded-2xl border-4 ${
                darkMode ? 'border-blue-600' : 'border-blue-200'
              }`} />
              <div className={`absolute inset-4 bg-gray-200 dark:bg-gray-700 rounded-xl`} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12 dark:text-gray-300"
        >
          <h3 className="text-2xl font-semibold mb-4 dark:text-white">Skills & Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'Next.js', 'Digital Marketing', 'Data Analysis', 'UI/UX', 'SEO'].map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="skill-pill dark:bg-gray-700"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}