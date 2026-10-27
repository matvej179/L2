function solution(str){
   let a = []
   for(let i = 0; i < Math.ceil(str.length/2);i++)
     {
       a[i] = str[i*2] + str[i*2+1]
     }
  if (str.length %2 !== 0)
    {
      a[a.length-1] = a[a.length-1].replace(undefined, "_")
    }
  return a
}