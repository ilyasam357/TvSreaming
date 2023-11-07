import { useContext } from "react";
import { ThemeDarkMode } from "../../context/DarkMode";

function CardDark({children}){
    const {isDark }= useContext(ThemeDarkMode)

    return(
        <div className={isDark?'dark':''}>
        {children}
      </div>
    )
}

export default CardDark