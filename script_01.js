
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/

// module: addition a +b | test:
output(add(2,3));
output(add(2,-3));
output(add(2,0));
function add(a,b)
{
    return a + b;
}


// module: console output | test:
// output("hello");
// output(2);
function output(outputData)
{
    console.log(outputData);
}