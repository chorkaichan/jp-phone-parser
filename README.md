# JP Phone Parser

A module parses numbers according to the Japanese phone number pattern.

![Tests](https://github.com/chorkaichan/jp-phone-parser/actions/workflows/main.yml/badge.svg)
![npm](https://img.shields.io/npm/v/@chorkaichan/jp-phone-parser.svg)
![downloads](https://img.shields.io/npm/dt/@chorkaichan/jp-phone-parser)

## Installation

### via npm
```console
npm install @chorkaichan/jp-phone-parser --save
```

```js
// CommonJS
const phoneParser = require('@chorkaichan/jp-phone-parser');
// ES modules
import phoneParser from '@chorkaichan/jp-phone-parser';
```

### via CDN direct link
```html
<script src="https://cdn.jsdelivr.net/npm/@chorkaichan/jp-phone-parser/dist/jp-phone-parser.min.js"></script>
```

### direct download
```console
curl -o https://cdn.jsdelivr.net/npm/@chorkaichan/jp-phone-parser/dist/jp-phone-parser.min.js
```

```js
<script src="/path/to/jp-phone-parser.min.js"></script>
```

## Usage
```js
// 03-* (Tokyo)
console.log(phoneParser('0')) // '0'
console.log(phoneParser('03')) // '03'
console.log(phoneParser('031')) // '03-1'
console.log(phoneParser('0312345')) // '03-1234-5'
console.log(phoneParser('0312345678')) // '03-1234-5678'

// 05979-* (Kumano, Mie)
console.log(phoneParser('05979')) // '05979'
console.log(phoneParser('059792')) // '05979-2'
console.log(phoneParser('0597921')) // '05979-2-1'
console.log(phoneParser('0597921234')) // '05979-2-1234'

// 090-* (mobile)
console.log(phoneParser('0901')) // '090-1'
console.log(phoneParser('09010012')) // '090-1001-2'
console.log(phoneParser('09010012345')) // '090-1001-2345'

// 0200-* (for data transmission)
console.log(phoneParser('0200-1')) // '0200-1'
console.log(phoneParser('0200-10000-12345')) // '0200-10000-12345'

// change delimiter
console.log(phoneParser('0312345678', ' ')) // '03 1234 5678'

// type-safe
console.log(phoneParser('')) // ''
console.log(phoneParser(null)) // ''
console.log(phoneParser(undefined)) // ''
console.log(phoneParser(123456)) // ''
```

## License
This project is licensed under [MIT license](https://opensource.org/licenses/MIT).
