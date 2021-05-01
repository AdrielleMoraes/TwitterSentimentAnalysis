import '../../../node_modules/react-vis/dist/style.css';


import React, { Component } from 'react';

import {VerticalGridLines, HorizontalGridLines, XAxis, YAxis, VerticalBarSeries, LabelSeries,
  FlexibleWidthXYPlot,  DiscreteColorLegend } from 'react-vis';


class App extends Component{
  render() {
    let vader_count = [0,0,0]
    let bow_count = [0,0,0]

    this.props.data.tweets.map(tweet =>{
      console.log(tweet.vader) 
      if (tweet.vader === 'Positive'){
        vader_count[0]++
      }
      if (tweet.vader === 'Neutral'){
        vader_count[1]++
      }
      if (tweet.vader === 'Negative'){
        vader_count[2]++
      }

      if (tweet.bow === 'Positive'){
        bow_count[0]++
      }
      if (tweet.bow === 'Neutral'){
        bow_count[1]++
      }
      if (tweet.bow === 'Negative'){
        bow_count[2]++
      }
    })


    const data = [
      {x: 'Positive', y: vader_count[0]},
      {x: 'Neutral', y: vader_count[1]},
      {x: 'Negative', y: vader_count[2]}
    ];
    const data2 = [
      {x: 'Positive', y: bow_count[0]},
      {x: 'Neutral', y: bow_count[1]},
      {x: 'Negative', y: bow_count[2]}
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