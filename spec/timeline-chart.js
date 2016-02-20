describe('TimelineChart', () => {
    'use strict';

    it('should append a SVG element to given selection', () => {
        const div = document.createElement('div');
        const data = [{
            label: 'foo',
            data: []
        }];

        const chart = new TimelineChart(div, data);
        expect(div.querySelectorAll('svg').length).toBe(1);
    });
});
