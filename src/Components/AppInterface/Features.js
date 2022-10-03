import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaMobileAlt, FaMoneyCheckAlt, FaRegNewspaper, FaBlogger, FaHandshake, FaHandHoldingWater, FaArrowCircleRight } from 'react-icons/fa';
import { MdMonitor, MdOutlineFeedback } from 'react-icons/md';
import { HiOutlineSpeakerphone, HiFire, HiOutlineLightBulb } from 'react-icons/hi';

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

            <div className='grid grid-cols-4 gap-3 border shadow-md m-1 mt-3 p-2 rounded-md bg-white'>

                <div>
                    <FaMobileAlt className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>Prepaid Mobile Recharge</p>
                </div>
                <div>
                    <MdMonitor className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>DTH Recharge Recharge</p>
                </div>
                <div>
                    <FaMoneyCheckAlt className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>Loans</p>
                </div>
                <div>
                    <HiOutlineSpeakerphone className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>Promotion</p>
                </div>
                <div>
                    <FaRegNewspaper className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>News</p>
                </div>
                <div>
                    <FaBlogger className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>Blogs</p>
                </div>
                <div>
                    <FaHandshake className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>Jobs</p>
                </div>
                <div>
                    <MdOutlineFeedback className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>Anonymous Feedback</p>
                </div>
                <div>
                    <HiFire className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>Gas</p>
                </div>
                <div>
                    <HiOutlineLightBulb className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>Electricity Bill</p>
                </div>
                <div>
                    <FaHandHoldingWater className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>Water</p>
                </div>
                <div>
                    <FaArrowCircleRight className="text-primary text-3xl mx-auto mb-1" />
                    <p className='text-center text-[9px]'>See more</p>
                </div>

            </div>

        </section>
    );
};

export default Features;