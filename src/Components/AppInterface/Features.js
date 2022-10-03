import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Features = () => {
    return (
        <section>

            <Carousel
                additionalTransfrom={0}
                autoPlay
                arrows={false}
                autoPlaySpeed={2000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <img
                    src="https://placehold.jp/300x150.png" alt=''
                    style={{
                        display: 'block',
                        height: '100%',
                        margin: 'auto',
                        width: '100%'
                    }}
                />
                <img
                    src="https://placehold.jp/300x150.png" alt=''
                    style={{
                        display: 'block',
                        height: '100%',
                        margin: 'auto',
                        width: '100%'
                    }}
                />
                <img
                    src="https://placehold.jp/300x150.png" alt=''
                    style={{
                        display: 'block',
                        height: '100%',
                        margin: 'auto',
                        width: '100%'
                    }}
                />
                <img
                    src="https://placehold.jp/300x150.png" alt=''
                    style={{
                        display: 'block',
                        height: '100%',
                        margin: 'auto',
                        width: '100%'
                    }}
                />

            </Carousel>

        </section>
    );
};

export default Features;