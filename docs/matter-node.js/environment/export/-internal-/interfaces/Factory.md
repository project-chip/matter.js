[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [environment/export](../../README.md) / [\<internal\>](../README.md) / Factory

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

packages/matter.js/dist/esm/environment/Environmental.d.ts:38

## Properties

### \[create\]()?

> `optional` **\[create\]**: (`environment`) => `T`

The environment will create the service automatically if the factory supports create.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `environment` | [`Environment`](../classes/Environment.md) |

#### Returns

`T`

#### Source

packages/matter.js/dist/esm/environment/Environmental.d.ts:42
