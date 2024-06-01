[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [schema/export](../../README.md) / [\<internal\>](../README.md) / QrPairingCodeSchema

# Class: QrPairingCodeSchema

Define a schema to encode / decode convert type T to type E.

## Extends

- [`Schema`](../../classes/Schema.md)\<[`QrCodeData`](../../README.md#qrcodedata), `string`\>

## Constructors

### new QrPairingCodeSchema()

> **new QrPairingCodeSchema**(): [`QrPairingCodeSchema`](QrPairingCodeSchema.md)

#### Returns

[`QrPairingCodeSchema`](QrPairingCodeSchema.md)

#### Inherited from

[`Schema`](../../classes/Schema.md).[`constructor`](../../classes/Schema.md#constructors)

## Methods

### decode()

> **decode**(`encoded`, `validate`): [`TypeFromBitSchema`](../../README.md#typefrombitschemat)\<`object`\>

Decodes the encoded data using the schema.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `encoded` | `string` | `undefined` |
| `validate` | `boolean` | `true` |

#### Returns

[`TypeFromBitSchema`](../../README.md#typefrombitschemat)\<`object`\>

##### discoveryCapabilities

> **discoveryCapabilities**: [`BitField`](../../README.md#bitfield)

##### discriminator

> **discriminator**: [`BitField`](../../README.md#bitfield)

##### flowType

> **flowType**: [`BitFieldEnum`](../../README.md#bitfieldenume)\<[`CommissioningFlowType`](../../enumerations/CommissioningFlowType.md)\>

##### passcode

> **passcode**: [`BitField`](../../README.md#bitfield)

##### productId

> **productId**: [`BitField`](../../README.md#bitfield)

##### vendorId

> **vendorId**: [`BitField`](../../README.md#bitfield)

##### version

> **version**: [`BitField`](../../README.md#bitfield)

#### Inherited from

[`Schema`](../../classes/Schema.md).[`decode`](../../classes/Schema.md#decode)

#### Source

[packages/matter.js/src/schema/Schema.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L16)

***

### decodeInternal()

> `protected` **decodeInternal**(`encoded`): [`TypeFromBitSchema`](../../README.md#typefrombitschemat)\<`object`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `encoded` | `string` |

#### Returns

[`TypeFromBitSchema`](../../README.md#typefrombitschemat)\<`object`\>

##### discoveryCapabilities

> **discoveryCapabilities**: [`BitField`](../../README.md#bitfield)

##### discriminator

> **discriminator**: [`BitField`](../../README.md#bitfield)

##### flowType

> **flowType**: [`BitFieldEnum`](../../README.md#bitfieldenume)\<[`CommissioningFlowType`](../../enumerations/CommissioningFlowType.md)\>

##### passcode

> **passcode**: [`BitField`](../../README.md#bitfield)

##### productId

> **productId**: [`BitField`](../../README.md#bitfield)

##### vendorId

> **vendorId**: [`BitField`](../../README.md#bitfield)

##### version

> **version**: [`BitField`](../../README.md#bitfield)

#### Overrides

[`Schema`](../../classes/Schema.md).[`decodeInternal`](../../classes/Schema.md#decodeinternal)

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L65)

***

### encode()

> **encode**(`value`): `string`

Encodes the value using the schema.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`TypeFromBitSchema`](../../README.md#typefrombitschemat)\<`object`\> |

#### Returns

`string`

#### Inherited from

[`Schema`](../../classes/Schema.md).[`encode`](../../classes/Schema.md#encode)

#### Source

[packages/matter.js/src/schema/Schema.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L10)

***

### encodeInternal()

> `protected` **encodeInternal**(`payloadData`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `payloadData` | [`TypeFromBitSchema`](../../README.md#typefrombitschemat)\<`object`\> |

#### Returns

`string`

#### Overrides

[`Schema`](../../classes/Schema.md).[`encodeInternal`](../../classes/Schema.md#encodeinternal)

#### Source

[packages/matter.js/src/schema/PairingCodeSchema.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/PairingCodeSchema.ts#L61)

***

### validate()

> **validate**(`_value`): `void`

Optional validator that can be used to enforce constraints on the data before encoding / after decoding.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_value` | [`TypeFromBitSchema`](../../README.md#typefrombitschemat)\<`object`\> |

#### Returns

`void`

#### Inherited from

[`Schema`](../../classes/Schema.md).[`validate`](../../classes/Schema.md#validate)

#### Source

[packages/matter.js/src/schema/Schema.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/schema/Schema.ts#L28)
