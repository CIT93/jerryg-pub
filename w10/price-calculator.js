const priceShirt = 15;
const priceGiftWrap = 2;

export const calculateTotal = function(data) {
    //first determine added cost of giftwrap, then add to total
    let costGiftWrap = 0;
    if(data.giftWrap) costGiftWrap = 2;
    const totalPrice = (data.qty * priceShirt) + costGiftWrap;
    //console.log(`return price: ${totalPrice}`);
    return {
       
        totalPrice: totalPrice

    };

};  