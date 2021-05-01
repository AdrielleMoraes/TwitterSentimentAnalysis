import '../../../node_modules/react-vis/dist/style.css';


import React, { Component } from 'react';

import {XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, LabelSeries,
  FlexibleWidthXYPlot,  DiscreteColorLegend } from 'react-vis';


class App extends Component {
  
  render() {
    const data = [
      {x: 'Positive', y: 10},
      {x: 'Negative', y: 5},
      {x: 'Neutral', y: 15}
    ];
    const data2 = [
      {x: 'Positive', y: 3},
      {x: 'Negative', y: 25},
      {x: 'Neutral', y: 8}
    ];
    const labelData = data.map((d, idx) => ({
      x: d.x,
      y: Math.max(data[idx].y, data2[idx].y)
    }));
    return (
      <div className="App">
        <FlexibleWidthXYPlot xType="ordinal" height={500} >
        <DiscreteColorLegend
            style={{position: 'absolute', left: '50px', top: '20px'}}
            orientation="horizontal"
            items={[
              {
                title: 'Vader',
                color: '#12939A'
              },
              {
                title: 'BOW',
                color: '#79C7E3'
              }
            ]}
          />
        <XAxis />
        <YAxis />
        <VerticalBarSeries  data={data} />
        <VerticalBarSeries  data={data2} />
        <VerticalGridLines />
        <HorizontalGridLines />
        </FlexibleWidthXYPlot>
        <LabelSeries data={labelData} />
      </div>
    );
  }
}

export default App;