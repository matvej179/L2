function hasTwoCubeSums(n) {
 let count = 0
 let mat = [];
 for (let i = 1; i*i*i <= n; i++)
   {
     for (let j = 1; j*j*j + i*i*i <= n; j++)
       {
         if (i*i*i + j*j*j === n)
           {
             count++
             if (count >= 2 && mat[0] !== j && mat[1] !==i)
              {
               return true
              }
             mat[0] = i
             mat[1] = j
           }
       }
   }
  return false
}
