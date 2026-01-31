import CourseCard from "../../Small Component/CourseCard";

function Courses() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-10 py-16">
      <h1 className="text-5xl font-semibold opacity-85 mb-12 text-center max-lg:mt-15">
        Browse Our Courses
      </h1>

      <div className="flex gap-5 max-lg:flex-col">
        <CourseCard
          img="UI.png"
          title="Designing"
          text="Advanced UI/UX Design"
          mainText="This course builds upon your basic understanding of UI/UX principles, allowing you to further develop your skills and knowledge in UI/UX design."
        />

        <CourseCard
          img="FrontEnd.png"
          title="Front-End Development"
          text="React for Beginners- Building Interactive Applications"
          mainText="Get started with React and learn to build interactive web applications from scratch in this beginner-friendly course"
        />

        <CourseCard
          img="Developer.png"
          title="Game Development"
          text="Game Development Course"
          mainText="Game development is the art and science of creating interactive digital experiences that entertain, challenge, and inspire players."
        />

        <CourseCard
          img="https://i0.wp.com/umt.edu.al/wp-content/uploads/2024/01/3d6541e2-11c7-44a2-a5cc-bbda9b21e065.jpg?fit=720%2C527&ssl=1"
          title="Robotech"
          text="Robotech Course"
          mainText="Robotech typically refers to one programm: the languages used in the robotics industry, programs offered by companies."
        />
      </div>
    </section>
  );
}

export default Courses;
