[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/switch/export](../modules/behavior_definitions_switch_export.md) / [SwitchServerLogic](../modules/behavior_definitions_switch_export.SwitchServerLogic.md) / Events

# Class: Events

[behavior/definitions/switch/export](../modules/behavior_definitions_switch_export.md).[SwitchServerLogic](../modules/behavior_definitions_switch_export.SwitchServerLogic.md).Events

Enhance the relevant events for rawPosition attribute.

## Hierarchy

- `Events`

  ↳ **`Events`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_switch_export.SwitchServerLogic.Events.md#constructor)

### Properties

- [currentPosition$Changed](behavior_definitions_switch_export.SwitchServerLogic.Events.md#currentposition$changed)
- [currentPosition$Changing](behavior_definitions_switch_export.SwitchServerLogic.Events.md#currentposition$changing)
- [eventNames](behavior_definitions_switch_export.SwitchServerLogic.Events.md#eventnames)
- [initialPress](behavior_definitions_switch_export.SwitchServerLogic.Events.md#initialpress)
- [longPress](behavior_definitions_switch_export.SwitchServerLogic.Events.md#longpress)
- [longRelease](behavior_definitions_switch_export.SwitchServerLogic.Events.md#longrelease)
- [multiPressComplete](behavior_definitions_switch_export.SwitchServerLogic.Events.md#multipresscomplete)
- [multiPressMax$Changed](behavior_definitions_switch_export.SwitchServerLogic.Events.md#multipressmax$changed)
- [multiPressMax$Changing](behavior_definitions_switch_export.SwitchServerLogic.Events.md#multipressmax$changing)
- [multiPressOngoing](behavior_definitions_switch_export.SwitchServerLogic.Events.md#multipressongoing)
- [numberOfPositions$Changed](behavior_definitions_switch_export.SwitchServerLogic.Events.md#numberofpositions$changed)
- [numberOfPositions$Changing](behavior_definitions_switch_export.SwitchServerLogic.Events.md#numberofpositions$changing)
- [rawPosition$Changed](behavior_definitions_switch_export.SwitchServerLogic.Events.md#rawposition$changed)
- [rawPosition$Changing](behavior_definitions_switch_export.SwitchServerLogic.Events.md#rawposition$changing)
- [shortRelease](behavior_definitions_switch_export.SwitchServerLogic.Events.md#shortrelease)
- [switchLatched](behavior_definitions_switch_export.SwitchServerLogic.Events.md#switchlatched)

### Methods

- [[dispose]](behavior_definitions_switch_export.SwitchServerLogic.Events.md#[dispose])
- [addListener](behavior_definitions_switch_export.SwitchServerLogic.Events.md#addlistener)
- [emit](behavior_definitions_switch_export.SwitchServerLogic.Events.md#emit)
- [removeListener](behavior_definitions_switch_export.SwitchServerLogic.Events.md#removelistener)

## Constructors

### constructor

• **new Events**(): [`Events`](behavior_definitions_switch_export.SwitchServerLogic.Events.md)

#### Returns

[`Events`](behavior_definitions_switch_export.SwitchServerLogic.Events.md)

#### Inherited from

SwitchServerBase.Events.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterEvents.ts:25](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterEvents.ts#L25)

## Properties

### currentPosition$Changed

• **currentPosition$Changed**: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

SwitchServerBase.Events.currentPosition$Changed

___

### currentPosition$Changing

• **currentPosition$Changing**: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>\>

#### Inherited from

SwitchServerBase.Events.currentPosition$Changing

___

### eventNames

• **eventNames**: `string`[]

#### Inherited from

SwitchServerBase.Events.eventNames

#### Defined in

[packages/matter.js/src/util/Observable.ts:370](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L370)

___

### initialPress

• `Optional` **initialPress**: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitch`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }\>

#### Inherited from

SwitchServerBase.Events.initialPress

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:439](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L439)

___

### longPress

• `Optional` **longPress**: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }\>

#### Inherited from

SwitchServerBase.Events.longPress

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:443](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L443)

___

### longRelease

• `Optional` **longRelease**: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchLongPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }\>

#### Inherited from

SwitchServerBase.Events.longRelease

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:451](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L451)

___

### multiPressComplete

• `Optional` **multiPressComplete**: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `totalNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }\>

#### Inherited from

SwitchServerBase.Events.multiPressComplete

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:459](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L459)

___

### multiPressMax$Changed

• **multiPressMax$Changed**: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }\>

#### Inherited from

SwitchServerBase.Events.multiPressMax$Changed

___

### multiPressMax$Changing

• **multiPressMax$Changing**: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }\>

#### Inherited from

SwitchServerBase.Events.multiPressMax$Changing

___

### multiPressOngoing

• `Optional` **multiPressOngoing**: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `currentNumberOfPressesCounted`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchMultiPress`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }\>

#### Inherited from

SwitchServerBase.Events.multiPressOngoing

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:455](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L455)

___

### numberOfPositions$Changed

• **numberOfPositions$Changed**: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\>

#### Inherited from

SwitchServerBase.Events.numberOfPositions$Changed

___

### numberOfPositions$Changing

• **numberOfPositions$Changing**: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\>

#### Inherited from

SwitchServerBase.Events.numberOfPositions$Changing

___

### rawPosition$Changed

• **rawPosition$Changed**: [`Observable`](../interfaces/util_export.Observable.md)\<[value: number, oldValue: number, context?: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:277](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L277)

___

### rawPosition$Changing

• **rawPosition$Changing**: [`Observable`](../interfaces/util_export.Observable.md)\<[value: number, oldValue: number, context?: ActionContext], `void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts:278](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/switch/SwitchServer.ts#L278)

___

### shortRelease

• `Optional` **shortRelease**: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `previousPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `momentarySwitchRelease`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }\>

#### Inherited from

SwitchServerBase.Events.shortRelease

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:447](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L447)

___

### switchLatched

• `Optional` **switchLatched**: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `newPosition`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `latchingSwitch`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  }\>

#### Inherited from

SwitchServerBase.Events.switchLatched

#### Defined in

[packages/matter.js/src/cluster/definitions/SwitchCluster.ts:435](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/definitions/SwitchCluster.ts#L435)

## Methods

### [dispose]

▸ **[dispose]**(): `void`

#### Returns

`void`

#### Inherited from

SwitchServerBase.Events.[dispose]

#### Defined in

[packages/matter.js/src/util/Observable.ts:374](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L374)

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

SwitchServerBase.Events.addListener

#### Defined in

[packages/matter.js/src/util/Observable.ts:354](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L354)

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

SwitchServerBase.Events.emit

#### Defined in

[packages/matter.js/src/util/Observable.ts:350](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L350)

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

SwitchServerBase.Events.removeListener

#### Defined in

[packages/matter.js/src/util/Observable.ts:362](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/util/Observable.ts#L362)
