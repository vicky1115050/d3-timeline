(() => {
    'use strict';
    jest.dontMock('../dist/timeline-chart.js');

    let d3;

    beforeEach(() => {
        d3 = require('d3');
        require('d3-tip')(d3);
    });

    describe('TimlineChart', function() {

    });
})();
