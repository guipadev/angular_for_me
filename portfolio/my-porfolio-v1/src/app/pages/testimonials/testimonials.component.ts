import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})


export class TestimonialComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const swiper = new Swiper('.testimonial__container', {
      // cssMode: true,
      loop: true,
      grabCursor: true,
      spaceBetween: 48,
      // mousewheel: true,
      // keyboard: true,
      // slidesPerView: 1,
      // spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        568: {
          slidesPerView: 2,
        },
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
    });
  }
}

