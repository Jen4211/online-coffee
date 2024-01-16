import React, {useEffect, useMemo, useState} from 'react';
import {S} from "./StyledDrinkMenu.ts";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.ts";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import coffee1 from "../../../assets/coffeeMenuImg/coffee-1.webp";
import coffee2 from "../../../assets/coffeeMenuImg/coffee-2.webp";
import coffee3 from "../../../assets/coffeeMenuImg/coffee-3.webp";
import coffee4 from "../../../assets/coffeeMenuImg/coffee-4.webp";
import coffee5 from "../../../assets/coffeeMenuImg/coffee-5.webp";
import coffee6 from "../../../assets/coffeeMenuImg/coffee-6.webp";
import coffee7 from "../../../assets/coffeeMenuImg/coffee-7.webp";
import coffee8 from "../../../assets/coffeeMenuImg/coffee-8.webp";
import tea1 from "../../../assets/teaMenuImg/tea-1.webp";
import tea2 from "../../../assets/teaMenuImg/tea-2.webp";
import tea3 from "../../../assets/teaMenuImg/tea-3.webp";
import tea4 from "../../../assets/teaMenuImg/tea-4.webp";
import dessert1 from "../../../assets/dessertMenuImg/dessert-1.webp";
import dessert2 from "../../../assets/dessertMenuImg/dessert-2.webp";
import dessert3 from "../../../assets/dessertMenuImg/dessert-3.webp";
import dessert4 from "../../../assets/dessertMenuImg/dessert-4.webp";
import dessert5 from "../../../assets/dessertMenuImg/dessert-5.webp";
import dessert6 from "../../../assets/dessertMenuImg/dessert-6.webp";
import dessert7 from "../../../assets/dessertMenuImg/dessert-7.webp";
import dessert8 from "../../../assets/dessertMenuImg/dessert-8.webp";
import {FlexContainer} from "../../../components/FlexContainer.ts";
import {CardMenu} from "./cardMenu/CardMenu.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {ModalCard} from "../../../components/modalCard/ModalCard.tsx";


export type StatusTabMenuType = "coffee" | "tea" | "dessert";

export type TabMenuItemType = {
    icon: string
    text: string
    status: StatusTabMenuType
}
export type DataMenuItemType = {
    src: string
    title: string
    description: string
    price: string
    type: StatusTabMenuType
    id: string
}

const tabMenuItems: Array<TabMenuItemType> = [
    {icon: "☕", text: "Coffee", status: "coffee"},
    {icon: "🫖", text: "Tea", status: "tea"},
    {icon: "🍰", text: "Dessert", status: "dessert"},
]

