# A numeric uuid generator

#### num-uuid is a simple and efficient package for generating unique numeric UUIDs. It provides a fast and reliable way to create UUIDs with a length of total 37 characters that is 32 digits seperated with 5 "-", which makes the probability of generating the same UUID twice practically zero. Install num-uuid today and ensure that your unique IDs remain unique.

<br/>

# Features

#### Generate a uuidv4() like numeric UUID.

<br/>

# Installing

#### Using npm

```
npm i num-uuid
```

<br/>

# Usage

#### Using import

```
import { num_uuid } from 'num-uuid';
```

#### Using require

```
const num_uuid = require('num-uuid');
```

# Example

#### Using import

```
import { num_uuid } from 'num-uuid';
const id = num_uuid();
console.log(id);
// output -> 50706496-4722-8213-2305-5387-14053816
```

#### Using require

```
const num_uuid = require('num-uuid');
const id = num_uuid();
console.log(id);
// output -> 63637675-7210-3448-7701-3985-56892695
```
