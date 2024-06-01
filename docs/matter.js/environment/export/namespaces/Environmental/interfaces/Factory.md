[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [environment/export](../../../README.md) / [Environmental](../README.md) / Factory

# Interface: Factory\<T\>

A factory for a [Service](Service.md).  Any constructor may be a service factory.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Service`](Service.md) |

## Constructors

### new Factory()

> **new Factory**(...`args`): `T`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

`T`

#### Source

[packages/matter.js/src/environment/Environmental.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environmental.ts#L45)

## Properties

### \[create\]()?

> `optional` **\[create\]**: (`environment`) => `T`

The environment will create the service automatically if the factory supports [create](../README.md#create).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `environment` | [`Environment`](../../../classes/Environment.md) |

#### Returns

`T`

#### Source

[packages/matter.js/src/environment/Environmental.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/Environmental.ts#L50)
