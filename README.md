# A numeric uuid generator

num-uuid is a simple and efficient package for generating unique numeric UUIDs. You can add a prefix or suffix of your choice to create a fully customized ID that fits your requirements. It's quick, easy, and flexible! The probability of generating the same UUID twice is practically zero. 

<br/>

# Features

-  Generate a [uuidv4](https://github.com/OmkarKamble1/num-uuid/issues) like numeric UUID.
-  Generate a customized numeric UUID of desired length.
-  Add prefix and suffix to UUID .
-  num_uuidV2 works fine with big values.
-  Simple, lightweight and fast.
-  Cryptographically generated numeric uid.

<br/>

# Installing

```
npm i num-uuid
```
<br/>

# Usage

### Using import

```
import { num_uuid, num_uuidV2 } from 'num-uuid';
```

### Using require

```
const { num_uuid, num_uuidV2 } = require('num-uuid');
```

<br/>

# Methods

-   num_uuid({prefix: string, suffix: string})
-   num_uuidV2(fieldCount, digits, {prefix: string, suffix: string})

<br/>

# Example

### Using import (ES6)

```
import { num_uuid, num_uuidV2 } from 'num-uuid';

const a1 = num_uuid();
// output a1 -> 50706496-4722-8213-2305-5387-14053816

const a2 = num_uuid({prefix: 'ORDER', suffix: '2023'});
// output a2 -> ORDER-50706496-4722-8213-2305-5387-14053816-2023

const b1 = num_uuidV2(3, 6);
// output b1 -> 336932-935804-052740

const b2 = num_uuidV2(3, 6, {prefix: 'ORDER', suffix: '2023'});
// output b2 -> ORDER-336932-935804-052740-2023
```

### Using require (CommonJS)

```
const { num_uuid, num_uuidV2 } = require('num-uuid');

const a1 = num_uuid();
// output a1 -> 50706496-4722-8213-2305-5387-14053816

const a2 = num_uuid({prefix: 'ORDER', suffix: '2023'});
// output a2 -> ORDER-50706496-4722-8213-2305-5387-14053816-2023

const b1 = num_uuidV2(3, 6);
// output b1 -> 336932-935804-052740

const b2 = num_uuidV2(3, 6, {prefix: 'ORDER', suffix: '2023'});
// output b2 -> ORDER-336932-935804-052740-2023
```

### Made with ❤️

 [github](https://github.com/OmkarKamble1/num-uuid/issues) [npm](https://www.npmjs.com/package/num-uuid).
