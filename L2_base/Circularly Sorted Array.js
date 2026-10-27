function isCircleSorted( arr ){
  let fl = true

      for(let j = 0; j < arr.length; j++)
      {
        fl = true
        for(let k = 0; k < arr.length; k++)
          {
            if(arr[k] > arr[k + 1])
              {
                fl = false
                break;
              }
          }
        if (fl)
        {
          break;
        }
        let t = arr[0]
        for(let g = 0; g < arr.length; g++)
          {
            arr[g] = arr[g+1]
          }
        arr[arr.length - 1] = t
      }
    return fl
}