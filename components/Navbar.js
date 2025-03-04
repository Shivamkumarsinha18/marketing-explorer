import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode } = useTheme();
  
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm z-40"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold gradient-text">MarketingExplorer</a>
        </Link>
        
        <div className="flex gap-6">
          <Link href="/compare">
            <a className="nav-link dark:text-white">Compare</a>
          </Link>
          <Link href="/about">
            <a className="nav-link dark:text-white">About</a>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}