export class ModalSettings {
    title?: string = '';
    content?: string = '';
    cancelButtonText?: string = 'Annuller';
    acceptButtonText?: string = 'Gem';
    acceptButtonClass?: string = '';
    //onClose: Function;
    onAccept?: any;

    constructor(options: ModalSettings) {
        if (options.title)
            this.title = options.title;
        if (options.content)
            this.content = options.content;
        if (options.cancelButtonText)
            this.cancelButtonText = options.cancelButtonText;
        if (options.acceptButtonText)
            this.acceptButtonText = options.acceptButtonText;
        if (options.acceptButtonClass)
            this.acceptButtonClass = options.acceptButtonClass;
        if (options.onAccept)
            this.onAccept = options.onAccept;
	}
}