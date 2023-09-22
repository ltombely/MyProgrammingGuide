const array = [85, 90, 78, 92, 88];

let total = 0

for(a in array){
    total = total + array[a]
    console.log(total)
}
let media = total/[array.length]
console.log(media)