# A numeric uuid generator

num-uuid is a simple and efficient package for generating unique numeric UUIDs. The numeric UUID's are simple and easy to generate.
The probability of generating the same UUID twice is practically zero. Let's break the barrier of length. Install num-uuid today and ensure that your unique IDs remain unique.

<br/>

# Features

-   Generate a uuidv4() like numeric UUID.
-   Generate a customized numeric UUID of desired length.
-   num_uuidV2 works fine with big values.
-   Simple, lightweight and FAST

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

# Example

### Using import (ES6)

```
import { num_uuid, num_uuidV2 } from 'num-uuid';
const v1 = num_uuid();
const v2 = num_uuidV2(4,6);
console.log(v1);
console.log(v2);

// output v1 -> 50706496-4722-8213-2305-5387-14053816
// output v2 -> 336932-935804-052740-284780

```

### Using require (CommonJS)

```
const { num_uuid, num_uuidV2 } = require('num-uuid');
const v1 = num_uuid();
const v2 = num_uuidV2(3,8);
console.log(v1);
console.log(v2);

// output v1 -> 63637675-7210-3448-7701-3985-56892695
// output v2 -> 75452281-66088079-04628138
```

### Made with ❤️

_feel free to report bugs at [github](https://github.com/OmkarKamble1/num-uuid/issues)_
