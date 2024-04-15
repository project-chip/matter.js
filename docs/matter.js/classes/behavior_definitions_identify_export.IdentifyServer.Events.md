[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/identify/export](../modules/behavior_definitions_identify_export.md) / [IdentifyServer](../modules/behavior_definitions_identify_export.IdentifyServer.md) / Events

# Class: Events

[behavior/definitions/identify/export](../modules/behavior_definitions_identify_export.md).[IdentifyServer](../modules/behavior_definitions_identify_export.IdentifyServer.md).Events

## Hierarchy

- `Events`

  ↳ **`Events`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_identify_export.IdentifyServer.Events.md#constructor)

### Properties

- [eventNames](behavior_definitions_identify_export.IdentifyServer.Events.md#eventnames)
- [identifyTime$Change](behavior_definitions_identify_export.IdentifyServer.Events.md#identifytime$change)
- [identifyType$Change](behavior_definitions_identify_export.IdentifyServer.Events.md#identifytype$change)
- [startIdentifying](behavior_definitions_identify_export.IdentifyServer.Events.md#startidentifying)
- [stopIdentifying](behavior_definitions_identify_export.IdentifyServer.Events.md#stopidentifying)

### Methods

- [addListener](behavior_definitions_identify_export.IdentifyServer.Events.md#addlistener)
- [emit](behavior_definitions_identify_export.IdentifyServer.Events.md#emit)
- [removeListener](behavior_definitions_identify_export.IdentifyServer.Events.md#removelistener)

## Constructors

### constructor

• **new Events**(): [`Events`](behavior_definitions_identify_export.IdentifyServer.Events.md)

#### Returns

[`Events`](behavior_definitions_identify_export.IdentifyServer.Events.md)

#### Inherited from

IdentifyBehavior.Events.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterEvents.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterEvents.ts#L25)

## Properties

### eventNames

• **eventNames**: `string`[]

#### Inherited from

IdentifyBehavior.Events.eventNames

#### Defined in

[packages/matter.js/src/util/Observable.ts:332](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L332)

___

### identifyTime$Change

• **identifyTime$Change**: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

IdentifyBehavior.Events.identifyTime$Change

___

### identifyType$Change

• **identifyType$Change**: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>\>

#### Inherited from

IdentifyBehavior.Events.identifyType$Change

___

### startIdentifying

• **startIdentifying**: [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L100)

___

### stopIdentifying

• **stopIdentifying**: [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L101)

## Methods

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

IdentifyBehavior.Events.addListener

#### Defined in

[packages/matter.js/src/util/Observable.ts:316](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L316)

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

IdentifyBehavior.Events.emit

#### Defined in

[packages/matter.js/src/util/Observable.ts:312](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L312)

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

IdentifyBehavior.Events.removeListener

#### Defined in

[packages/matter.js/src/util/Observable.ts:324](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Observable.ts#L324)
