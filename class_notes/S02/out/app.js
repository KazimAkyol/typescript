class LMSCalender {
    constructor(events) {
        this.events = events;
    }
    addEvents(event) {
        this.events.push(event);
    }
}
const de10 = new LMSCalender(["HTML", "React", "Typescript"]);
const de11 = new LMSCalender(["HTML", "React"]);
