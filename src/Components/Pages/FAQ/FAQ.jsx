function FAQ() {
  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center flex-col gap-10 p-5">
        <h1 className="text-5xl font-semibold mt-25">
          FAQ! Questions? Fast Answers!
        </h1>
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-3xl">
            I’ve never coded before. Can I really learn this?
          </h2>
          <p className="text-2xl opacity-80">
            Absolutely. Most of our students come from non-technical
            backgrounds—retail, healthcare, or even the arts. Our curriculum
            starts with the <br /> fundamentals of logic and problem-solving
            before moving into syntax. If you can think logically, you can learn
            to code.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl">
            What is the difference between Front-End, Back-End, and Full-Stack?
          </h2>
          <p className="leading-8 text-2xl opacity-80">
            Front-End: The dining room—everything the customer sees and
            interacts with (layout, buttons, colors). <br />
            Back-End: The kitchen—the behind-the-scenes logic, databases, and
            servers that make the meal happen. <br />
            Full-Stack: Being a chef who can also design the dining room. You
            handle both sides of the application.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl">What programming languages will I learn?</h2>
          <p className="leading-8 text-2xl opacity-80">
            We focus on industry-standard stacks that are in high demand.
            Depending on your track, you’ll master: <br />
            Web Development: HTML5, CSS3, JavaScript (React, Node.js). <br />
            Data Science: Python, SQL, and R. <br />
            Software Engineering: Java or C# and cloud infrastructure.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl">Will you help me find a job?</h2>

          <p className="leading-8 text-2xl opacity-80">
            Our Career Services team is with you from Day 1. We provide:
            Resumeand LinkedIn optimization. <br />
            Mock technical interviews. <br />
            Direct introductions to our network of hiring partners. <br />A
            "Portfolio Review" to ensure your projects stand out to recruiters.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl">Are there any prerequisites?</h2>

          <p className="leading-8 text-2xl opacity-80">
            No formal degree is required. However, we do require a Technical
            Readiness Assessment—a <br /> simple logic and basic HTML quiz—to
            ensure you’re ready for the pace of the course. We believe education
            should be accessible. <br /> We offer: Upfront payment discounts. Monthly
            installment plans. <br /> Income Share Agreements (ISAs): Where you pay
            nothing until you land a job making over a certain threshold.
          </p>
        </div>
      </section>
    </>
  );
}

export default FAQ;
