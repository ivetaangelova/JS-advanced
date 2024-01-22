function biggerHalf(arr) {
let sortedArr= arr.sort((a,b)=> a-b);
let half= arr.length/2;
if (arr.length % 2==0) {
    return sortedArr.slice(half)
}else{
    half=Math.floor(half)
    return sortedArr.slice(half)
}
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
biggerHalf([4, 7, 2, 5]);