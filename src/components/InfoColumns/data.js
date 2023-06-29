import image_1 from "assets/images/InfoColumns/info_1.png";
import image_2 from "assets/images/InfoColumns/info_2.png";

const infoData = [
    {
        id: 0,
        title: "Eget quis quam metus, scelerisque.",
        firstText:
            "Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor molestie massa porttitor. Quisque at turpis ut proin eu et magna etiam rhoncus.",
        children: [
            {
                id: 0,
                text: "Межкомнатую дверь",
            },
            {
                id: 1,
                text: "Деревянную дверь",
            },
            {
                id: 2,
                text: "Межкомнатую дверь",
            },
            {
                id: 3,
                text: "Деревянную дверь",
            },
        ],
        secondText:
            "Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum. In ullamcorper purus scelerisque malesuada et egestas. Ac dictumst mauris sed facilisis.",
        image: image_1,
    },
];

const infoSecondData = [
    {
        id: 0,
        title: "Eget quis quam metus, scelerisque.",
        firstText:
            "Odio felis sit leo, massa, mauris, at pulvinar ultrices. Eu porttitor molestie massa porttitor. Quisque at turpis ut proin eu et magna etiam rhoncus.",
        secondText:
            "Ac risus neque pulvinar tincidunt est. Tristique imperdiet viverra interdum in leo. Nullam ullamcorper id enim fermentum integer praesent bibendum. In ullamcorper purus scelerisque malesuada et egestas. Ac dictumst mauris sed facilisis.",
        image: image_2,
    },
];

export { infoData, infoSecondData };
