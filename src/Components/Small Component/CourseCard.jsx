function CourseCard({img, title, text, mainText}) {
  return (
    <div>

      <div className="rounded-2xl flex flex-col gap-4 w-90 h-120 bg-white p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">

        <img
          src={img}
          alt="photo"
          className="w-full h-52 object-cover rounded-2xl"
        />

        <div className="border border- text-amber-500 bg-amber-100 rounded-full h-8 w-fit px-4 text-sm flex justify-center items-center font-semibold">
          {title}
        </div>

        <h2 className="text-2xl font-semibold leading-snug">
         {text}
        </h2>

        <p className="text-base font-medium opacity-80 leading-relaxed">
          {mainText}
        </p>

        <div className="flex gap-5 text-sm text-gray-600 pt-2">
          <span className="flex items-center gap-1">2 years</span>
          <span className="flex items-center gap-1">2 Hour Session</span>
          <span className="flex items-center gap-1">300 Lessons</span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
