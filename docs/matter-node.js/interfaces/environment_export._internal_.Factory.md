[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [\<internal\>](../modules/environment_export._internal_.md) / Factory

# Interface: Factory\<T\>

[environment/export](../modules/environment_export.md).[\<internal\>](../modules/environment_export._internal_.md).Factory

A factory for a [Service](environment_export._internal_.Service.md).  Any constructor may be a service factory.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Service`](environment_export._internal_.Service.md) |

## Table of contents

### Constructors

- [constructor](environment_export._internal_.Factory.md#constructor)

### Properties

- [[create]](environment_export._internal_.Factory.md#[create])

## Constructors

### constructor

• **new Factory**(`...args`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/environment/Environmental.d.ts:38

## Properties

### [create]

• `Optional` **[create]**: (`environment`: [`Environment`](../classes/environment_export._internal_.Environment.md)) => `T`

The environment will create the service automatically if the factory supports create.

#### Type declaration

▸ (`environment`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](../classes/environment_export._internal_.Environment.md) |

##### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/environment/Environmental.d.ts:42
