import Images from "../../../assets/images/Todo.png";

const Projects = () => {
    return(
        <>
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 px-6 md:px-10 py-12 border-b border-t border-gray-700">
                
                <div className="w-full sm:w-4/5 lg:w-2/5 flex-shrink-0">
                    <img 
                        src={Images} 
                        alt="General Store Inventory Project" 
                        className="w-full h-auto rounded-3xl shadow-lg shadow-black/50"
                    />
                </div>
                
                <div className="text-white w-full lg:w-3/5 text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold">
                        General Store Inventory
                    </h3>
                    <p className="my-4 text-base md:text-lg text-gray-300">
                        This is a simple inventory management system that allows users to add, update, and delete products. It also provides features for searching and filtering products based on various criteria.
                    </p>
                    <a href="#" className="inline-block mt-2 px-6 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-200">
                        View Project
                    </a>
                </div>

            </div>
        </>
    )
}
export default Projects;