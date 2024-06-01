[**@project-chip/matter.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../modules.md) / [behavior/definitions/operational-credentials/export](../../README.md) / [\<internal\>](../README.md) / DeviceCertification

# Class: DeviceCertification

Device certification used by the OperationalCredentials cluster.

## Constructors

### new DeviceCertification()

> **new DeviceCertification**(`config`?, `product`?): [`DeviceCertification`](DeviceCertification.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `config`? | [`Definition`](../namespaces/DeviceCertification/README.md#definition) |
| `product`? | [`ProductDescription`](../../../../../cluster/export/-internal-/interfaces/ProductDescription.md) |

#### Returns

[`DeviceCertification`](DeviceCertification.md)

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L44)

## Properties

### #certificate?

> `private` `optional` **#certificate**: `Uint8Array`

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L23)

***

### #construction

> `private` **#construction**: [`AsyncConstruction`](../../../../../cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`DeviceCertification`](DeviceCertification.md)\>

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L26)

***

### #declaration?

> `private` `optional` **#declaration**: `Uint8Array`

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L25)

***

### #intermediateCertificate?

> `private` `optional` **#intermediateCertificate**: `Uint8Array`

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L24)

***

### #privateKey?

> `private` `optional` **#privateKey**: [`PrivateKey`](../../../../../../crypto/export/interfaces/PrivateKey.md)

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L22)

## Accessors

### certificate

> `get` **certificate**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L32)

***

### construction

> `get` **construction**(): [`AsyncConstruction`](../../../../../cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`DeviceCertification`](DeviceCertification.md)\>

#### Returns

[`AsyncConstruction`](../../../../../cluster/export/-internal-/interfaces/AsyncConstruction.md)\<[`DeviceCertification`](DeviceCertification.md)\>

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L28)

***

### declaration

> `get` **declaration**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L40)

***

### intermediateCertificate

> `get` **intermediateCertificate**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L36)

## Methods

### #assertInitialized()

> `private` **#assertInitialized**(): `object`

Makes sure that the device certification is initialized and construction is completed and returns "Non undefined"
values

#### Returns

`object`

##### certificate

> **certificate**: `Uint8Array`

##### declaration

> **declaration**: `Uint8Array`

##### intermediateCertificate

> **intermediateCertificate**: `Uint8Array`

##### privateKey

> **privateKey**: [`PrivateKey`](../../../../../../crypto/export/interfaces/PrivateKey.md)

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L91)

***

### #initializeFromConfig()

> `private` **#initializeFromConfig**(`config`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `config` | [`Configuration`](../namespaces/DeviceCertification/interfaces/Configuration.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L76)

***

### sign()

> **sign**(`session`, `data`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`SecureSession`](../../../../../../session/export/classes/SecureSession.md)\<[`MatterDevice`](../../../../../cluster/export/-internal-/classes/MatterDevice.md)\> |
| `data` | `Uint8Array` |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/operational-credentials/DeviceCertification.ts#L83)
