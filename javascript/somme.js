//Ex 7 :
/*let N,S,Moy,x;
N=parseInt(prompt("Saisir le nombre des notes : "));
S=0;
for(let i = 0;i<N;i++){
    x=parseFloat(prompt("Entrer les notes"));
    S=S+x;
}
Moy=S/N;
alert("La somme est :"+S+"\nLa moyenne est :"+Moy);
*/
//EX 8 :
/*
let A,f;
A=parseInt(prompt("Entrer un nombre"));
f=1;
for(let i=0;i<A;){
    i++
    f=f*i;
}
alert(" Le factorielle de"+A+" est :"+f);
*/
//Ex 10 :

let Max,X;
Max=0;
for(let i=1;i<=10;i++){
    X=parseFloat(prompt("Taper la "+ i +" note :"));
    if (X>Max){
        Max=X;
    }
}
alert("Le maximum est  :"+Max);



