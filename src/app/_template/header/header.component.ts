import { Component, Input, ViewChild, ElementRef, AfterViewInit, Renderer2, OnInit } from '@angular/core';
import { HoverEmitter, NavigationBarItem } from './nav-bar/nav-bar.component'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements AfterViewInit, OnInit {

    @Input() title: string | undefined;

    navBarHoverItem: NavigationBarItem | null = null;

    @ViewChild('headerTitleContainer') titleContainer: ElementRef | undefined;

    constructor(private renderer: Renderer2) {}

    ngOnInit(): void {
        if (this.title == null) {
            throw new Error('No title given.');
        }
    }

    ngAfterViewInit(): void {
        this.setHeaderSheetTimeout();
    }

    handleHoverEmitter(hoverEmitter: HoverEmitter): void {
        if (hoverEmitter.start) {
            this.navBarHoverItem = hoverEmitter.item;
        } else if (this.navBarHoverItem?.id == hoverEmitter.item.id) {
            this.navBarHoverItem = null;
        }
    }

    setHeaderSheetTimeout(): void {
        this.renderer.addClass(this.titleContainer?.nativeElement, "after-load");
        setTimeout(() => {
            this.renderer.removeClass(this.titleContainer?.nativeElement, "after-load");
        }, 10000);
    }
}
