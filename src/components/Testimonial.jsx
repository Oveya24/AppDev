import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    text: "TimeTrek has revolutionized the way we manage our schedules. It's user-friendly and incredibly efficient!",
    author: "John Doe",
    role: "Manager at XYZ Company",
    image: "https://www.hola.com/us/horizon/landscape/40643716691c-valentino-photocall-paris-fashion-week-menswear-fall-winter-2024-2025.jpg"
  },
  {
    text: "The best staff scheduling tool we've ever used. Our productivity has soared!",
    author: "Jane Smith",
    role: "CEO at ABC Corp",
    image: "https://m.media-amazon.com/images/M/MV5BMTUxMzU2MTk1OF5BMl5BanBnXkFtZTgwNzg4NjAwMzI@._V1_FMjpg_UX1000_.jpg"
  },
  {
    text: "A must-have tool for any organization looking to streamline their scheduling process.",
    author: "Michael Brown",
    role: "HR Manager at DEF Ltd.",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201604/vampire-diaries-story_facebook_647_041116014744.jpg?VersionId=cU6Hd2TmvjeUW8.0CYDc10x_ezvjfXmo"
  },
  {
    text: "TimeTrek has saved us countless hours of manual scheduling. Highly recommended!",
    author: "Emily Davis",
    role: "Operations Head at GHI Inc.",
    image: "https://www.shefinds.com/files/2023/02/Gigi-Hadid-1.jpg"
  },
  {
    text: "The intuitive design and powerful features make TimeTrek an essential tool for our team.",
    author: "Chris Wilson",
    role: "Project Manager at JKL Co.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRc6THcCs8DO2vuMvafJiSHPmuiNaqSaJWfn9FPrJ0P9ZMNcqzG0ARK_1sd7QSsljR7U&usqp=CAU"
  },
];

const TestimonialComponent = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="testimonial-wrapper">
      <button className="prev-button" onClick={handlePrev}>◀</button>
      <button className="next-button" onClick={handleNext}>▶</button>
      <div className="testimonial-card">
        <div className="testimonial-content">
          <p className="testimonial-text">
            "{testimonials[currentTestimonial].text}"
          </p>
          <div className="testimonial-author">
            <img src={testimonials[currentTestimonial].image} alt="Author" className="author-image" />
            <div className="author-details">
              <h3 className="author-name">{testimonials[currentTestimonial].author}</h3>
              <p className="author-role">{testimonials[currentTestimonial].role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
