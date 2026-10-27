function domainName(url){
  let str = url
  str = str.replace("http://","")
  str = str.replace("https://","")
  str = str.replace("www.","")
  let mas = str.split(".")
  return mas[0]
}