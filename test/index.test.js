import parsePhoneNumber from '../src'
import dic01 from './dic01'
import dic02 from './dic02'
import dic03 from './dic03'
import dic04 from './dic04'
import dic05 from './dic05'
import dic06 from './dic06'
import dic07 from './dic07'
import dic08 from './dic08'
import dic09 from './dic09'

dic01.forEach((dic) => {
  test(`dic test ${dic[0]} to ${dic[1]}`, () => {
    expect(parsePhoneNumber(dic[0])).toBe(dic[1])
  })
})

dic02.forEach((dic) => {
  test(`dic test ${dic[0]} to ${dic[1]}`, () => {
    expect(parsePhoneNumber(dic[0])).toBe(dic[1])
  })
})

dic03.forEach((dic) => {
  test(`dic test ${dic[0]} to ${dic[1]}`, () => {
    expect(parsePhoneNumber(dic[0])).toBe(dic[1])
  })
})

dic04.forEach((dic) => {
  test(`dic test ${dic[0]} to ${dic[1]}`, () => {
    expect(parsePhoneNumber(dic[0])).toBe(dic[1])
  })
})

dic05.forEach((dic) => {
  test(`dic test ${dic[0]} to ${dic[1]}`, () => {
    expect(parsePhoneNumber(dic[0])).toBe(dic[1])
  })
})

dic06.forEach((dic) => {
  test(`dic test ${dic[0]} to ${dic[1]}`, () => {
    expect(parsePhoneNumber(dic[0])).toBe(dic[1])
  })
})

dic07.forEach((dic) => {
  test(`dic test ${dic[0]} to ${dic[1]}`, () => {
    expect(parsePhoneNumber(dic[0])).toBe(dic[1])
  })
})

dic08.forEach((dic) => {
  test(`dic test ${dic[0]} to ${dic[1]}`, () => {
    expect(parsePhoneNumber(dic[0])).toBe(dic[1])
  })
})

dic09.forEach((dic) => {
  test(`dic test ${dic[0]} to ${dic[1]}`, () => {
    expect(parsePhoneNumber(dic[0])).toBe(dic[1])
  })
})

// general
test('empty', () => {
  expect(parsePhoneNumber('')).toBe('')
})
test('null', () => {
  expect(parsePhoneNumber(null)).toBe('')
})
test('undefined', () => {
  expect(parsePhoneNumber(undefined)).toBe('')
})
test('number', () => {
  expect(parsePhoneNumber(123456)).toBe('')
})

// delimiter
test('0312345678 to 03 1234 5678', () => {
  expect(parsePhoneNumber('0312345678', ' ')).toBe('03 1234 5678')
})
test('0312345678 to 03/1234/5678', () => {
  expect(parsePhoneNumber('0312345678', '/')).toBe('03/1234/5678')
})

// depth: 2, position: [ 0, 4 ]
test('0312345678 to 03-1234-5678', () => {
  expect(parsePhoneNumber('0312345678')).toBe('03-1234-5678')
})
test('03 to 03', () => {
  expect(parsePhoneNumber('03')).toBe('03')
})
test('031 to 03-1', () => {
  expect(parsePhoneNumber('031')).toBe('03-1')
})
test('0312 to 03-12', () => {
  expect(parsePhoneNumber('0312')).toBe('03-12')
})
test('03123 to 03-123', () => {
  expect(parsePhoneNumber('03123')).toBe('03-123')
})
test('031234 to 03-1234', () => {
  expect(parsePhoneNumber('031234')).toBe('03-1234')
})
test('0312345 to 03-1234-5', () => {
  expect(parsePhoneNumber('0312345')).toBe('03-1234-5')
})
test('03123456 to 03-1234-56', () => {
  expect(parsePhoneNumber('03123456')).toBe('03-1234-56')
})
test('031234567 to 03-1234-567', () => {
  expect(parsePhoneNumber('031234567')).toBe('03-1234-567')
})
test('03123456789 to 03-1234-56789', () => {
  expect(parsePhoneNumber('03123456789')).toBe('03-1234-56789')
})

