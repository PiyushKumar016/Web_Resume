import { Route, Routes } from "react-router-dom"
import Resume from "../../modules/user/pages/Resume";
import Projects from "../../modules/user/pages/Projects";
const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Resume />} />
                <Route path="/Projects" element={<Projects />} />
            </Routes>
        </>
    )
}
export default AppRoutes;