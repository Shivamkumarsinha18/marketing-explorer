import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ChannelCard({ channel }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all"
    >
      <h3 className="text-xl font-bold mb-4 dark:text-white">
        {channel.name}
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <MetricBox label="CTR" value={`${channel.ctr}%`} />
        <MetricBox label="ROI" value={`${channel.roi}%`} />
        <MetricBox label="Conversion" value={`${channel.conversion}%`} />
        <MetricBox label="Engagement" value={`${channel.engagement}%`} />
      </div>
      <Link href={`/compare?channel=${channel.id}`}>
        <a className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          Compare Channel →
        </a>
      </Link>
    </motion.div>
  );
}

const MetricBox = ({ label, value }) => (
  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
    <p className="text-sm text-gray-500 dark:text-gray-300">{label}</p>
    <p className="text-lg font-semibold dark:text-white">{value}</p>
  </div>
);