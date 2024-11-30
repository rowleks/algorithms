/* 
You are given three pegs (A, B, and C) and a set of n disks of different sizes. The disks are initially stacked on peg A in decreasing order of size from bottom to top (largest at the bottom, smallest at the top).

The objective is to move the entire stack of disks from peg A to peg C, following these rules:

1.  Only one disk can be moved at a time.
2.  A disk can only be placed on top of another disk if it is smaller than the disk below it.
3.  Each move consists of taking the top disk from one peg and placing it on another peg.
*/



// function towerOfHanoi(n, source, target, aux) {
//    console.log(`called: towerOfHanoi(${n}), ${source}, ${target}, ${aux}`)
//   if (n===1)
//   {
//     console.log(`Move disk 1 from ${source} to ${target}`)
//     return;
//   }
//   towerOfHanoi(n-1, source, aux, target)
//   console.log(`Move disk ${n} from ${source} to ${target}`)
//   towerOfHanoi(n-1, aux, target, source);
// }



function towerOfHanoi(n, source, target, aux, depth = 0) {
   const indent = '  '.repeat(depth);
   console.log(`${indent}called: towerOfHanoi(${n}), ${source}, ${target}, ${aux}`);
   if (n === 1) {
       console.log(`${indent}Move disk 1 from ${source} to ${target}`);
       return;
      }
      towerOfHanoi(n - 1, source, aux, target, depth + 1);
      console.log(`${indent}Move disk ${n} from ${source} to ${target}`);
      towerOfHanoi(n - 1, aux, target, source, depth + 1);
   }
   
   towerOfHanoi(3, 'A', 'C', 'B')

















/*
Original Arrangement 
    |          |          |
   ===         |          |
  =====        |          |
 =======       |          |
---------   --------   -------
   A           B          C
*/

/* 
Step 1: Move disk 1 from A to C

    |          |          |           
    |          |          |
  =====        |          |
 =======       |         ===
---------   --------   -------
   A           B          C
*/

/* 
Step 2: Move disk 2 from A to B

    |          |          |           
    |          |          |
    |          |          |
 =======     =====       ===
---------   --------   -------
   A           B          C
*/

/* 
Step 3: Move disk 1 from C to B

    |          |          |           
    |          |          |
    |         ===         |
 =======     =====        |
---------   --------   -------
   A           B          C
*/

/* 
Step 4: Move disk 3 from A to C

    |          |          |           
    |          |          |
    |         ===         |
    |        =====     =======
---------   --------   -------
   A           B          C
*/

/* 
Step 5: Move disk 1 from B to A

    |          |          |           
    |          |          |
    |          |          |
   ===       =====     =======
---------   --------   -------
   A           B          C
*/

/* 
Step 6: Move disk 2 from B to C

    |          |          |           
    |          |          |
    |          |        =====
   ===         |       =======
---------   --------   -------
   A           B          C
*/

/* 
Step 7: Move disk 1 from A to C

    |          |          |           
    |          |         ===
    |          |        =====
    |          |       =======
---------   --------   -------
   A           B          C
*/
