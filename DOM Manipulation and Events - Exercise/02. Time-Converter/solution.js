function attachEventsListeners() {
const daysBtnReff=document.getElementById('daysBtn');
const hoursBtnReff=document.getElementById('hoursBtn');
const minutesBtnReff= document.getElementById('minutesBtn');
const secondsBtnReff= document.getElementById('secondsBtn');

const  inputDaysReff=document.getElementById('days');
const inputHoursReff=document.getElementById('hours');
const  inputMinutesReff=document.getElementById('minutes');
const inputSecondsReff=document.getElementById('seconds');
let timeObj={};
 daysBtnReff.addEventListener('click', function () {
    let inputDaysValue=inputDaysReff.value;
    timeObj=convertTime(inputDaysValue, 'days');
    returnNewValueToInput(timeObj);
 })
 hoursBtnReff.addEventListener('click', function () {
    let inputHoursValue=inputHoursReff.value;
    timeObj=convertTime(inputHoursValue, 'hours');
    returnNewValueToInput(timeObj);
 })
minutesBtnReff.addEventListener('click',function(){
    let inputMinutesValue=inputMinutesReff.value;
    timeObj=convertTime(inputMinutesValue, 'minutes')
    returnNewValueToInput(timeObj);
})
secondsBtnReff.addEventListener('click',function(){
    let inputSecondsValue=inputSecondsReff.value;
    timeObj=convertTime(inputSecondsValue, 'seconds')
    returnNewValueToInput(timeObj);
})

function returnNewValueToInput (timeObj){
    inputDaysReff.value=timeObj.days;
    inputHoursReff.value=timeObj.hours;
    inputMinutesReff.value=timeObj.minutes;
    inputSecondsReff.value=timeObj.seconds;
}
function convertTime(value, unit) {
    const secondsInMinute = 60;
    const secondsInHour = 60 * secondsInMinute;
    const secondsInDay = 24 * secondsInHour;

    switch (unit) {
    
        case 'seconds':
            return {
                seconds: value,
                minutes: value / secondsInMinute,
                hours: value / secondsInHour,
                days: value / secondsInDay
            };
 
        case 'minutes':
            return {
                seconds: value * secondsInMinute,
                minutes: value,
                hours: value / 60,
                days: value / (60 * 24)
            };
        case 'hours':
            return {
                seconds: value * secondsInHour,
                minutes: value * 60,
                hours: value,
                days: value / 24
            };
        case 'days':
            return {
                seconds: value * secondsInDay,
                minutes: value * 60 * 24,
                hours: value * 24,
                days: value
            };
        default:
            return null;
    }
}
}