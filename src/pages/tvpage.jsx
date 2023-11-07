import MainContent from "../components/template/MainContent"
import Header from "../components/template/Navbar"
import TVStreaming from "../components/tvstreming/TvStreaming"
import DarkModeContextProvider from "../context/DarkMode"

const TvPage = ()=>{
    return(
        <DarkModeContextProvider>
            <MainContent>
                <Header/>
                <TVStreaming>
                </TVStreaming>
            </MainContent>
        </DarkModeContextProvider>
       
    )
}

export default  TvPage