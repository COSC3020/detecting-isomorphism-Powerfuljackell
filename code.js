function are_isomorphic(graph1, graph2) {
    var rowVals = {rowVals1: new Array(graph1.length).fill(0), rowVals2: new Array(graph1.length).fill(0)};
    isoTrue = true;
    for(i = 0; i < graph1.length; i++){
        for(j = 0; j < graph1[i].length; j++){
            rowVals.rowVals1[i] += graph1[i][j];
        }
    }
    for(i = 0; i < graph2.length; i++){
        for(j = 0; j < graph2[i].length; j++){
            rowVals.rowVals2[i] += graph2[i][j];
        }
    }
    for(i = 0; i < rowVals.rowVals1.length; i++){
        for(j = 0; j < rowVals.rowVals2.length; j++){
            if(rowVals.rowVals1[i] == rowVals.rowVals2[j]){
                rowVals.rowVals1.splice(i,1);
                rowVals.rowVals2.splice(j,1);
                i--;
                j--;
            }
        }
    }
    if(rowVals.rowVals1.length == 0){
        return true;
    }else{
        return false;
    }
}

/*
var testArray = [[0, 1, 0, 1, 0], 
                 [1, 0, 0, 1, 1], 
                 [0, 0, 0, 1, 0], 
                 [1, 1, 1, 0, 1], 
                 [0, 1, 0, 1, 0]] ;
var testArray2 = [[0, 1, 0, 1, 0], 
                  [1, 0, 1, 1, 1], 
                  [0, 1, 0, 0, 0], 
                  [1, 1, 0, 0, 1], 
                  [0, 1, 0, 1, 0]];
console.log(are_isomorphic(testArray,testArray2));
*/