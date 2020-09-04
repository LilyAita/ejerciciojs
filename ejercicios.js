function secret(arreglo, funcion ,num) {
    return arreglo.map((x)=>funcion(x,num));  
}

arrow = (a, b ) =>( a===b ? a: arrow(Math.min(a,b),Math.abs(a-b)));  
