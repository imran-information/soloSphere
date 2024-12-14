import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import sliderImg1 from '../../assets/slider-img/slider-1.jpg'
import sliderImg2 from '../../assets/slider-img/slider-2.jpg'
import sliderImg3 from '../../assets/slider-img/slider-3.jpg'
import sliderImg4 from '../../assets/slider-img/slider-4.jpg'


const HomeSlider = () => {
    const slides = [
        { title: 'Efficiently innovate pandemic convergence whereas just in time intellectual capital.', description: 'Credibly administrate value-added supply chains without worldwide sources. Phosfluorescently productize market-driven ideas with principle-centered systems. Distinctively redefine cross functional niche markets vis-a-vis end-to-end systems. Monotonectally procrastinate.', image: sliderImg1, button: 'explore now' },
        { title: 'Rapidiously empower team.', description: 'Credibly administrate value-added supply chains without worldwide sources. Phosfluorescently productize market-driven ideas with principle-centered systems. Distinctively redefine cross functional niche markets vis-a-vis end-to-end systems. Monotonectally procrastinate.', image: sliderImg2, button: 'explore now' },
        { title: 'Continually actualize resource sucking leadership skills for dynamic.', description: 'Credibly administrate value-added supply chains without worldwide sources. Phosfluorescently productize market-driven ideas with principle-centered systems. Distinctively redefine cross functional niche markets vis-a-vis end-to-end systems. Monotonectally procrastinate.', image: sliderImg3, button: 'explore now' },
        { title: 'Interactively deliver exceptional mindshare before ethical.', description: 'Credibly administrate value-added supply chains without worldwide sources. Phosfluorescently productize market-driven ideas with principle-centered systems. Distinctively redefine cross functional niche markets vis-a-vis end-to-end systems. Monotonectally procrastinate.', image: sliderImg4, button: 'explore now' },
    ];

    return (
        <div className=''>
            <Slider autoplay={3000}>
                {slides.map((item, index) => (
                    <div className='border-2 border-green-600' key={index} style={{ background: `url('${item.image}') no-repeat center center` }}>
                        <div className="flex flex-col items-center justify-center center my-auto  text-gray-800 py-32">
                            <h1 className='text-4xl font-semibold'>{item.title}</h1>
                            <p className='text-base px-72 text-center'>{item.description}</p>
                            <button className='btn btn-neutral'>{item.button}</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeSlider;