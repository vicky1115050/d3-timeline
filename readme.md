# D3 TimelineChart
[![Build Status](https://travis-ci.org/commodityvectors/d3-timeline.svg?branch=master)](https://travis-ci.org/commodityvectors/d3-timeline)

![Chart example](https://raw.githubusercontent.com/commodityvectors/d3-timeline/master/usage.gif)

## Installing

`npm install d3-timeline-chart --save`

## Example

```javascript
'use strict';
const element = document.getElementById('chart');
const data = [{
    label: 'Name',
    data: [{
        type: TimelineChart.TYPE.POINT,
        at: new Date([2015, 1, 11])
    }, {
        type: TimelineChart.TYPE.POINT,
        at: new Date([2015, 1, 15])
    }, {
        type: TimelineChart.TYPE.POINT,
        at: new Date([2015, 3, 10])
    }, {
        label: 'I\'m a label',
        type: TimelineChart.TYPE.INTERVAL,
        from: new Date([2015, 2, 1]),
        to: new Date([2015, 3, 1])
    }, {
        type: TimelineChart.TYPE.POINT,
        at: new Date([2015, 6, 1])
    }, {
        type: TimelineChart.TYPE.POINT,
        at: new Date([2015, 7, 1])
    }]
}];

const timeline = new TimelineChart(element, data, {
    tip: function(d) {
        return d.at || `${d.from}<br>${d.to}`;
    }
});
```
