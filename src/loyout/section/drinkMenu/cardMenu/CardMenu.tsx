import React from 'react';
import {Photo} from "../../../../components/photo/Photo.ts";
import {Text} from "../../../../components/text/Text.ts";
import {DataMenuItemType} from "../DrinkMenu.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {S} from "../StyledDrinkMenu.ts";


type CardMenuPropsType = {
    menu: Array<DataMenuItemType>
    changeCurrentId: (id: string, isOpen: boolean) => void
}
export const CardMenu: React.FC<CardMenuPropsType> = (props: CardMenuPropsType) => {
    return (
        <>
            <AnimatePresence>
                {props.menu.map((m) => {
                    return (
                        <motion.div
                            layout
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            key={m.id}>
                            <S.CardContainer key={m.id}
                                             onClick={() => props.changeCurrentId(m.id, true)}
                            >
                                <Photo src={m.src}
                                       height={"310px"}
                                       width={"310px"}
                                       key={m.id}
                                       alt={m.type}
                                       radius={"40px"}/>
                                <S.ContentContainer>
                                    <S.TextWrap>
                                        <S.Title>{m.title}</S.Title>
                                        <Text>{m.description}</Text>
                                    </S.TextWrap>
                                    <S.Price>{m.price}</S.Price>
                                </S.ContentContainer>
                            </S.CardContainer>
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </>
    );
};

