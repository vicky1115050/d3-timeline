describe('TimelineChart', () => {
    'use strict';

    const WRAPPER_CLASS = 'chart-wrapper';

    it('should append a SVG element to given selection', () => {
        const div = getDefaultSizeContainer();
        const data = [{
            label: 'foo',
            data: []
        }];

        const chart = new TimelineChart(div, data);
        expect(div.querySelectorAll('svg').length).toBe(1);
    });

    describe('custom class', () => {
        describe('point element', () => {
            it('should add to the circle element', () => {
                const div = getDefaultSizeContainer();
                const data = [{
                    label: 'Group 1',
                    data: [{
                        at: new Date([2015, 1, 1]),
                        type: TimelineChart.TYPE.POINT,
                        customClass: 'custom-class'
                    }]
                }];

                const chart = new TimelineChart(div, data);
                expect(div.querySelectorAll('circle.custom-class').length).toBe(1);
            });
        });

        describe('interval element', () => {
            it('should add class to rect and to text', () => {
                const div = getDefaultSizeContainer();
                const data = [{
                    label: 'Group 1',
                    data: [{
                        from: new Date([2015, 1, 1]),
                        to: new Date([2015, 1, 2]),
                        type: TimelineChart.TYPE.INTERVAL,
                        customClass: 'custom-class-interval',
                        label: 'Test'
                    }]
                }];

                const chart = new TimelineChart(div, data);
                expect(div.querySelectorAll('rect.custom-class-interval').length).toBe(1);
                expect(div.querySelectorAll('text.custom-class-interval').length).toBe(1);
            })
        });
    });

    function getDefaultSizeContainer() {
        const div = document.createElement('div');
        div.setAttribute('class', WRAPPER_CLASS);
        div.setAttribute('style','width:800px; height: 200px;');
        return div;
    }
});
