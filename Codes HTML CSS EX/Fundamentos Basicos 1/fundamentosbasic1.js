//1. Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function print1to255()
{
    var arr=[];
    for(var i=1 ; i<=255 ; i++)
    {
        arr.push(i);
    }
    return arr;
}
console.log(print1to255());

//2. Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function parto1000()
{
    sumpar=0;
    for(var i=0; i<=1000; i++)
    {
       if(i%2==0)
       {
        sumpar+=i;
       }
    }
    return sumpar;
}
console.log(parto1000());

//3. Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 (ej: 1+3+5+...+4997+4999).

function imparto5000()
{
    sumimpar=0;
    for(var i=0; i<=1000; i++)
    {
       if(i%2==!0)
       {
        sumimpar+=i;
       }
    }
    return sumimpar;
}
console.log(imparto5000());

//4. Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 

function sumvalue(arr)
{
    sv=0;
    for(var i=0 ; i<arr.length ; i++)
    {
        sv+=arr[i];
    }
    return sv;
}
console.log(sumvalue([1,2,5]));

//5. Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 

function mayvalue(arr)
{
    sv=0;
    for(var i=0 ; i<arr.length ; i++)
    {
        if(sv<arr[i])
        sv=arr[i];
    }
    return sv;
}
console.log(mayvalue([1,2,5]));

//6. Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
function promvalue(arr)
{
    sv=0;
    pv=0;
    for(var i=0 ; i<arr.length ; i++)
    {
        sv+=arr[i];
        pv++;
    }
    return sv/pv;
}
console.log(promvalue([1,3,5,7,20]));

//7. Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.

function imparto50()
{
    var arr=[];
    for(var i=1; i<=50; i++)
    {
       if(i%2==!0)
       {
        arr.push(i);
       }
    }
    return arr;
}
console.log(imparto50());

//8. Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 

function mayy(arr,y)
{
    var count=0;
    for(var i=0 ; i<arr.length ; i++)
    {
        if(y<arr[i])
        {
        count+=1
        }
    }
    return count;
}
console.log(mayy([1,2,5],0));

//9. Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).

function cuad(arr)
{
    for(var i=0 ; i<arr.length ; i++)
    {
        arr[i]=arr[i]*arr[i];
    }
    return arr;
}
console.log(cuad([1,5,10,-2]));

//10. Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).

function neg(arr)
{
    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i]<0)
        {
            arr[i]=0;
        }
    }
    return arr;
}
console.log(neg([1,5,10,-2]));
//11. Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).

function mmp(arr) {
    var max = 0;
    var min = 0;
    var sum = 0;
    for (var i = 0; i<arr.length ; i++){ 
       sum= sum+arr[i];
       if(max<arr[i])
       {
       max=arr[i];
       }
       if(min>arr[i])
        {
         min=arr[i];   
        }
    }
    return [max,min,sum/arr.length]
}
console.log(mmp([1,5,10,-2]));

//12. Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 

function swap(arr) {
    var i = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = i;
    return arr; 
}
console.log(swap([1,5,10,-2]));
//13. De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].

function dojo(arr)
{
    for(var i=0 ; i<arr.length ; i++)
    {
        if(arr[i]<0)
        {
            arr[i]="dojo";
        }
    }
    return arr;
}
console.log(dojo([1,5,10,-2]));