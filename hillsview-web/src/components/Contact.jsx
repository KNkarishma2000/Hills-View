import React, { useState, useEffect } from 'react';
import { Phone, ShieldCheck } from 'lucide-react';

function Contact() {
  // --- CAPTCHA LOGIC START ---
  const [captcha, setCaptcha] = useState({ question: '', answer: null });
  const [userAnswer, setUserAnswer] = useState('');

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({
      question: `What is ${num1} + ${num2}?`,
      answer: num1 + num2
    });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) === captcha.answer) {
      alert("Verification successful! Form submitted.");
      // Add your form submission logic here
    } else {
      alert("Incorrect security answer. Please try again.");
      generateCaptcha();
      setUserAnswer('');
    }
  };
  // --- CAPTCHA LOGIC END ---

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-luxury-teal relative overflow-hidden"
    >
      {/* Background effects */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 parallax-bg"
        data-speed="0.1"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-luxury-gold rounded-full mix-blend-multiply blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-luxury-cream rounded-full mix-blend-overlay blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="space-y-8 md:space-y-10 text-white reveal-up">
            <div>
              <span className="text-luxury-gold font-bold uppercase tracking-widest text-xs">
                Get in Touch
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4 md:mb-6">
                Begin the Conversation
              </h2>
              <p className="text-[#8DA399] text-base md:text-lg leading-relaxed max-w-md">
                We invite you to connect with us to learn more about Hillsview, our care
                philosophy, and upcoming plans. Our team is happy to answer your questions
                and share updates as the facility is being set up.
              </p>
            </div>

            <div className="flex items-start gap-4 md:gap-6">
              <div className="p-3 md:p-4 bg-white/10 rounded-full text-luxury-gold shrink-0">
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-1">Call Us</h4>
                <p className="text-gray-300 text-sm md:text-base">9845342447</p>
                <p className="text-gray-400 text-xs md:text-sm">Mon-Sat, 9am - 6pm</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (FORM) */}
          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl reveal-up w-full max-w-xl mx-auto">
            <h3 className="font-serif text-2xl md:text-3xl text-[#2c5f58] mb-6 md:mb-8">
              The &quot;Reach Us&quot; Approach
            </h3>

            <form className="space-y-6" id="booking-form" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-luxury-sub uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-luxury-cream border-b-2 border-luxury-sand p-3 focus:outline-none focus:border-luxury-teal transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-luxury-sub uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-luxury-cream border-b-2 border-luxury-sand p-3 focus:outline-none focus:border-luxury-teal transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-luxury-sub uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  className="w-full bg-luxury-cream border-b-2 border-luxury-sand p-3 focus:outline-none focus:border-luxury-teal transition-colors"
                  placeholder="+91 90000 00000"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-luxury-sub uppercase tracking-wider">
                  Interest
                </label>
                <select className="w-full bg-luxury-cream border-b-2 border-luxury-sand p-3 focus:outline-none focus:border-luxury-teal transition-colors text-luxury-text">
                  <option>Assisted Living</option>
                  <option>Memory Care</option>
                  <option>Respite Care</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2 pt-2">
                <label className="text-sm font-bold text-luxury-sub uppercase tracking-wider flex items-center gap-2">
                  Security Question
                  <ShieldCheck className="w-4 h-4 text-luxury-gold" />
                </label>
                <div className="bg-luxury-cream/50 p-4 rounded-xl border border-luxury-sand">
                  <p className="font-serif text-lg text-luxury-teal italic mb-3">
                    {captcha.question || "Loading question..."}
                  </p>
                  <input
                    required
                    type="number"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    className="w-full bg-white border-b-2 border-luxury-sand p-3 focus:outline-none focus:border-luxury-teal transition-colors"
                    placeholder="Type your answer here"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-luxury-teal text-white font-bold rounded-full shadow-lg hover:bg-luxury-gold transition-all transform hover:-translate-y-1"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;