const dataMenu: Array<DataMenuItemType> = [
    {
        src: coffee1,
        title: "Irish coffee",
        description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
        price: "$7.00",
        type: "coffee",
        id: "1"
    },
    {
        src: coffee2,
        title: "Kahlua coffee",
        description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
        price: "$7.00",
        type: "coffee",
        id: "2"
    },
    {
        src: coffee3,
        title: "Honey raf",
        description: "Espresso with frothed milk, cream and aromatic honey",
        price: "$5.50",
        type: "coffee",
        id: "3"
    },
    {
        src: coffee4,
        title: "Ice cappuccino",
        description: "Cappuccino with soft thick foam in summer version with ice",
        price: "$5.00",
        type: "coffee",
        id: "4"
    },
    {
        src: coffee5,
        title: "Espresso",
        description: "Classic black coffee",
        price: "$4.50",
        type: "coffee",
        id: "5"
    },
    {
        src: coffee6,
        title: "Latte",
        description: "Espresso coffee with the addition of steamed milk and dense milk foam",
        price: "$5.50",
        type: "coffee",
        id: "6"
    },
    {
        src: coffee7,
        title: "Latte macchiato",
        description: "Espresso with frothed milk and chocolate",
        price: "$5.50",
        type: "coffee",
        id: "7"
    },
    {
        src: coffee8,
        title: "Coffee with cognac",
        description: "Fragrant black coffee with cognac and whipped cream",
        price: "$6.50",
        type: "coffee",
        id: "8"
    },
    {
        src: tea1,
        title: "Moroccan",
        description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
        price: "$4.50",
        type: "tea",
        id: "9"
    },
    {
        src: tea2,
        title: "Ginger",
        description: "Original black tea with fresh ginger, lemon and honey",
        price: "$5.00",
        type: "tea",
        id: "10"
    },
    {
        src: tea3,
        title: "Cranberry",
        description: "Invigorating black tea with cranberry and honey",
        price: "$5.00",
        type: "tea",
        id: "11"
    },
    {
        src: tea4,
        title: "Sea buckthorn",
        description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
        price: "$5.50",
        type: "tea",
        id: "12"
    },
    {
        src: dessert1,
        title: "Marble cheesecake",
        description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
        price: "$3.50",
        type: "dessert",
        id: "13"
    },
    {
        src: dessert2,
        title: "Red velvet",
        description: "Layer cake with cream cheese frosting",
        price: "$4.00",
        type: "dessert",
        id: " 14"
    },
    {
        src: dessert3,
        title: "Cheesecakes",
        description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
        price: "$4.50",
        type: "dessert",
        id: "15"
    },
    {
        src: dessert4,
        title: "Creme brulee",
        description: "Delicate creamy dessert in a caramel basket with wild berries",
        price: "$4.00",
        type: "dessert",
        id: "16"
    },
    {
        src: dessert5,
        title: "Pancakes",
        description: "Tender pancakes with strawberry jam and fresh strawberries",
        price: "$4.50",
        type: "dessert",
        id: "17"
    },
    {
        src: dessert6,
        title: "Honey cake",
        description: "Classic honey cake with delicate custard",
        price: "$4.50",
        type: "dessert",
        id: "18"
    },
    {
        src: dessert7,
        title: "Chocolate cake",
        description: "Cake with hot chocolate filling and nuts with dried apricots",
        price: "$5.50",
        type: "dessert",
        id: "19"
    },
    {
        src: dessert8,
        title: "Black forest",
        description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
        price: "$6.50",
        type: "dessert",
        id: "20"
    },
]


export const DrinkMenu: React.FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 576;
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    const [currentFilterStatus, setCurrentFilterStatus] = useState<StatusTabMenuType>("coffee");

    const [currentPage, setCurrenPage] = useState(1);

    const [currentId, setCurrentId] = useState<string>("");

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const filterMenu = useMemo(() => {
        const filterArray = dataMenu.filter((menu) => menu.type === currentFilterStatus)
        return width > breakpoint
            ? filterArray
            : filterArray.slice(0, 4 * currentPage)
    }, [currentFilterStatus, currentPage, width]);

    const changeFilterStatus = (value: StatusTabMenuType) => {
        setCurrentFilterStatus(value);
        setCurrenPage(1);
    }
    const onToggle = (isOpen: boolean) => setIsOpen(isOpen)

    const filterId = filterMenu.filter((menu) => menu.id === currentId);
    const changeCurrentId = (id: string, isOpen: boolean) => {
        setCurrentId(id);
        onToggle(isOpen);

    }


    return (
        <S.DrinkMenu>
            <SectionTitle>Behind each of our cups hides an <span>amazing surprise</span></SectionTitle>
            <TabMenu tabMenu={tabMenuItems}
                     changeFilterStatus={changeFilterStatus}
                     currentFilterStatus={currentFilterStatus}/>
            <FlexContainer wrap={"wrap"} justify={"center"}>
                <CardMenu menu={filterMenu} changeCurrentId={changeCurrentId}/>
                <S.RefreshWrap>
                    <S.Refresh as={"button"}
                               onClick={() => setCurrenPage(prevState => prevState + 1)}>
                        <Icon iconId={"refresh"}
                              height={"24"}
                              width={"24"}
                              viewBox={"0 0 24 24"}
                        />
                    </S.Refresh>
                </S.RefreshWrap>

            </FlexContainer>
            <ModalCard menu={filterId}
                       onToggle={onToggle}
                       isOpen={isOpen}/>
        </S.DrinkMenu>
    );
};



