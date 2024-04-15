[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [Environmental](../modules/environment_export.Environmental.md) / Factory

# Interface: Factory\<T\>

[environment/export](../modules/environment_export.md).[Environmental](../modules/environment_export.Environmental.md).Factory

A factory for a [Service](environment_export.Environmental.Service.md).  Any constructor may be a service factory.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Service`](environment_export.Environmental.Service.md) |

## Table of contents

### Constructors

- [constructor](environment_export.Environmental.Factory.md#constructor)

### Properties

- [[create]](environment_export.Environmental.Factory.md#[create])

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

[packages/matter.js/src/environment/Environmental.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environmental.ts#L45)

## Properties

### [create]

• `Optional` **[create]**: (`environment`: [`Environment`](../classes/environment_export.Environment.md)) => `T`

The environment will create the service automatically if the factory supports [create](../modules/environment_export.Environmental.md#create).

#### Type declaration

▸ (`environment`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `environment` | [`Environment`](../classes/environment_export.Environment.md) |

##### Returns

`T`

#### Defined in

[packages/matter.js/src/environment/Environmental.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environmental.ts#L50)
