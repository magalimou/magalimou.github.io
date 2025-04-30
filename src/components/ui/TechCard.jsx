
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TechCard = ({title, stack, icon}) => {
    return (
        <div className="bg-[#1C1222] p-8 shadow-md hover:shadow-xl/30 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:border-2 hover:border-violet-300 hover:shadow-gray-400/30 hover:bg-[#180E1E]">
            <div>
                <div className='flex text-start items-center  '>
                    <FontAwesomeIcon icon={icon} className="icon text-lg mr-2 text-orange-300" />
                    <h3 className="text-white text-2xl font-semibold ">{title} </h3>
                </div>
                <div className="grid grid-cols-2 mt-2 mb-4">
                    {stack.map((tech, index) => (
                        <span key={index} className="text-base font-semibold text-gray-300 mb-2">• {tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TechCard;