function createPhoneNumber(numbers){
  let str = "(XXX) XXX-XXXX"
  for (let i = 0; i < numbers.length; i++)
    {
      str = str.replace("X", numbers[i])
    }
  return str
}