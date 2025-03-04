import { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import ComparisonChart from '../components/ComparisonChart';

const ComparePage = () => {
  const [selectedChannels, setSelectedChannels] = useState([]);
  const channels = [
    { id: 1, name: 'SEO', ctr: 3.5, roi: 350 },
    { id: 2, name: 'PPC', ctr: 3.0, roi: 300 },
    { id: 3, name: 'Social Media', ctr: 2.0, roi: 200 },
  ];

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Channel Comparison</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {channels.map(channel => (
            <motion.div
              key={channel.id}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-xl cursor-pointer ${
                selectedChannels.includes(channel.id)
                  ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-gray-700'
                  : 'bg-white dark:bg-gray-800'
              }`}
              onClick={() => handleSelect(channel.id)}
            >
              <h3 className="text-xl font-semibold dark:text-white">{channel.name}</h3>
            </motion.div>
          ))}
        </div>

        {selectedChannels.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
          >
            <ComparisonChart 
              data={channels.filter(c => selectedChannels.includes(c.id))}
            />
          </motion.div>
        )}
      </motion.div>
    </Layout>
  );
};

export default ComparePage;