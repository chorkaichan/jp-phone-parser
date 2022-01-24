import dic from './dic'

const getData = (phoneStr) => {
  if (phoneStr.slice(0, 1) !== '0') {
    return false
  }
  const dicLevel1 = dic[0]

  const level2Target = phoneStr.slice(1, 2)
  if (!level2Target || !(level2Target in dicLevel1)) {
    return false
  }
  const dicLevel2 = dicLevel1[level2Target]
  if (Array.isArray(dicLevel2)) {
    return {
      depth: 2,
      position: dicLevel2,
    }
  }

  const level3Target = phoneStr.slice(2, 3)
  if (!level3Target || !(level3Target in dicLevel2)) {
    return false
  }
  const dicLevel3 = dicLevel2[level3Target]
  if (Array.isArray(dicLevel3)) {
    return {
      depth: 3,
      position: dicLevel3,
    }
  }

  const level4Target = phoneStr.slice(3, 4)
  if (!level4Target || !(level4Target in dicLevel3)) {
    return false
  }
  const dicLevel4 = dicLevel3[level4Target]
  if (Array.isArray(dicLevel4)) {
    return {
      depth: 4,
      position: dicLevel4,
    }
  }

  const level5Target = phoneStr.slice(4, 5)
  if (!level5Target || !(level5Target in dicLevel4)) {
    return false
  }
  const dicLevel5 = dicLevel4[level5Target]
  if (Array.isArray(dicLevel5)) {
    return {
      depth: 5,
      position: dicLevel5,
    }
  }

  const level6Target = phoneStr.slice(5, 6)
  if (!level6Target || !(level6Target in dicLevel5)) {
    return false
  }
  const dicLevel6 = dicLevel5[level6Target]
  if (Array.isArray(dicLevel6)) {
    return {
      depth: 6,
      position: dicLevel6,
    }
  }
  return false
}

const parsePhoneNumber = (phoneNumber, delimiter = '-') => {
  if (typeof phoneNumber !== 'string') {
    return ''
  }
  const phoneStr = phoneNumber.replace(/[^0-9]/g, '')
  const data = getData(phoneStr)
  if (!data) {
    return phoneStr
  }
  return `${phoneStr.slice(0, data.depth + data.position[0])}${phoneStr.length > data.depth + data.position[0] ? delimiter : ''}${phoneStr.slice(data.depth + data.position[0], data.depth + data.position[0] + data.position[1])}${data.position[1] > 0 && phoneStr.length > data.depth + data.position[0] + data.position[1] ? delimiter : ''}${phoneStr.slice(data.depth + data.position[0] + data.position[1])}`
}

export default parsePhoneNumber
