import './App.css'
import {Header} from "./loyout/header/Header.tsx";
// import {Main} from "./loyout/section/main/Main.tsx";
import {MyContainer} from "./components/MyContainer.ts";
// import {FavoriteCoffee} from "./loyout/section/favoriteCoffee/FavoriteCoffee.tsx";
// import {About} from "./loyout/section/about/About.tsx";
 //import {MobileApp} from "./loyout/section/mobileApp/MobileApp.tsx";
import {Footer} from "./loyout/footer/Footer.tsx";
import {DrinkMenu} from "./loyout/section/drinkMenu/DrinkMenu.tsx";

function App() {
    return (
        <MyContainer>
            <Header/>
            <DrinkMenu/>
            {/*<Main/>*/}
            {/*<FavoriteCoffee />*/}
            {/*<About />*/}
            {/*<MobileApp />*/}
            <Footer />
        </MyContainer>
    )
}

export default App
