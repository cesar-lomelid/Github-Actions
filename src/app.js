const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}

try {
    document.getElementById('day').innerText = dayOfTheWeek();


    
} catch(err) {}

exports.dayOfTheWeek = dayOfTheWeek;
