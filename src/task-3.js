
export default function boundingRect(coordsList) {

    if(coordsList.length === 0) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }

    let arrX = coordsList.map(function(item){
        return item.x;
    }).sort(function(a, b) {
        return a - b;
    });
    let arrY = coordsList.map(function(item){
        return item.y;
    }).sort(function(a, b) {
        return a - b;
    });
    return {
        top: arrY[arrY.length-1],
        right: arrX[arrY.length-1],
        bottom: arrY[0],
        left: arrX[0]
    };
}
