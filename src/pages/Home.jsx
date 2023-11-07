import MainContent from "../components/template/MainContent";
import Header from "../components/template/Navbar";
import DarkModeContextProvider from "../context/DarkMode";

function Home() {
  return (
    <>
      <DarkModeContextProvider>
        <MainContent>
          <Header />
          <div className="flex justify-center min-h-screen items-center">
            <div className="text-center">
              <h1 className="dark:text-white font-bold mt-6">
                Selamat Datang Guys...
              </h1>
              <p className="dark:text-white font-semibold max-w-sm mt-5">
                Di web Streaming TV ini hanya ada beberapa channel local dan
                beberapa channel Arab Saudi
              </p>
            </div>
          </div>
        </MainContent>
      </DarkModeContextProvider>
    </>
  );
}

export default Home;
