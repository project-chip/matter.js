[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/low-power/export](../modules/behavior_definitions_low_power_export.md) / [LowPowerServer](../modules/behavior_definitions_low_power_export.LowPowerServer.md) / Events

# Class: Events

[behavior/definitions/low-power/export](../modules/behavior_definitions_low_power_export.md).[LowPowerServer](../modules/behavior_definitions_low_power_export.LowPowerServer.md).Events

## Hierarchy

- `Events`

  ↳ **`Events`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_low_power_export.LowPowerServer.Events.md#constructor)

### Properties

- [enterLowPowerMode](behavior_definitions_low_power_export.LowPowerServer.Events.md#enterlowpowermode)
- [eventNames](behavior_definitions_low_power_export.LowPowerServer.Events.md#eventnames)

### Methods

- [[dispose]](behavior_definitions_low_power_export.LowPowerServer.Events.md#[dispose])
- [addListener](behavior_definitions_low_power_export.LowPowerServer.Events.md#addlistener)
- [emit](behavior_definitions_low_power_export.LowPowerServer.Events.md#emit)
- [removeListener](behavior_definitions_low_power_export.LowPowerServer.Events.md#removelistener)

## Constructors

### constructor

• **new Events**(): [`Events`](behavior_definitions_low_power_export.LowPowerServer.Events.md)

#### Returns

[`Events`](behavior_definitions_low_power_export.LowPowerServer.Events.md)

#### Inherited from

LowPowerBehavior.Events.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterEvents.ts:25](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterEvents.ts#L25)

## Properties

### enterLowPowerMode

• **enterLowPowerMode**: [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/low-power/LowPowerServer.ts:23](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/low-power/LowPowerServer.ts#L23)

___

### eventNames

• **eventNames**: `string`[]

#### Inherited from

LowPowerBehavior.Events.eventNames

#### Defined in

[packages/matter.js/src/util/Observable.ts:370](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/util/Observable.ts#L370)

## Methods

### [dispose]

▸ **[dispose]**(): `void`

#### Returns

`void`

#### Inherited from

LowPowerBehavior.Events.[dispose]

#### Defined in

[packages/matter.js/src/util/Observable.ts:374](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/util/Observable.ts#L374)

___

### addListener

▸ **addListener**\<`This`, `N`\>(`this`, `name`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `N` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `name` | `N` |
| `handler` | [`ObserverOf`](../modules/util_export.EventEmitter.md#observerof)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

LowPowerBehavior.Events.addListener

#### Defined in

[packages/matter.js/src/util/Observable.ts:354](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/util/Observable.ts#L354)

___

### emit

▸ **emit**\<`This`, `N`\>(`this`, `name`, `...payload`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `N` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `name` | `N` |
| `...payload` | [`PayloadOf`](../modules/util_export.EventEmitter.md#payloadof)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

LowPowerBehavior.Events.emit

#### Defined in

[packages/matter.js/src/util/Observable.ts:350](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/util/Observable.ts#L350)

___

### removeListener

▸ **removeListener**\<`This`, `N`\>(`this`, `name`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | `This` |
| `N` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `name` | `N` |
| `handler` | [`ObserverOf`](../modules/util_export.EventEmitter.md#observerof)\<`This`, `N`\> |

#### Returns

`void`

#### Inherited from

LowPowerBehavior.Events.removeListener

#### Defined in

[packages/matter.js/src/util/Observable.ts:362](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/util/Observable.ts#L362)
