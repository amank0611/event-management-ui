export class Venue {
    venueId: number;
    venueName: string;

    constructor(venueId = 0, venueName = '') {
        this.venueId = venueId;
        this.venueName = venueName;
    }
}
export class VenueType {
    venueTypeId: number;
    venueType: string;

    constructor(venueTypeId = 0, venueType = '') {
        this.venueTypeId = venueTypeId;
        this.venueType = venueType;
    }
}