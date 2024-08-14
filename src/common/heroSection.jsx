import React, { useEffect } from 'react';
import $ from 'jquery';
function HeroSection() {
  useEffect(() => {
    
    // var hero_s = $(".hero__slider");
    // window.$ = window.jQuery = require('jquery');
 

    // hero_s.owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     items: 1,
    //     dots: true,
    //     nav: true,
    //     navText: ["<span class='arrow_carrot-left'></span>", "<span class='arrow_carrot-right'></span>"],
    //     animateOut: 'fadeOut',
    //     animateIn: 'fadeIn',
    //     smartSpeed: 1200,
    //     autoHeight: false,
    //     autoplay: true,
    //     mouseDrag: false
    // });
  }, [])
	return (
      <>
		    <section className="hero">
          <div className="container">
            <div className="hero__slider owl-carousel">
              <div className="hero__items set-bg" style={{backgroundImage: `url(${"theme/img/hero/hero-1.jpg"})`}}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="hero__text">
                      <div className="label">Adventure</div>
                      <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                      <p>After 30 days of travel across the world...</p>
                      <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__items set-bg" style={{backgroundImage: `url(${"theme/img/hero/hero-1.jpg"})`}}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="hero__text">
                      <div className="label">Adventure</div>
                      <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                      <p>After 30 days of travel across the world...</p>
                      <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero__items set-bg" style={{backgroundImage: `url(${"theme/img/hero/hero-1.jpg"})`}}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="hero__text">
                      <div className="label">Adventure</div>
                      <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                      <p>After 30 days of travel across the world...</p>
                      <a href="#"><span>Watch Now</span> <i className="fa fa-angle-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
		)
}

export default HeroSection