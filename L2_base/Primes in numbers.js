function primeFactors(n){
    let str = ""
    for(let i = 2; n > 1; i++)
      {
        let count = 0
        for(let j = i; n % j == 0;)
          {
            count++
            n /= j
          }
        if(count > 0)
          {
            if(count === 1)
              {
                str+="("+i+")"
              }
            else
              {
                str+="("+i+"**"+count+")"
              }
          }
      }
  return str
}