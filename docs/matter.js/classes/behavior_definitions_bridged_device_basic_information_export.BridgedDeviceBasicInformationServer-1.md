[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/bridged-device-basic-information/export](../modules/behavior_definitions_bridged_device_basic_information_export.md) / BridgedDeviceBasicInformationServer

# Class: BridgedDeviceBasicInformationServer

[behavior/definitions/bridged-device-basic-information/export](../modules/behavior_definitions_bridged_device_basic_information_export.md).BridgedDeviceBasicInformationServer

This is the default server implementation of BridgedDeviceBasicInformationBehavior.

All attributes are optional except for the "reachable" attribute.

## Hierarchy

- [`BridgedDeviceBasicInformationBehavior`](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md)

  ↳ **`BridgedDeviceBasicInformationServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#constructor)

### Properties

- [#agent](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md##agent)
- [[reference]](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#[reference])
- [agent](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#agent)
- [cluster](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#cluster)
- [context](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#context)
- [endpoint](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#endpoint)
- [events](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#events)
- [features](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#features)
- [session](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#session)
- [state](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#state)
- [Events](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#events-1)
- [ExtensionInterface](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#extensioninterface)
- [Interface](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#interface)
- [Internal](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#internal)
- [cluster](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#cluster-1)
- [defaults](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#defaults)
- [dependencies](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#dependencies)
- [early](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#early)
- [id](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#id)
- [name](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#name)
- [schema](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#schema)
- [supervisor](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#supervisor)
- [supports](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#supports)

### Methods

- [#configurePart](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md##configurepart)
- [#emitReachableChange](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md##emitreachablechange)
- [[asyncDispose]](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#assertattributeenabled)
- [callback](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#callback)
- [initialize](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#initialize)
- [reactTo](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#reactto)
- [requireAttributeEnabled](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#requireattributeenabled)
- [toString](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#tostring)
- [alter](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#alter)
- [enable](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#enable)
- [for](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#for)
- [set](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#set)
- [with](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md#with)

## Constructors

### constructor

• **new BridgedDeviceBasicInformationServer**(`agent`, `backing`): [`BridgedDeviceBasicInformationServer`](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`BridgedDeviceBasicInformationServer`](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationServer-1.md)

#### Inherited from

BridgedDeviceBasicInformationBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[#agent](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[[reference]](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[agent](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[cluster](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[context](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[endpoint](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`EventEmitter`](util_export.EventEmitter-1.md), `never`\> & \{ `reachable$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>\>  } & \{ `hardwareVersion$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `hardwareVersionString$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `manufacturingDate$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `nodeLabel$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\>\> ; `partNumber$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productAppearance$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\>\> ; `productLabel$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productName$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productUrl$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `serialNumber$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `softwareVersion$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `softwareVersionString$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `uniqueId$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `vendorId$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\>\> ; `vendorName$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\>  } & \{ `reachable$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>\>  } & \{ `hardwareVersion$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `hardwareVersionString$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `manufacturingDate$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `nodeLabel$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`string`, `any`\>\> ; `partNumber$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productAppearance$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>, `any`\>\> ; `productLabel$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productName$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productUrl$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `serialNumber$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `softwareVersion$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`number`, `any`\>\> ; `softwareVersionString$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `uniqueId$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `vendorId$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\>\> ; `vendorName$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\>  } & \{ `reachableChanged`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>\>  } & \{ `leave?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `shutDown?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>\> ; `startUp?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>\>  }

Access the behavior's events.

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[events](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[features](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#features)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[session](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<{}, `never`\> & \{ `reachable`: `boolean`  } & \{ `nodeLabel?`: `string`  } & {} & \{ `hardwareVersion?`: `number` ; `hardwareVersionString?`: `string` ; `manufacturingDate?`: `string` ; `partNumber?`: `string` ; `productAppearance?`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\> ; `productLabel?`: `string` ; `productName?`: `string` ; `productUrl?`: `string` ; `serialNumber?`: `string` ; `softwareVersion?`: `number` ; `softwareVersionString?`: `string` ; `uniqueId?`: `string` ; `vendorId?`: [`VendorId`](../modules/datatype_export.md#vendorid) ; `vendorName?`: `string`  }

Access the behavior's state.

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[state](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:311](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L311)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Cluster`](../interfaces/cluster_export.BridgedDeviceBasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

BridgedDeviceBasicInformationBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

▪ `Static` `Readonly` **ExtensionInterface**: `Object`

#### Inherited from

BridgedDeviceBasicInformationBehavior.ExtensionInterface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

___

### Interface

▪ `Static` `Readonly` **Interface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | `never`[] |

#### Inherited from

BridgedDeviceBasicInformationBehavior.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### Internal

▪ `Static` `Readonly` **Internal**: () => {}

#### Type declaration

• **new Internal**(): `Object`

##### Returns

`Object`

#### Inherited from

BridgedDeviceBasicInformationBehavior.Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.BridgedDeviceBasicInformation.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

BridgedDeviceBasicInformationBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.BridgedDeviceBasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>

#### Inherited from

BridgedDeviceBasicInformationBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

BridgedDeviceBasicInformationBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

BridgedDeviceBasicInformationBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"bridgedDeviceBasicInformation"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

BridgedDeviceBasicInformationBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

BridgedDeviceBasicInformationBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

BridgedDeviceBasicInformationBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

BridgedDeviceBasicInformationBehavior.supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

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

BridgedDeviceBasicInformationBehavior.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### #configurePart

▸ **#configurePart**(): `Promise`\<`void`\>

Per the specification, BridgedDeviceBasicInformation may only appear on bridged nodes, and bridged nodes may only
appear under aggregator nodes.

Therefore this default implementation of BridgedDeviceBasicInformation injects the BridgedNode device type on the
associated Endpoint and asserts that its parent is a [AggregatorEndpoint](../modules/endpoint_definitions_system_AggregatorEndpoint.md#aggregatorendpoint).

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts:46](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts#L46)

___

### #emitReachableChange

▸ **#emitReachableChange**(`reachable`): `void`

Per the specification.  Not sure what this adds vs. subscribing to attribute changes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reachable` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts:35](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts#L35)

___

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L198)

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

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#asadmin)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L125)

___

### assertAttributeEnabled

▸ **assertAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`void`

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[assertAttributeEnabled](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#assertattributeenabled)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

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

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[callback](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### initialize

▸ **initialize**(): `Promise`\<`void`\>

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

`Promise`\<`void`\>

#### Overrides

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[initialize](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts:22](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts#L22)

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

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[reactTo](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### requireAttributeEnabled

▸ **requireAttributeEnabled**\<`This`, `K`\>(`this`, `attributeName`): `Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `This` | extends [`Behavior`](behavior_export.Behavior-1.md) |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `This` |
| `attributeName` | `K` |

#### Returns

`Exclude`\<`This`[``"state"``][`K`], `undefined`\>

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[requireAttributeEnabled](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#requireattributeenabled)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[BridgedDeviceBasicInformationBehavior](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md).[toString](../interfaces/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L203)

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

BridgedDeviceBasicInformationBehavior.alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

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

BridgedDeviceBasicInformationBehavior.enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

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

BridgedDeviceBasicInformationBehavior.for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

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

BridgedDeviceBasicInformationBehavior.set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

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

BridgedDeviceBasicInformationBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
