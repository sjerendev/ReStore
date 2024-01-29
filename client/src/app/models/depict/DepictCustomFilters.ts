export class DepictCustomFilter {
  filterId: string;
  icon: string;
  displayText: string;
  printerFunction?: Function;
  
  constructor(filterId: string, icon: string, displayText: string, printFunction?: Function) {
    this.filterId = filterId;
    this.icon = icon;
    this.displayText = displayText;
    this.printerFunction = printFunction;
  }
}
