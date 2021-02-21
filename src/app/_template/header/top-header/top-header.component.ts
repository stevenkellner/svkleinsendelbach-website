import { AfterViewInit, Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { NavigationBarItem } from 'src/app/services/nav-bar-decoder.service';
import { DeviceTypeListener } from '../header.component';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.sass']
})
export class TopHeaderComponent implements AfterViewInit {

    @Input() title: string | undefined;

    @Input() expandedNavBarItem: NavigationBarItem | null = null;

    deviceTypeListener: DeviceTypeListener;

    @ViewChild('titleContainer') titleContainer: ElementRef | undefined;

    constructor(private renderer: Renderer2) {
        this.deviceTypeListener = new DeviceTypeListener(window, () => {});
    }

    ngAfterViewInit(): void {
        this.setHeaderSheetTimeout();
    }

    @HostListener('window:resize', ['$event'])
    windowChanged(event: any): void {
        this.deviceTypeListener.windowChanged(window);
    }

    setHeaderSheetTimeout(): void {
        this.renderer.addClass(this.titleContainer?.nativeElement, 'after-load');
        setTimeout(() => {
            this.renderer.removeClass(this.titleContainer?.nativeElement, 'after-load');
        }, 10000);
    }
}
