import { WarningType } from "models/order/WarningType";

export class Warning {
    type: WarningType;
    typeName: string | null;
    message: string | null;
    active: boolean;
    minReqUnit: string | null;
}