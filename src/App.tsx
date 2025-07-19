import Footer from "./shared/component/Footer.tsx";
import Header from "./shared/component/Header.tsx";
import AppRoutes from "./shared/routes/AppRoutes.tsx";

function App() {
  return (
    <>
  {/* 1. The Fixed Background Div */}
  <div className="fixed inset-0 z-[-1] bg-[url('./assets/images/3459647.jpg')] bg-no-repeat bg-cover bg-center" />

  {/* 2. The Scrollable Content Div */}
  <div className=" z-10 w-full min-h-screen overflow-y-auto flex justify-center bg-[rgba(0,_0,_0,_0.2)] font-strait">
    <div className='relative w-full lg:w-[80%] bg-[rgba(28,28,28,1)] mx-auto my-12 px-6 sm:px-12 rounded-[40px]'>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  </div>
</>
  )
}

export default App;
