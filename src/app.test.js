const { dayOfTheWeek } = require('./app');

test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('1/7/2020') );
    expect( day ).toBe('Wednesday');
});
