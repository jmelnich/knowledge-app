import React from 'react';

const Graph = () => {
    const width = 500;
    const height = 500;
    const center = width/2;
    const radius = 180;
    return (
        <div className="user-expertize">
            <svg height={height} width={width}>
                <text x="220" y="40">Non-tech</text>
                <text x="400" y="120">Algorithms</text>
                <text x="450" y="255">Web</text>
                <text x="400" y="395">Mobile</text>
                <text x="180" y="470">Software Engineering</text>
                <text x="15" y="400">Data Science</text>
                <text x="0" y="255">DevOps</text>
                <text x="40" y="120">Security</text>
                <circle cx={center} cy={center} r={radius} stroke="gray" strokeWidth="1" fill="white" />
                <circle cx={center} cy={center} r={radius - 50} stroke="lightgray" strokeWidth="1" fill="white" />
                <circle cx={center} cy={center} r={radius - 100} stroke="lightgray" strokeWidth="1" fill="white" />
                <circle cx={center} cy={center} r={radius - 150} stroke="lightgray" strokeWidth="1" fill="white" />
                <line x1={center} y1={center-radius} x2={center} y2={center} stroke="lightgray" strokeWidth="1"/>
                <line x1={center+radius} y1={center} x2={center} y2={center} stroke="lightgray" strokeWidth="1"/>
                <line x1={center} y1={center+radius} x2={center} y2={center} stroke="lightgray" strokeWidth="1"/>
                <line x1={center-radius} y1={center} x2={center} y2={center} stroke="lightgray" strokeWidth="1"/>
                <line x1={center} y1={center-radius} x2={center} y2={center} stroke="lightgray" strokeWidth="1"  transform={`rotate(45, ${center}, ${center})`}/>
                <line x1={center+radius} y1={center} x2={center} y2={center} stroke="lightgray" strokeWidth="1" transform={`rotate(45, ${center}, ${center})`}/>
                <line x1={center} y1={center+radius} x2={center} y2={center} stroke="lightgray" strokeWidth="1" transform={`rotate(45, ${center}, ${center})`}/>
                <line x1={center-radius} y1={center} x2={center} y2={center} stroke="lightgray" strokeWidth="1" transform={`rotate(45, ${center}, ${center})`}/>
                <path fill="#61B77F" opacity={0.8} d={`M ${center} ${center} C ${center+50} ${center-20} ${center+40} ${center-60} ${center+20} ${center-30} `}
                      stroke="#FFFFFF" strokeWidth="1"></path>
            </svg>
        </div>
    );
}

export default Graph;