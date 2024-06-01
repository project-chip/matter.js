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
- [identifyTime$Changed](behavior_definitions_identify_export.IdentifyServer.Events.md#identifytime$changed)
- [identifyTime$Changing](behavior_definitions_identify_export.IdentifyServer.Events.md#identifytime$changing)
- [identifyType$Changed](behavior_definitions_identify_export.IdentifyServer.Events.md#identifytype$changed)
- [identifyType$Changing](behavior_definitions_identify_export.IdentifyServer.Events.md#identifytype$changing)
- [startIdentifying](behavior_definitions_identify_export.IdentifyServer.Events.md#startidentifying)
- [stopIdentifying](behavior_definitions_identify_export.IdentifyServer.Events.md#stopidentifying)

### Methods

- [[dispose]](behavior_definitions_identify_export.IdentifyServer.Events.md#[dispose])
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

[packages/matter.js/src/behavior/cluster/ClusterEvents.ts:25](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/cluster/ClusterEvents.ts#L25)

## Properties

### eventNames

• **eventNames**: `string`[]

#### Inherited from

IdentifyBehavior.Events.eventNames

#### Defined in

[packages/matter.js/src/util/Observable.ts:370](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L370)

___

### identifyTime$Changed

• **identifyTime$Changed**: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

IdentifyBehavior.Events.identifyTime$Changed

___

### identifyTime$Changing

• **identifyTime$Changing**: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

IdentifyBehavior.Events.identifyTime$Changing

___

### identifyType$Changed

• **identifyType$Changed**: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>\>

#### Inherited from

IdentifyBehavior.Events.identifyType$Changed

___

### identifyType$Changing

• **identifyType$Changing**: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`IdentifyType`](../enums/cluster_export.Identify.IdentifyType.md), `any`\>\>

#### Inherited from

IdentifyBehavior.Events.identifyType$Changing

___

### startIdentifying

• **startIdentifying**: [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:99](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L99)

___

### stopIdentifying

• **stopIdentifying**: [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts:100](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/behavior/definitions/identify/IdentifyServer.ts#L100)

## Methods

### [dispose]

▸ **[dispose]**(): `void`

#### Returns

`void`

#### Inherited from

IdentifyBehavior.Events.[dispose]

#### Defined in

[packages/matter.js/src/util/Observable.ts:374](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L374)

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

IdentifyBehavior.Events.addListener

#### Defined in

[packages/matter.js/src/util/Observable.ts:354](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L354)

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

[packages/matter.js/src/util/Observable.ts:350](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L350)

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

[packages/matter.js/src/util/Observable.ts:362](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/util/Observable.ts#L362)
