import { motion } from 'framer-motion';
import { FiFilter } from 'react-icons/fi';

export default function DataFilters({ onFilter }) {
  const industries = ['All', 'E-commerce', 'SaaS', 'Healthcare', 'Education'];
  const timeRanges = ['Last Week', 'Last Month', 'Last Year', 'Custom'];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <FiFilter className="text-blue-600 dark:text-blue-400" size={20} />
        <h3 className="text-lg font-semibold dark:text-white">Filter Data</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-gray-300">Industry</label>
          <select
            onChange={(e) => onFilter({ industry: e.target.value })}
            className="filter-select dark:bg-gray-700"
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-gray-300">Time Range</label>
          <select
            onChange={(e) => onFilter({ timeRange: e.target.value })}
            className="filter-select dark:bg-gray-700"
          >
            {timeRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-gray-300">
            Budget Range ($0 - $10k)
          </label>
          <input
            type="range"
            min="0"
            max="10000"
            step="1000"
            onChange={(e) => onFilter({ budget: e.target.value })}
            className="w-full range-slider dark:bg-gray-700"
          />
        </div>
      </div>
    </motion.div>
  );
}