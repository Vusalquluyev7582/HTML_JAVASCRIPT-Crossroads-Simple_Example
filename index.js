// if, else strukturu 

/*

-           -              -
 -          -            -
  -         -           -
   -        -         -
    -       -        -
     -      -      -
      -     -    -
   1.yol  2.yol  3.yol

*/

let selectedPath = prompt("Zəhmət olmasa getmək istədiyiniz yolu seçin :");

if (selectedPath == 1) {
    alert("Seçilən yol " + selectedPath + "-ci yoldur");
}
else if (selectedPath == 2) {
    alert("Seçilən yol " + selectedPath + "-ci yoldur");
}
else if (selectedPath == 3) {
    alert("Seçilən yol " + selectedPath + "-cü yoldur");
}
else {
    alert("Zəhmət olmasa düzgün bir yol seçin !!");
}