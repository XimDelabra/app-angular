import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';

  @ViewChild('hero', { static: true }) hero!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    if (!this.hero) return;
    const el = this.hero.nativeElement as HTMLElement;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    // rotate strengths
    const ry = (relX / rect.width) * 12; // rotateY
    const rx = (relY / rect.height) * -12; // rotateX

    // apply transform for 3D parallax
    this.renderer.setStyle(el, 'transform', `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`);

    // update shimmer position as CSS variables (percent)
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    this.renderer.setStyle(el, '--shine-x', px + '%');
    this.renderer.setStyle(el, '--shine-y', py + '%');
  }

  @HostListener('document:mouseleave', ['$event'])
  @HostListener('document:mouseout', ['$event'])
  onMouseLeave() {
    if (!this.hero) return;
    const el = this.hero.nativeElement as HTMLElement;
    this.renderer.setStyle(el, 'transform', `perspective(900px) rotateX(0deg) rotateY(0deg)`);
  }
}
