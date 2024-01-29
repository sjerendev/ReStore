export class ApprovalItem {
    id: number;
    name: string;
    description: string;
    version: number;
    versionDate: Date;
    typeId: number;
    //type
    active: boolean;
    passiveApproval: boolean;

    //helpers
    expanded = false;

    constructor(){
        this.id = null;
        this.name = null;
        this.description = null;
        this.version = null;
        this.versionDate = null;
        this.typeId = null;
        //this.type
        this.active = null;
        this.passiveApproval = null;
    }

    static fromApi(approvalItem: ApprovalItem) {
        return Object.assign(new ApprovalItem(), approvalItem);
    }
}