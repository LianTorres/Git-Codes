// 1.Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].

function big(arr)
{
    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i]>0)
        {
            arr[i]="big";
        }
    }
    return arr;
}
console.log(big([1,5,10,-2]));
// 2.Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 

function mm(arr)
{
    var mi=0;
    var ma=0;
    for(var i=0 ; i<arr.length ; i++)
    {
        if(ma<arr[i])
        {
            ma=arr[i];
        }
        if(mi>arr[i])
        {
            mi=arr[i];
        }
    }
    console.log(mi)
    return ma;
}
console.log(mm([1,5,10,-2]));
// 3.Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

function pi(arr)
{
    console.log(arr[arr.length-2]);
    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i]%2==1)
        {
            return arr[i]
        }
    }
}
console.log(pi([1,5,10,-2]));
// 4.Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 

function doble(arr)
{
    for(var i=0 ; i<arr.length ; i++)
    {
        arr[i]=arr[i]*2;
    }
    return arr;
}
console.log(doble([1,5,10,-2]));

// 5.Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].

function lastvalue(arr)
{
    var svp=0;
    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i]>0)
        {
            svp+=1;
        }
    }
    arr[arr.length-1]=svp;
    return arr;
}
console.log(lastvalue([1,5,10,-2]));

// 6.Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.

function print(arr)
{
    var sp=0;
    var si=0;
    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i]%2==0)
        {
            sp+=1;
            si=0;
            if(sp==3)
            {
                console.log("¡Es para bien!")
                sp=0;
            }
        }
        else if(arr[i]%2==1)
        {
            si+=1;
            sp=0;
            if(si==3)
            {
                console.log("¡Qué imparcial!")
                si=0;
            }
        }
    }
    return "Pares e Impares";
}
console.log(print([1,5,7,-2]));

// 7.Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. 

function iai(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            arr[i]+=1;
        }
        console.log(arr[i]);
    }
    return arr;
}
console.log(iai([1,2,3,4,5,6,7,8,9,10]));

// 8.Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?

function lp(arr){
    let longitudPrevia=arr[0].length;
        for(let i=1; i<arr.length; i++){
            let LongitudNueva= arr[i].length;
            arr[i]= longitudPrevia;
            longitudPrevia= LongitudNueva;
        }
        return arr;
    }
    console.log(lp(["programar","dojo", "genial"]));

// 9.Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 

function more7(arr){
    let arraynew=[];
    for(let i=0;i<arr.length;i++){
        arraynew.push(arr[i]+7)
    }
    return arraynew;
}
console.log(more7([1,2,3]));

// 10.Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

function rever(arr){
    let arraynew=[]
    for(let i=arr.length-1;i>=0;i--){
        arraynew.push(arr[i]);
    }
    return arraynew;
}
console.log(rever([3,1,6,4,2]));


// 11.Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].

function an(arr){
    let arraynew=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            arraynew.push(-arr[i]);
        }
        else{
            arraynew.push(arr[i])
        }
    }
    return arraynew;
}
console.log(an([1,-3,5,-5,2]));

// 12.Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 

function hungry(arr){
    let hambre=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==="comida"){
            console.log("yummy");
        }
        else{
            hambre+=1;
        }
        if(hambre===arr.length){
            console.log("tengo hambre");
        }
    }
    return "Funcion hambrienta"
}
console.log(hungry([1,"comida",3,"yummy"]));

// 13.Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 

function centro(arr){
    valor1=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=valor1;
    if(arr.length%2==0){
        let valormedio=arr[arr.length/2-1];
        arr[arr.length/2-1]=arr[arr.length/2];
        arr[arr.length/2]=valormedio;
    }
    return arr;
}
console.log(centro([true, 42, "Ada",2, "pizza"]));
console.log(centro([1,2,3,4,5,6]))

// 14.Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].

function multiplicar(arr,y){
    for(let i=0;i<arr.length;i++){
        arr[i]*=y;
    }
    return arr;
}
console.log(multiplicar([1,2,7,3],3));