function expandedForm(num) {
  let a 
  let str = ""
  let mas = []
  for(let i = 10, ii = 0;num/i>=0.1;i*=10)
    {
      a=num%i 
      if(a === 0)
        {
          continue
        }
      mas[ii] = a
      ii++
      num = num - a
    }
  for(let i = mas.length-1; i >= 0; i--)
    {
      str += mas[i]
      if(i !== 0)
        {
          str += " + "
        }
    }
  return str                
}