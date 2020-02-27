//can test this seperately with jest later
//receives strings then converts and returns duration in string form.
import moment from 'moment';

export default function CalculateTime(startString, endString) {
    const startMoment = moment(startString, "HH:mm");
    const endMoment = moment(endString, "HH:mm");
    const duration = moment.duration(endMoment.diff(startMoment));
    return duration.asHours();
}