// depth: 3, position: [ 0, 3 ]
test('0113871234 to 011-387-1234', () => {
  expect(parsePhoneNumber('0113871234')).toBe('011-387-1234')
})
test('011 to 011', () => {
  expect(parsePhoneNumber('011')).toBe('011')
})
test('0113 to 011-3', () => {
  expect(parsePhoneNumber('0113')).toBe('011-3')
})
test('011387 to 011-387', () => {
  expect(parsePhoneNumber('011387')).toBe('011-387')
})
test('0113871 to 011-387-1', () => {
  expect(parsePhoneNumber('0113871')).toBe('011-387-1')
})

// depth: 4, position: [ 0, 2 ]
test('0123123456 to 0123-12-3456', () => {
  expect(parsePhoneNumber('0123123456')).toBe('0123-12-3456')
})
test('012 to 012', () => {
  expect(parsePhoneNumber('012')).toBe('012')
})
test('0123 to 0123', () => {
  expect(parsePhoneNumber('0123')).toBe('0123')
})
test('01231 to 0123-1', () => {
  expect(parsePhoneNumber('01231')).toBe('0123-1')
})
test('012312 to 0123-12', () => {
  expect(parsePhoneNumber('012312')).toBe('0123-12')
})
test('0123123 to 0123-12-3', () => {
  expect(parsePhoneNumber('0123123')).toBe('0123-12-3')
})

// depth: 4, position: [ -1, 3 ]
test('0177123456 to 0177-12-3456', () => {
  expect(parsePhoneNumber('0177123456')).toBe('017-712-3456')
})
test('017 to 017', () => {
  expect(parsePhoneNumber('017')).toBe('017')
})
test('0177 to 017-7', () => {
  expect(parsePhoneNumber('0177')).toBe('017-7')
})
test('017712 to 017-712', () => {
  expect(parsePhoneNumber('017712')).toBe('017-712')
})
test('0177123 to 017-712-3', () => {
  expect(parsePhoneNumber('0177123')).toBe('017-712-3')
})

// depth: 4, position: [ -2, 4 ]
test('0420123456 to 04-2012-3456', () => {
  expect(parsePhoneNumber('0420123456')).toBe('04-2012-3456')
})
test('042 to 042', () => {
  expect(parsePhoneNumber('042')).toBe('042')
})
test('0420 to 04-20', () => {
  expect(parsePhoneNumber('0420')).toBe('04-20')
})
test('042012 to 04-2012', () => {
  expect(parsePhoneNumber('042012')).toBe('04-2012')
})
test('0420123 to 04-2012-3', () => {
  expect(parsePhoneNumber('0420123')).toBe('04-2012-3')
})

// depth: 5, position: [ 0, 1 ]
test('0126712345 to 01267-1-2345', () => {
  expect(parsePhoneNumber('0126712345')).toBe('01267-1-2345')
})
test('01267 to 01267', () => {
  expect(parsePhoneNumber('01267')).toBe('01267')
})
test('012671 to 01267-1', () => {
  expect(parsePhoneNumber('012671')).toBe('01267-1')
})
test('0126712 to 01267-1-2', () => {
  expect(parsePhoneNumber('0126712')).toBe('01267-1-2')
})

// depth: 5, position: [ -1, 2 ]
test('0222123456 to 022-212-3456', () => {
  expect(parsePhoneNumber('0222123456')).toBe('022-212-3456')
})
test('022 to 022', () => {
  expect(parsePhoneNumber('022')).toBe('022')
})
test('0222 to 022-2', () => {
  expect(parsePhoneNumber('0222')).toBe('022-2')
})
test('022212 to 022-212', () => {
  expect(parsePhoneNumber('022212')).toBe('022-212')
})
test('0222123 to 022-212-3', () => {
  expect(parsePhoneNumber('0222123')).toBe('022-212-3')
})

// depth: 5, position: [ -2, 3 ]
test('0154123456 to 015-412-3456', () => {
  expect(parsePhoneNumber('0154123456')).toBe('015-412-3456')
})
test('0154 to 0154', () => {
  expect(parsePhoneNumber('0154')).toBe('0154')
})
test('01541 to 015-41', () => {
  expect(parsePhoneNumber('01541')).toBe('015-41')
})
test('015412 to 015-412', () => {
  expect(parsePhoneNumber('015412')).toBe('015-412')
})
test('0154123 to 015-412-3', () => {
  expect(parsePhoneNumber('0154123')).toBe('015-412-3')
})

