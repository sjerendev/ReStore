export enum CampaignPlanningLineStatus {
    NewLine = 0,
    Waiting,
    WaitingPrice,
    Rejected,
    Approved,
    Booked
}

export enum CampaignPlanningLineWaitingForStatus {
    WaitingForVendor = 0,
    WaitingForSvenskCater,
    WaitingForNoOne,
}