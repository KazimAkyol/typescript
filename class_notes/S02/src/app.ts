









//& Interfaces

interface Calender {
    events: string[]
    addEvents(event: string):void
}

class LMSCalender implements Calender {
    constructor(public events:string[]){

        addEvent(event: string): void{
            
        }
    }
}