// depth: 6, position: [ -1, 1 ]
test('0597921234 to 05979-2-1234', () => {
  expect(parsePhoneNumber('0597921234')).toBe('05979-2-1234')
})
test('05979 to 05979', () => {
  expect(parsePhoneNumber('0597921234')).toBe('05979-2-1234')
})
test('059792 to 05979-2', () => {
  expect(parsePhoneNumber('059792')).toBe('05979-2')
})
test('0597921 to 05979-2-1', () => {
  expect(parsePhoneNumber('0597921')).toBe('05979-2-1')
})

// depth: 6, position: [ -2, 2 ]
test('0261701234 to 0261-70-1234', () => {
  expect(parsePhoneNumber('0261701234')).toBe('0261-70-1234')
})
test('02617 to 02617', () => {
  expect(parsePhoneNumber('02617')).toBe('02617')
})
test('026170 to 0261-70', () => {
  expect(parsePhoneNumber('026170')).toBe('0261-70')
})
test('0261701 to 0261-70-1', () => {
  expect(parsePhoneNumber('0261701')).toBe('0261-70-1')
})

// depth: 6, position: [ -3, 3 ]
test('0261771234 to 026-177-1234', () => {
  expect(parsePhoneNumber('0261771234')).toBe('026-177-1234')
})
test('026177 to 026-177', () => {
  expect(parsePhoneNumber('026177')).toBe('026-177')
})
test('0261771 to 026-177-1', () => {
  expect(parsePhoneNumber('0261771')).toBe('026-177-1')
})

// 0120
test('0120123456 to 0120-123-456', () => {
  expect(parsePhoneNumber('0120123456')).toBe('0120-123-456')
})
test('0120 to 0120', () => {
  expect(parsePhoneNumber('0120')).toBe('0120')
})
test('01201 to 0120-1', () => {
  expect(parsePhoneNumber('01201')).toBe('0120-1')
})
test('0120123 to 0120-123', () => {
  expect(parsePhoneNumber('0120123')).toBe('0120-123')
})
test('01201234 to 0120-123-4', () => {
  expect(parsePhoneNumber('01201234')).toBe('0120-123-4')
})

// 0800
test('0800123456 to 0800-123-456', () => {
  expect(parsePhoneNumber('0800123456')).toBe('0800-123-456')
})
test('0800 to 0800', () => {
  expect(parsePhoneNumber('0800')).toBe('0800')
})
test('08001 to 0800-1', () => {
  expect(parsePhoneNumber('08001')).toBe('0800-1')
})
test('0800123 to 0800-123', () => {
  expect(parsePhoneNumber('0800123')).toBe('0800-123')
})
test('08001234 to 0800-123-4', () => {
  expect(parsePhoneNumber('08001234')).toBe('0800-123-4')
})

// 0180
test('0180180086 to 0180-180086', () => {
  expect(parsePhoneNumber('0180180086')).toBe('0180-180086')
})
test('018 to 018', () => {
  expect(parsePhoneNumber('018')).toBe('018')
})
test('0180 to 0180', () => {
  expect(parsePhoneNumber('0180')).toBe('0180')
})
test('01801 to 0180-1', () => {
  expect(parsePhoneNumber('01801')).toBe('0180-1')
})

// 0570
test('0570000123 to 0570-000-123', () => {
  expect(parsePhoneNumber('0570000123')).toBe('0570-000-123')
})
test('0570 to 0570', () => {
  expect(parsePhoneNumber('0570')).toBe('0570')
})
test('05700 to 0570-0', () => {
  expect(parsePhoneNumber('05700')).toBe('0570-0')
})
test('0570000 to 0570-000', () => {
  expect(parsePhoneNumber('0570000')).toBe('0570-000')
})
test('05700001 to 0570-000-1', () => {
  expect(parsePhoneNumber('05700001')).toBe('0570-000-1')
})

// 0990
test('0990000123 to 0990-000-123', () => {
  expect(parsePhoneNumber('0990000123')).toBe('0990-000-123')
})
test('0990 to 0990', () => {
  expect(parsePhoneNumber('0990')).toBe('0990')
})
test('09900 to 0990-0', () => {
  expect(parsePhoneNumber('09900')).toBe('0990-0')
})
test('0990000 to 0990-000', () => {
  expect(parsePhoneNumber('0990000')).toBe('0990-000')
})
test('09900001 to 0990-000-1', () => {
  expect(parsePhoneNumber('09900001')).toBe('0990-000-1')
})

