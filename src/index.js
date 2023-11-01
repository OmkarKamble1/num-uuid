const crypto = require('crypto');
// **num_uuid version 1**
/* it does not accept any arguments
 example => 92987584-1777-3154-0865-0082-50182599
*/
function num_uuid(options = { prefix: '', suffix: '' }) {
	if (arguments.length > 1) {
		throw new Error(
			`Expected one optional argument but found ${arguments.length}.`
		);
	}
	const { prefix, suffix } = options;
	const id = [];
	if (prefix) {
		id.push(prefix);
	}
	for (let i = 0; i <= 5; i++) {
		let id_field;
		if (i === 0 || i === 5) {
			id_field = crypto.randomBytes(16).readBigUInt64LE().toString().substring(2, 10);
			if (id_field.length < 8) {
				const temp = crypto.randomBytes(16).readBigUInt64LE()
					.toString()
					.substring(2, 8 - id_field.length + 2);
				id_field.concat(temp);
			}
			id.push(id_field);
		} else {
			id_field = crypto.randomBytes(16).readBigUInt64LE().toString().substring(2, 6);
			if (id_field.length < 4) {
				const temp = crypto.randomBytes(16).readBigUInt64LE()
					.toString()
					.substring(2, 4 - id_field.length + 2);
				id_field.concat(temp);
			}
			id.push(id_field);
		}
	}
	if (suffix) {
		id.push(suffix);
	}
	const generated_id = id.join('-');

	return generated_id;
}

// **num_uuid version 2**
/* it accepts two arguments fieldCount and digits
 fieldCount => number of partitions in the uuid separated by "-"
 digit => number of digits in one partition of the uuid
 example num_uuidV2(8,5) => 22038-03483-33887-62740-21159-87793-33838-30612
*/
function num_uuidV2(
	fieldCount = 4,
	digits = 6,
	options = { prefix: '', suffix: '' }
) {
	if (arguments.length < 2 || arguments.length > 3) {
		throw new Error(
			`Expected two arguments but found ${arguments.length}.`
		);
	}
	if (typeof digits !== 'number' || typeof fieldCount !== 'number') {
		throw new TypeError('Both arguments must be of type numbers.');
	}
	if (digits <= 0 || fieldCount <= 0) {
		throw new RangeError('Arguments must be positive and greater than 0.');
	}
	const { prefix, suffix } = options;
	const id = [];
	if (prefix) {
		id.push(prefix);
	}
	for (let i = 0; i < fieldCount; i++) {
		let id_field = crypto.randomBytes(16).readBigUInt64LE()
			.toString()
			.substring(2, digits + 2);
		while (id_field.length < digits) {
			const temp = crypto.randomBytes(16).readBigUInt64LE()
				.toString()
				.substring(2, digits - id_field.length + 2);
			id_field = id_field.concat(temp);
		}

		id.push(id_field);
	}
	if (suffix) {
		id.push(suffix);
	}
	const generated_id = id.join('-');

	return generated_id;
}

module.exports = { num_uuid, num_uuidV2 };
