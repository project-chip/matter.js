[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [schema/export](../../README.md) / [\<internal\>](../README.md) / ManualPairingCodeSchema

# Class: ManualPairingCodeSchema

See MatterSpecification.v10.Core § 5.1.4.1 Table 38/39/40

## Extends

- [`Schema`](../../classes/Schema.md)\<[`ManualPairingData`](../../README.md#manualpairingdata), `string`\>

## Constructors

### new ManualPairingCodeSchema()

> **new ManualPairingCodeSchema**(): [`ManualPairingCodeSchema`](ManualPairingCodeSchema.md)

#### Returns

[`ManualPairingCodeSchema`](ManualPairingCodeSchema.md)

#### Inherited from

[`Schema`](../../classes/Schema.md).[`constructor`](../../classes/Schema.md#constructors)

## Methods

### decode()

> **decode**(`encoded`, `validate`): [`ManualPairingData`](../../README.md#manualpairingdata)

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `string` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`ManualPairingData`](../../README.md#manualpairingdata)

#### Inherited from

[`Schema`](../../classes/Schema.md).[`decode`](../../classes/Schema.md#decode)

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

***

### decodeInternal()

> `protected` **decodeInternal**(`encoded`): [`ManualPairingData`](../../README.md#manualpairingdata)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`ManualPairingData`](../../README.md#manualpairingdata)

#### Overrides

[`Schema`](../../classes/Schema.md).[`decodeInternal`](../../classes/Schema.md#decodeinternal)

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L99)

***

### encode()

> **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`ManualPairingData`](../../README.md#manualpairingdata) |

#### Returns

`string`

#### Inherited from

[`Schema`](../../classes/Schema.md).[`encode`](../../classes/Schema.md#encode)

#### Source

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

***

### encodeInternal()

> `protected` **encodeInternal**(`__namedParameters`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`ManualPairingData`](../../README.md#manualpairingdata) |

#### Returns

`string`

#### Overrides

[`Schema`](../../classes/Schema.md).[`encodeInternal`](../../classes/Schema.md#encodeinternal)

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L83)

***

### validate()

> **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | [`ManualPairingData`](../../README.md#manualpairingdata) |

#### Returns

`void`

#### Inherited from

[`Schema`](../../classes/Schema.md).[`validate`](../../classes/Schema.md#validate)

#### Source

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L28)
