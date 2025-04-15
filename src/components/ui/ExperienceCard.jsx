
const ExperienceCard = ({ title, company, description, date }) => {
  return (
    <div className="relative mx-12 pb-12 grid grid-cols-1 before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 md:grid-cols-5 md:gap-4 md:space-x-2 ">
      <div className="relative pb-12 md:col-span-2">
        <div className="sticky top-0">
          <span className="text-orange-300 -left-[42px] absolute rounded-full text-5xl">&bull;</span>
          <h3 className="text-xl font-bold text-white ">{title}</h3>
          <h4 className="font-semibold text-xl text-gray-600 dark:text-white">{company}</h4>
          <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">{date}</time>
        </div>
      </div>
      <div className="relative flex flex-col justify-center gap-1 pb-4 text-white-400 dark:text-white-400 md:col-span-3">
        <p>{description}</p>
      
      </div>
    </div>
  );
};

export default ExperienceCard;
