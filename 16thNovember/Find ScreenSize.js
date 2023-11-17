function findScreenHeight(width, ratio) {
var sp=ratio.split(":");
var height=(width/Number(sp[0])) * Number(sp[1]);
return `${width}x${height}`
}
