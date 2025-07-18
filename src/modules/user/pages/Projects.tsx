import Images from "../../../assets/images/Todo.png";

const Projects = () => {
    return(
        <>
            <div className="px-[40px] h-[500px] w-[100%] flex justify-center items-center border-b border-t border-[gray] ">
                <div className="h[300px] w-[450px] rounded-[30px]">
                    <img src={Images} alt=""  className="h-[100%] w-[100%] rounded-[30px] shadow-[0_2px_10px_rgba(0,0,0,1)]"/>
                </div>
                <div className="text-white w-[60%] p-[20px] pr-[50px]">
                    <div className="text-4xl">Genral Store Inventory</div>
                    <div className="my-[20px] text-lg">
                        This is a simple inventory management system that allows users to add, update, and delete products. It also provides features for searching and filtering products based on various criteria.
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects;