import { Link } from "react-router-dom";

// import { Link } from "react-router-dom"
const Header = () => {
    return (
        // <>
        <div className="text-white h-[100px] w-full flex items-center rounded-t-[40px] ">
            <div className="w-[50%] h-[100%] flex items-center rounded-[40px] text-xl ">
                <div className="mx-[20px] h-[50px] w-[50px] rounded-[50%] bg-[purple] cursor-pointer flex items-center justify-center text-white text-3xl">
                    P
                </div>

                <div className="mx-[0px] cursor-pointer font-bold text-2xl text-[rgba(210,210,210,1)]">Piyush </div><div className="mx-[5px] cursor-pointer text-[rgba(210,210,210,1)]">Kumar</div>
            </div>
            <div className="mr-[100px] w-[50%] h-[100%] flex items-center justify-end rounded-[40px] text-xl text-[rgba(210,210,210,1)]">
                <Link to="/" className="mx-[20px]">resume</Link>
                <Link to="/Projects" className="mx-[20px]">Projects</Link>
            </div>
        </div>
        // </>
    )
}
export default Header;