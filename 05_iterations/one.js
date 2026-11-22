// FOR Loop

// we can use single loop or nested loop.
for(let index =0; index<=10;index++){
    console.log(index)
}

for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        console.log(i+"*"+j+" = "+(i*j))
    }
}

let myarray =["abc","def","123"]
for(let i=0;i<myarray.length;i++){
    console.log(myarray[i])
}

// break : it terminate the program
// continue : it skip the current iteration.

for(let index =0; index<=10;index++){
    if(index == 5){
        break;
    }
    console.log(index)
}

for(let index =0; index<=10;index++){
    if(index == 5){
        continue;
    }
    console.log(index)
}
