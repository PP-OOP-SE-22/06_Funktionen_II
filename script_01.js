
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/

// (fake it, till you make it)




output(add(2,3));
output(add(2,-3));
output(add(2,0));
function add(a,b)
{
    let c = a + b;
    return c;
}


// module: console output | test:
// output("hello");
// output(2);
function output(outputData)
{
    console.log(outputData);
}