// =====================================
// BATTLE GAME CONFIG
// Новый проект
// =====================================


const CONFIG = {


    // адрес сервера Battle Game
    API_URL:

    "ТУТ_БУДЕТ_АДРЕС_RAILWAY",




    // название игры

    NAME:

    "BATTLE GAME",




    // награда за приглашение

    REFERRAL_BONUS:

    5000,




    // бесплатное яйцо

    FREE_EGG:

    "SINNI",




    // время ожидания бесплатного яйца

    FREE_EGG_TIME:

    24 * 60 * 60 * 1000,




    // время кражи

    STEAL_COOLDOWN:

    60 * 60 * 1000,




    // яйца


    EGGS:{



        SINNI:{


            name:"SINNI",


            price:10000,


            income:0.001,


            color:"#fff2a8"


        },




        BORLI:{


            name:"BORLI",


            price:50000,


            income:0.010,


            color:"#00ffff"


        },




        BONI:{


            name:"BONI",


            price:100000,


            income:0.075,


            color:"#ff00ff"


        },




        JOUNI:{


            name:"JOUNI",


            price:700000,


            income:0.100,


            color:"#ff3300"


        },




        SIXI_LEGA:{


            name:"SIXI LEGA",


            price:1300000,


            income:5,


            color:"#ffd700"


        }


    }



};





window.CONFIG = CONFIG;
