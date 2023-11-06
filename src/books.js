import img0 from './images/image.jpg'
export const books = [

    {
        author: 'Rebecca Yarros',
        title: 'Fourth Wing (Special Edition) (The Empyrean, 1)',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81im9aAFBOL._AC_UL600_SR600,400_.jpg',
        id: 1,
    },

    // id can be anything until it is unique even we don't need to name it id we can name it anything

    //we can also give index no as a key as it is a unique no for each item but if the list changed it'll get bugs
    {
        author: 'Morgan Housel',
        title: 'The Psychology Of Money',
        img: 'https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg',
        id: 2,
    },



    {
        author: 'Britney Spears ',
        title: 'The Woman in Me',
        img: img0,
        id: 3,
    },

];