const INITIAL_STATE = {

    sections: [{
            title: 'Figure',
            imageUrl: 'https://i.ibb.co/JyWCH9c/figure.png',
            id: 1,
            linkUrl: 'shop/figure'
        },
        {
            title: 'Games',
            imageUrl: 'https://i.ibb.co/fCn2bQh/console.png',
            id: 2,
            linkUrl: 'shop/game'
        },
        {
            title: 'Card Supplies',
            imageUrl: 'https://i.ibb.co/Pw2VxNX/card.png',
            id: 3,
            linkUrl: 'shop/supplies'
        },
        {
            title: 'Yu-Gi-Oh Card',
            imageUrl: 'https://i.ibb.co/z561R2M/yugioh-logo.png',
            id: 4,
            size: 'large',
            linkUrl: 'shop/yugioh'
        },
        {
            title: 'Pokemon Card',
            imageUrl: 'https://i.ibb.co/r2chTKj/pokemon-logo.png',
            id: 5,
            size: 'large',
            linkUrl: 'shop/pokemon'
        }
    ]
};


const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
};


export default directoryReducer;