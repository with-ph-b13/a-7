import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../../context/FriendsProvider';
const Stats = () => {
    
    const {call}=useContext(FriendsContext);
    const callData=call.filter(callInfo=>callInfo.type === "Call");
    const textData=call.filter(textInfo=>textInfo.type === "Text");
    const videoData=call.filter(videoInfo=>videoInfo.type === "Video");

    const data = [
  { name: 'Calls', value: callData.length, fill: '#0088FE' },
  { name: 'Text', value: textData.length, fill: '#00C49F' },
  { name: 'Video', value: videoData.length, fill: '#FFBB28' },
  
];
    

    return (
        <div className='container mx-auto'>
            <h1 className='font-bold text-5xl mt-5'>Friendship Analytics</h1>

            <div className="flex flex-col justify-center items-center mt-15">
                 <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
        
      />
    <Tooltip />
    </PieChart>
            </div>
        </div>
    );
};

export default Stats;
