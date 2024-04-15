[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/basic-information/export](../modules/behavior_definitions_basic_information_export.md) / BasicInformationServer

# Class: BasicInformationServer

[behavior/definitions/basic-information/export](../modules/behavior_definitions_basic_information_export.md).BasicInformationServer

This is the default server implementation of BasicInformationBehavior.

## Hierarchy

- [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior-1.md)\<`this`\> & `Omit`\<[`Instance`](../modules/behavior_cluster_export.ClusterBehavior.md#instance)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>, ``"state"`` \| ``"initialize"`` \| typeof `asyncDispose` \| ``"cluster"`` \| ``"events"``\> & `Omit`\<{} & {}, `never`\> & \{ `cluster`: [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\> ; `events`: [`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\> ; `features`: {} ; `state`: [`ClusterState`](../modules/behavior_cluster_export.md#clusterstate)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\> ; `[asyncDispose]`: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>  }

  ↳ **`BasicInformationServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_basic_information_export.BasicInformationServer-1.md#constructor)

### Properties

- [#agent](behavior_definitions_basic_information_export.BasicInformationServer-1.md##agent)
- [[reference]](behavior_definitions_basic_information_export.BasicInformationServer-1.md#[reference])
- [agent](behavior_definitions_basic_information_export.BasicInformationServer-1.md#agent)
- [cluster](behavior_definitions_basic_information_export.BasicInformationServer-1.md#cluster)
- [context](behavior_definitions_basic_information_export.BasicInformationServer-1.md#context)
- [endpoint](behavior_definitions_basic_information_export.BasicInformationServer-1.md#endpoint)
- [events](behavior_definitions_basic_information_export.BasicInformationServer-1.md#events)
- [features](behavior_definitions_basic_information_export.BasicInformationServer-1.md#features)
- [session](behavior_definitions_basic_information_export.BasicInformationServer-1.md#session)
- [state](behavior_definitions_basic_information_export.BasicInformationServer-1.md#state)
- [Events](behavior_definitions_basic_information_export.BasicInformationServer-1.md#events-1)
- [Interface](behavior_definitions_basic_information_export.BasicInformationServer-1.md#interface)
- [Internal](behavior_definitions_basic_information_export.BasicInformationServer-1.md#internal)
- [State](behavior_definitions_basic_information_export.BasicInformationServer-1.md#state-1)
- [cluster](behavior_definitions_basic_information_export.BasicInformationServer-1.md#cluster-1)
- [defaults](behavior_definitions_basic_information_export.BasicInformationServer-1.md#defaults)
- [dependencies](behavior_definitions_basic_information_export.BasicInformationServer-1.md#dependencies)
- [early](behavior_definitions_basic_information_export.BasicInformationServer-1.md#early)
- [id](behavior_definitions_basic_information_export.BasicInformationServer-1.md#id)
- [name](behavior_definitions_basic_information_export.BasicInformationServer-1.md#name)
- [schema](behavior_definitions_basic_information_export.BasicInformationServer-1.md#schema)
- [supervisor](behavior_definitions_basic_information_export.BasicInformationServer-1.md#supervisor)
- [supports](behavior_definitions_basic_information_export.BasicInformationServer-1.md#supports)

### Methods

- [#handleRemovedFabric](behavior_definitions_basic_information_export.BasicInformationServer-1.md##handleremovedfabric)
- [#online](behavior_definitions_basic_information_export.BasicInformationServer-1.md##online)
- [[asyncDispose]](behavior_definitions_basic_information_export.BasicInformationServer-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_basic_information_export.BasicInformationServer-1.md#asadmin)
- [callback](behavior_definitions_basic_information_export.BasicInformationServer-1.md#callback)
- [initialize](behavior_definitions_basic_information_export.BasicInformationServer-1.md#initialize)
- [reactTo](behavior_definitions_basic_information_export.BasicInformationServer-1.md#reactto)
- [toString](behavior_definitions_basic_information_export.BasicInformationServer-1.md#tostring)
- [alter](behavior_definitions_basic_information_export.BasicInformationServer-1.md#alter)
- [enable](behavior_definitions_basic_information_export.BasicInformationServer-1.md#enable)
- [for](behavior_definitions_basic_information_export.BasicInformationServer-1.md#for)
- [set](behavior_definitions_basic_information_export.BasicInformationServer-1.md#set)
- [with](behavior_definitions_basic_information_export.BasicInformationServer-1.md#with)

## Constructors

### constructor

• **new BasicInformationServer**(`agent`, `backing`): [`BasicInformationServer`](behavior_definitions_basic_information_export.BasicInformationServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`BasicInformationServer`](behavior_definitions_basic_information_export.BasicInformationServer-1.md)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:181](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L181)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:280](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L280)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, ``"startUp"`` \| ``"shutDown"`` \| ``"leave"`` \| ``"reachableChanged"`` \| ``"dataModelRevision$Change"`` \| ``"vendorName$Change"`` \| ``"vendorId$Change"`` \| ``"productName$Change"`` \| ``"productId$Change"`` \| ``"nodeLabel$Change"`` \| ``"location$Change"`` \| ``"hardwareVersion$Change"`` \| ``"hardwareVersionString$Change"`` \| ``"softwareVersion$Change"`` \| ``"softwareVersionString$Change"`` \| ``"capabilityMinima$Change"`` \| ``"manufacturingDate$Change"`` \| ``"partNumber$Change"`` \| ``"productUrl$Change"`` \| ``"productLabel$Change"`` \| ``"serialNumber$Change"`` \| ``"localConfigDisabled$Change"`` \| ``"reachable$Change"`` \| ``"uniqueId$Change"`` \| ``"productAppearance$Change"``\> & \{ `capabilityMinima$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>\> ; `dataModelRevision$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `hardwareVersion$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `hardwareVersionString$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `location$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`string`, `any`\>\> ; `nodeLabel$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`string`, `any`\>\> ; `productId$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `productName$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `softwareVersion$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `softwareVersionString$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `vendorId$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\>\> ; `vendorName$Change`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\>  } & \{ `localConfigDisabled$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\>\> ; `manufacturingDate$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `partNumber$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productAppearance$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\>, `any`\>\> ; `productLabel$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productUrl$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `reachable$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\>\> ; `serialNumber$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `uniqueId$Change`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\>  } & \{ `leave`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<`Omit`\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>, `any`\>, ``"optional"``\> & \{ `optional`: ``false``  }\> ; `shutDown`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<`Omit`\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>, ``"optional"``\> & \{ `optional`: ``false``  }\> ; `startUp`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<`Omit`\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>, ``"optional"``\> & \{ `optional`: ``false``  }\>  } & \{ `reachableChanged?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>\>  }

Access the behavior's events.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:290](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L290)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:295](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L295)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, ``"location"`` \| ``"vendorId"`` \| ``"serialNumber"`` \| ``"productId"`` \| ``"vendorName"`` \| ``"softwareVersion"`` \| ``"productName"`` \| ``"nodeLabel"`` \| ``"hardwareVersion"`` \| ``"hardwareVersionString"`` \| ``"softwareVersionString"`` \| ``"manufacturingDate"`` \| ``"partNumber"`` \| ``"productUrl"`` \| ``"productLabel"`` \| ``"reachable"`` \| ``"uniqueId"`` \| ``"productAppearance"`` \| ``"dataModelRevision"`` \| ``"localConfigDisabled"`` \| ``"capabilityMinima"``\> & \{ `location`: `string` ; `nodeLabel`: `string`  } & \{ `localConfigDisabled?`: `boolean` ; `reachable?`: `boolean`  } & \{ `capabilityMinima`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> ; `dataModelRevision`: `number` ; `hardwareVersion`: `number` ; `hardwareVersionString`: `string` ; `productId`: `number` ; `productName`: `string` ; `softwareVersion`: `number` ; `softwareVersionString`: `string` ; `vendorId`: [`VendorId`](../modules/datatype_export.md#vendorid) ; `vendorName`: `string`  } & \{ `manufacturingDate?`: `string` ; `partNumber?`: `string` ; `productAppearance?`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\> ; `productLabel?`: `string` ; `productUrl?`: `string` ; `serialNumber?`: `string` ; `uniqueId?`: `string`  }

Access the behavior's state.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:285](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L285)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:195](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L195)

___

### Interface

▪ `Static` `Readonly` **Interface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | `never`[] |

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:198](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L198)

___

### Internal

▪ `Static` `Readonly` **Internal**: () => {}

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:197](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L197)

___

### State

▪ `Static` `Readonly` **State**: () => [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\>

#### Type declaration

• **new State**(): [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\>

##### Returns

[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).State

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:196](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L196)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L193)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:202](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L202)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:204](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L204)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

___

### id

▪ `Static` `Readonly` **id**: ``"basicInformation"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:188](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L188)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L200)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### supports

▪ `Static` **supports**: (`other`: [`Type`](../interfaces/behavior_export.Behavior.Type.md)) => `boolean`

#### Type declaration

▸ (`other`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

##### Returns

`boolean`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L205)

## Methods

### #handleRemovedFabric

▸ **#handleRemovedFabric**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L74)

___

### #online

▸ **#online**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L67)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `void`

#### Returns

`void`

#### Overrides

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).[asyncDispose]

#### Defined in

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L63)

___

### asAdmin

▸ **asAdmin**(`fn`): `void`

Execute logic with elevated privileges.

The provided function executes with privileges escalated to offline mode.  This is not commonly necessary.

Elevated logic effectively ignores ACLs so should be used with care.

Note that interactions with the behavior will remain elevated until the synchronous completion of this call.
You should only elevate privileges for synchronous logic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | () => `void` | the elevated logic |

#### Returns

`void`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).asAdmin

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### callback

▸ **callback**\<`A`, `R`\>(`reactor`, `options?`): (...`args`: `A`) => `undefined` \| `R`

Create a generic callback function that has the same properties as a [Reactor](../modules/behavior_export.md#reactor).

Like a reactor, the callback's "this" will be bound to an active Behavior instance.
Because of this: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `any`[] |
| `R` | `R` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`A`, `R`\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`fn`

▸ (`...args`): `undefined` \| `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`undefined` \| `R`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### initialize

▸ **initialize**(): `void`

#### Returns

`void`

#### Overrides

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).initialize

