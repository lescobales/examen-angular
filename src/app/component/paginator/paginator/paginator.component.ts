import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
	selector: 'app-paginator',
	templateUrl: './paginator.component.html',
	styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {

	@Input() info!: {count: number, pages: number, next: string | null, prev: string | null}
	@Output() pageClick: EventEmitter<number> = new EventEmitter<number>()
	pages!: number[]
	minVisible: number = 5
	maxVisible: number = 30
	ngOnChanges() {
		this.pages = new Array(this.info.pages)
	}

	onPageClick(value: any) {
		if (typeof value === 'number') {
			this.pageClick.emit(value)
		} else if (value === 'next' && this.info.next !== null) {
			let page = this.info.next.split('=')
			let numerous!: string | undefined
			numerous = page.pop()
			if (numerous) {
				this.pageClick.emit(+numerous)
			}
		} else if (value === 'prev' && this.info.prev !== null) {
			let page = this.info.prev.split('=')
			let numerous!: string | undefined
			numerous = page.pop()
			if (numerous) {
				this.pageClick.emit(+numerous)
			}
		}

	}
}
