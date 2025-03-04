import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    Tooltip,
    ResponsiveContainer,
    Cell 
  } from 'recharts';
  import { useTheme } from '../context/ThemeContext';
  
  const CustomTooltip = ({ active, payload, label }) => {
    const { darkMode } = useTheme();
  
    if (active && payload && payload.length) {
      return (
        <div className={`chart-tooltip ${darkMode ? 'dark' : ''}`}>
          <p className="font-semibold mb-2">{label}</p>
          <div className="space-y-1">
            {payload.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-sm">
                  {entry.name}: {entry.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };
  
  const ComparisonChart = ({ data }) => {
    const { darkMode } = useTheme();
    const colors = darkMode 
      ? ['#60A5FA', '#34D399', '#FBBF24'] 
      : ['#3B82F6', '#10B981', '#F59E0B'];
  
    return (
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="name" 
            tick={{ fill: darkMode ? '#fff' : '#000' }} 
          />
          <YAxis 
            tick={{ fill: darkMode ? '#fff' : '#000' }} 
            label={{ 
              value: 'Percentage (%)', 
              angle: -90, 
              position: 'insideLeft',
              fill: darkMode ? '#fff' : '#000'
            }}
          />
          <Tooltip 
            content={<CustomTooltip />}
            cursor={{ fill: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
          />
          <Bar dataKey="ctr" name="CTR">
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index % colors.length]} />
            ))}
          </Bar>
          <Bar dataKey="roi" name="ROI">
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[(index + 1) % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default ComparisonChart;