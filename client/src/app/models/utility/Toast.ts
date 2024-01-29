import { ToastType } from './ToastType';

export class Toast {
	id: string;
	content: string;
	type: ToastType;
	duration: number;
	active: boolean;

	constructor(id: string, content: string, type: ToastType, duration: number) {
		this.id = id;
		this.content = content;
		this.type = type;
		this.duration = duration;
		this.active = false;
	}
}