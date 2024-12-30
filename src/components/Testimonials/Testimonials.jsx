import { Swiper, SwiperSlide } from 'swiper/react'; // Correct import for React
import 'swiper/swiper-bundle.css'; // Correct CSS import
import { Pagination, A11y, Autoplay } from 'swiper/modules'; // Import required modules
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      name: "Saul Goodman",
      role: "Ceo & Founder",
      image: "assets/img/testimonials/testimonials-1.jpg",
    },
    {
      id: 2,
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      name: "Sara Wilsson",
      role: "Designer",
      image: "assets/img/testimonials/testimonials-2.jpg",
    },
    {
      id: 3,
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      name: "Jena Karlis",
      role: "Store Owner",
      image: "assets/img/testimonials/testimonials-3.jpg",
    },
    {
      id: 4,
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      name: "Matt Brandon",
      role: "Freelancer",
      image: "assets/img/testimonials/testimonials-4.jpg",
    },
    {
      id: 5,
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      name: "John Larson",
      role: "Entrepreneur",
      image: "assets/img/testimonials/testimonials-5.jpg",
    },
  ];

  return (
    <section id="testimonials" className="testimonial py-12">
      <div className="container z-10 mx-auto px-4">
        {/* Section Title */}
        <div className="section-title  mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Testimonials</h2>
          <p className="text-lg text-gray-500">What they're saying about us</p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, A11y, Autoplay]} // Include required modules
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          pagination={{ clickable: true }}
          className="testimonials-slider"
          breakpoints={{
            // Mobile view
            320: {
              slidesPerView: 1, // 1 slide per view on mobile
            },
            // Tablet view
            768: {
              slidesPerView: 2, // 2 slides per view on tablet
            },
            // Laptop view
            1024: {
              slidesPerView: 3, // 3 slides per view on laptop
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="swiper-slide">
              <div className="testimonial-item text-center bg-white shadow-md p-8 rounded-lg">
                <p className="text-gray-500 italic mb-4">
                  <i className="bx bxs-quote-alt-left text-[#cda45e] text-2xl"></i>
                  {testimonial.text}
                  <i className="bx bxs-quote-alt-right text-[#cda45e] text-2xl"></i>
                </p>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-img w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <h4 className="text-sm font-medium text-gray-500">
                  {testimonial.role}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
