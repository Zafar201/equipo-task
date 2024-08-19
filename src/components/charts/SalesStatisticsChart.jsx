import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; // Ensure you import the CSS for styling

const SalesStatisticsChart = ({ statisticsData, loading, error }) => {
  return (
    <div className="w-full overflow-hidden">
      <div className="p-4">
        <div className="h-64">
          {loading ? (
            // Render skeleton loader
            <Skeleton height={300} /> 
          ) : statisticsData ?(
            // Render the chart
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={statisticsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ background: '#333', border: 'none', borderRadius: '4px' }}
                  labelStyle={{ color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#60a5fa" 
                  radius={[4, 4, 0, 0]}
                  maxBarSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          ): (
            <h1>{error}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

SalesStatisticsChart.propTypes = {
  statisticsData: PropTypes.array,
  loading: PropTypes.boolean,
  error: PropTypes.string,
};


export default SalesStatisticsChart;


