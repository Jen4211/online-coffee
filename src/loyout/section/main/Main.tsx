import React from 'react';
import {S} from "./StyledMain.ts";
import {theme} from "../../../styles/Theme.ts";
import {Button} from "../../../components/button/Button.ts";
import {Text} from "../../../components/text/Text.ts";
import {Link} from "react-router-dom";
import {path} from "../../pages/Pages.tsx";


export const Main: React.FC = () => {
    return (
        <S.Main>
            <S.ContentWrap>
                <S.MainTitle>
                    <span>Enjoy</span> premium coffee at our charming cafe
                </S.MainTitle>
                <Text color={theme.colors.text.light}>
                    With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular
                    destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite
                    beverage.
                </Text>
                <Link to={path.MENU}>
                    <Button
                        background={`${theme.colors.background.body}`}
                        color={`${theme.colors.text.dark}`}
                        padding={"20px 78px"}>
                        Menu</Button>
                </Link>

            </S.ContentWrap>
        </S.Main>

    );
}



