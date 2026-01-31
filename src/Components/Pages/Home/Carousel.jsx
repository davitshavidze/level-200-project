import { useState } from "react";
import ReviewCard from "../../Small Component/ReviewCard";

const reviews = [
  {
    name: "Sandro Jojua",
    role: "Front-End Developer",
    text: "I couldn't be happier with my decision to enroll at GOA Academy. The instructors are knowledgeable and passionate about their subjects. The interactive learning environment has helped me grow both academically and personally.",
    avatar: "./joju.jpg",
  },
  {
    name: "Cotne Gagnidze",
    role: "UI/UX Designer",
    text: "I couldn't be happier with my decision to enroll at GOA Academy. The instructors are knowledgeable and passionate about their subjects.",
    avatar: "./cotne.jpg",
  },
  {
    name: "Andria Kobakhidze",
    role: "App & CEO Developer",
    text: "I couldn't be happier with my decision to enroll at GOA Academy. The instructors are knowledgeable and passionate about their subjects. The interactive learning environment has helped me grow both academically and personally.",
    avatar: "./koba.jpg",
  },
  {
    name: "Shio Labadze",
    role: "Junior Front-End Developer",
    text: "I couldn't be happier with my decision to enroll at GOA Academy. The instructors are knowledgeable and passionate about their subjects.",
    avatar: "./shio.jpg",
  },
  {
    name: "Aleksandre Dzukaevi",
    role: "Full-Stack Developer",
    text: "I couldn't be happier with my decision to enroll at GOA Academy. The instructors are knowledgeable and passionate about their subjects. The interactive learning environment has helped me grow both academically and personally.",
    avatar: "dzuka.jpg",
  },
  {
    name: "Demetre Khosroshvili",
    role: "Data scientist",
    text: "I couldn't be happier with my decision to enroll at GOA Academy. The instructors are knowledgeable and passionate about their subjects. The interactive learning environment has helped me grow both academically and personally.",
    avatar: "./khosro.jpg",
  },
  {
    name: "Nikoloz Qusikashvili",
    role: "Mentor Assistant",
    text: "I couldn't be happier with my decision to enroll at GOA Academy. The instructors are knowledgeable and passionate about their subjects. The interactive learning environment has helped me grow both academically and personally.",
    avatar: "./quso.jpg",
  },
  {
    name: "Ganabi Qababi",
    role: "OG Mini-Leader",
    text: "I couldn't be happier with my decision to enroll at GOA Academy. The instructors are knowledgeable and passionate about their subjects. The interactive learning environment has helped me grow both academically and personally.",
    avatar: "ganabi.jpg",
  },
];

function Carousel() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const next = () => {
    setFade(true);
    setTimeout(() => {
      if (index === reviews.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      setFade(false);
    }, 200);
  };

  const prev = () => {
    setFade(true);
    setTimeout(() => {
      if (index === 0) {
        setIndex(reviews.length - 1);
      } else {
        setIndex(index - 1);
      }
      setFade(false);
    }, 200);
  };

  return (
    <section className="py-20 bg-white flex justify-center px-4 gap-5 max-lg:flex-col max-lg:justify-center max-lg:items-center">
      <div className="w-full sm:max-w-2xl">
        <h2 className="text-4xl font-semibold mb-6">
          Hear from Our Students About{" "}
          <b className="text-green-600 ">
            Their <br /> Experience with Us.
          </b>
        </h2>
        <div
          className={`transition-all duration-300 ${
            fade ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          <ReviewCard review={reviews[index]} />
        </div>

        <div className="flex justify-between mt-4 px-6">
          <button
            onClick={prev}
            className="text-2xl text-gray-400 hover:text-green-600 transition-all duration-300 cursor-pointer"
          >
            {"<-"}
          </button>

          <button
            onClick={next}
            className="text-2xl text-gray-400 hover:text-green-600 transition-all duration-300 cursor-pointer"
          >
            {"->"}
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {reviews.map((item, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === index ? "bg-green-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 text-xl max-w-[50%] font-semibold max-lg:max-w-[90%]">
        <p>
          Programming Academy GOA is a place where learning turns into real
          skill and ambition turns into results. It is not just about writing
          code, but about developing the mindset of a programmer, learning how
          to think logically, solve problems, and build real projects from
          scratch.
        </p>

        <p>
          At GOA, students grow step by step, starting from the basics and
          moving toward advanced concepts through constant practice and
          discipline. The focus is on real understanding, not memorization, and
          on building confidence through hands-on experience.{" "}
        </p>

        <p>
          The academy creates an environment where hard work, responsibility,
          and consistency are valued.{" "}
        </p>

        <p>
          Students learn modern programming languages, web technologies, and
          problem-solving techniques that prepare them for real challenges in
          the tech world.
        </p>

        <p>
          Programming Academy GOA is for those who want more than average
          results, who are ready to invest effort into their future, and who
          want to create, build, and innovate through programming.
        </p>
      </div>
    </section>
  );
}

export default Carousel;