#### Defined in

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L24)

___

### reactTo

▸ **reactTo**\<`O`\>(`observable`, `reactor`, `options?`): `void`

Install a [Reactor](../modules/behavior_export.md#reactor).

Important: The reactor MUST be a real JS function - arrow functions will not work!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends [`Observable`](../interfaces/util_export.Observable.md)\<`any`[], `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | `O` |
| `reactor` | [`Reactor`](../modules/behavior_export.md#reactor)\<`Parameters`\<`O`[``"emit"``]\>, `ReturnType`\<`O`[``"emit"``]\>\> |
| `options?` | [`Options`](../interfaces/behavior_export.Reactor.Options.md) |

#### Returns

`void`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).reactTo

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).toString

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Behavior.ts#L203)

___

### alter

▸ **alter**\<`This`, `AlterationsT`\>(`this`, `alterations`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `alterations` | `AlterationsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], `AlterationsT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:233](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L233)

___

### enable

▸ **enable**\<`This`, `FlagsT`\>(`this`, `flags`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `flags` | `FlagsT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<`This`[``"cluster"``], [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<`FlagsT`\>\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L243)

___

### for

▸ **for**\<`This`, `ClusterT`\>(`this`, `cluster`, `schema?`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `ClusterT` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `cluster` | `ClusterT` |
| `schema?` | [`Schema`](../modules/behavior_cluster_export._internal_.md#schema) |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<`ClusterT`, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:219](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L219)

___

### set

▸ **set**\<`This`\>(`this`, `defaults`): `This`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_export.Behavior.Type.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `defaults` | `Partial`\<[`RelaxTypes`](../modules/cluster_export.ClusterType.md#relaxtypes)\<`InstanceType`\<`This`[``"State"``]\>\>\> |

#### Returns

`This`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:241](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L241)

___

### with

▸ **with**\<`This`, `FeaturesT`\>(`this`, `...features`): [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`ClusterType`](../interfaces/cluster_export.ClusterType-1.md), [`Type`](../interfaces/behavior_export.Behavior.Type.md), [`ClusterInterface`](../modules/behavior_cluster_export.md#clusterinterface)\<{}\>\> |
| `FeaturesT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<`This`[``"cluster"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `...features` | `FeaturesT` |

#### Returns

[`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`WithFeatures`](../modules/cluster_export.ClusterComposer.md#withfeatures)\<`This`[``"cluster"``], `FeaturesT`\>, `This`, [`InterfaceOf`](../modules/behavior_cluster_export.ClusterInterface.md#interfaceof)\<`This`\>\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)
