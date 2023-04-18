export class Event {
    eventId: number;
    eventName: string;
    eventDescription: string;
    venueId: number;
    venueName: string;
    eventTypeId: number;
    startDate: any;
    endDate: any;
    userId: number;
    createdOn: any;
    organiserId: number;
    eventStatus: any;
    isActive: boolean;
    isDeleted: boolean;
    responseMessage: string

    constructor(eventId = 0, eventName = '', eventDescription = '', venueId = 0, venueName ='', eventTypeId = 0, startDate = '', endDate = '', userId = 0, createdOn = '', organiserId = 0, eventStatus = '', isActive = false, isDeleted = false, responseMessage = '') {
        this.eventId = eventId;
        this.eventName = eventName;
        this.eventDescription = eventDescription;
        this.venueId = venueId;
        this.venueName = venueName,
        this.eventTypeId = eventTypeId
        this.startDate = startDate
        this.endDate = endDate
        this.userId = userId
        this.createdOn = createdOn
        this.organiserId = organiserId
        this.eventStatus = eventStatus
        this.isActive = isActive
        this.isDeleted = isDeleted
        this.responseMessage = responseMessage
    }
}

export class EventType {
    id: any;
    eventType: any;
    constructor(eventTypeId = 0, eventType = '') {
        this.id = eventTypeId;
        this.eventType = eventType;
    }
}

export enum EventStatus {
    pending = 0,
    approved = 1,
    cancelled = 2,

}