// 020C
test('0201001234 to 020-100-1234', () => {
  expect(parsePhoneNumber('0201001234')).toBe('020-100-1234')
})
test('020 to 020', () => {
  expect(parsePhoneNumber('020')).toBe('020')
})
test('0201 to 020-1', () => {
  expect(parsePhoneNumber('0201')).toBe('020-1')
})
test('020100 to 020-100', () => {
  expect(parsePhoneNumber('020100')).toBe('020-100')
})
test('0201001 to 020-100-1', () => {
  expect(parsePhoneNumber('0201001')).toBe('020-100-1')
})

// 0200
test('020010000123345 to 0200-10000-12345', () => {
  expect(parsePhoneNumber('02001000012345')).toBe('0200-10000-12345')
})
test('0200 to 0200', () => {
  expect(parsePhoneNumber('0200')).toBe('0200')
})
test('02001 to 0200-1', () => {
  expect(parsePhoneNumber('02001')).toBe('0200-1')
})
test('020010000 to 0200-10000', () => {
  expect(parsePhoneNumber('020010000')).toBe('0200-10000')
})
test('0200100001 to 0200-10000-1', () => {
  expect(parsePhoneNumber('0200100001')).toBe('0200-10000-1')
})

// 070
test('07010012345 to 070-1001-2345', () => {
  expect(parsePhoneNumber('07010012345')).toBe('070-1001-2345')
})
test('070 to 070', () => {
  expect(parsePhoneNumber('070')).toBe('070')
})
test('0701 to 070-1', () => {
  expect(parsePhoneNumber('0701')).toBe('070-1')
})
test('0701001 to 070-1001', () => {
  expect(parsePhoneNumber('0701001')).toBe('070-1001')
})
test('07010012 to 070-1001-2', () => {
  expect(parsePhoneNumber('07010012')).toBe('070-1001-2')
})

// 080
test('08010012345 to 080-1001-2345', () => {
  expect(parsePhoneNumber('08010012345')).toBe('080-1001-2345')
})
test('080 to 080', () => {
  expect(parsePhoneNumber('080')).toBe('080') // 0800 is used
})
test('0801 to 080-1', () => {
  expect(parsePhoneNumber('0801')).toBe('080-1')
})
test('0801001 to 080-1001', () => {
  expect(parsePhoneNumber('0801001')).toBe('080-1001')
})
test('08010012 to 080-1001-2', () => {
  expect(parsePhoneNumber('08010012')).toBe('080-1001-2')
})

// 090
test('09010012345 to 090-1001-2345', () => {
  expect(parsePhoneNumber('09010012345')).toBe('090-1001-2345')
})
test('090 to 090', () => {
  expect(parsePhoneNumber('090')).toBe('090')
})
test('0901 to 090-1', () => {
  expect(parsePhoneNumber('0901')).toBe('090-1')
})
test('0901001 to 090-1001', () => {
  expect(parsePhoneNumber('0901001')).toBe('090-1001')
})
test('09010012 to 090-1001-2', () => {
  expect(parsePhoneNumber('09010012')).toBe('090-1001-2')
})

// 0204
test('02040012345 to 020-400-12345', () => {
  expect(parsePhoneNumber('02040012345')).toBe('020-400-12345')
})
test('0204 to 0204', () => {
  expect(parsePhoneNumber('0204')).toBe('020-4')
})
test('020400 to 020400', () => {
  expect(parsePhoneNumber('020400')).toBe('020-400')
})
test('0204001 to 0204001', () => {
  expect(parsePhoneNumber('0204001')).toBe('020-400-1')
})

// 050
test('05010001234 to 050-1000-1234', () => {
  expect(parsePhoneNumber('05010001234')).toBe('050-1000-1234')
})
test('050 to 050', () => {
  expect(parsePhoneNumber('050')).toBe('050')
})
test('0501 to 0501', () => {
  expect(parsePhoneNumber('0501')).toBe('050-1')
})
test('0501000 to 0501000', () => {
  expect(parsePhoneNumber('0501000')).toBe('050-1000')
})
test('05010001 to 05010001', () => {
  expect(parsePhoneNumber('05010001')).toBe('050-1000-1')
})

// others
test('119 to 119', () => {
  expect(parsePhoneNumber('119')).toBe('119')
})
test('091000 to 091000', () => {
  expect(parsePhoneNumber('091000')).toBe('091000')
})
test('44000 to 44000', () => {
  expect(parsePhoneNumber('44000')).toBe('44000')
})
