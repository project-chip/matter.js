[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/basic-information/export](../modules/behavior_definitions_basic_information_export.md) / BasicInformationServer

# Class: BasicInformationServer

[behavior/definitions/basic-information/export](../modules/behavior_definitions_basic_information_export.md).BasicInformationServer

This is the default server implementation of BasicInformationBehavior.

## Hierarchy

- [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior-1.md)\<`this`\> & `Omit`\<[`Instance`](../modules/behavior_cluster_export.ClusterBehavior.md#instance)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>, ``"state"`` \| ``"initialize"`` \| typeof `asyncDispose` \| ``"events"`` \| ``"cluster"``\> & `Omit`\<{} & {}, `never`\> & \{ `cluster`: [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\> ; `events`: [`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\> ; `features`: {} ; `state`: [`ClusterState`](../modules/behavior_cluster_export.md#clusterstate)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\> ; `[asyncDispose]`: () => [`MaybePromise`](../modules/util_export.md#maybepromise)\<`void`\>  }

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
- [ExtensionInterface](behavior_definitions_basic_information_export.BasicInformationServer-1.md#extensioninterface)
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

- [#emitReachableChange](behavior_definitions_basic_information_export.BasicInformationServer-1.md##emitreachablechange)
- [#handleRemovedFabric](behavior_definitions_basic_information_export.BasicInformationServer-1.md##handleremovedfabric)
- [#online](behavior_definitions_basic_information_export.BasicInformationServer-1.md##online)
- [[asyncDispose]](behavior_definitions_basic_information_export.BasicInformationServer-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_basic_information_export.BasicInformationServer-1.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_basic_information_export.BasicInformationServer-1.md#assertattributeenabled)
- [callback](behavior_definitions_basic_information_export.BasicInformationServer-1.md#callback)
- [initialize](behavior_definitions_basic_information_export.BasicInformationServer-1.md#initialize)
- [reactTo](behavior_definitions_basic_information_export.BasicInformationServer-1.md#reactto)
- [requireAttributeEnabled](behavior_definitions_basic_information_export.BasicInformationServer-1.md#requireattributeenabled)
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

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).#agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).[reference]

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).agent

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).context

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).endpoint

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, ``"startUp"`` \| ``"shutDown"`` \| ``"leave"`` \| ``"reachableChanged"`` \| ``"dataModelRevision$Changing"`` \| ``"vendorName$Changing"`` \| ``"vendorId$Changing"`` \| ``"productName$Changing"`` \| ``"productId$Changing"`` \| ``"nodeLabel$Changing"`` \| ``"location$Changing"`` \| ``"hardwareVersion$Changing"`` \| ``"hardwareVersionString$Changing"`` \| ``"softwareVersion$Changing"`` \| ``"softwareVersionString$Changing"`` \| ``"capabilityMinima$Changing"`` \| ``"manufacturingDate$Changing"`` \| ``"partNumber$Changing"`` \| ``"productUrl$Changing"`` \| ``"productLabel$Changing"`` \| ``"serialNumber$Changing"`` \| ``"localConfigDisabled$Changing"`` \| ``"reachable$Changing"`` \| ``"uniqueId$Changing"`` \| ``"productAppearance$Changing"`` \| ``"dataModelRevision$Changed"`` \| ``"vendorName$Changed"`` \| ``"vendorId$Changed"`` \| ``"productName$Changed"`` \| ``"productId$Changed"`` \| ``"nodeLabel$Changed"`` \| ``"location$Changed"`` \| ``"hardwareVersion$Changed"`` \| ``"hardwareVersionString$Changed"`` \| ``"softwareVersion$Changed"`` \| ``"softwareVersionString$Changed"`` \| ``"capabilityMinima$Changed"`` \| ``"manufacturingDate$Changed"`` \| ``"partNumber$Changed"`` \| ``"productUrl$Changed"`` \| ``"productLabel$Changed"`` \| ``"serialNumber$Changed"`` \| ``"localConfigDisabled$Changed"`` \| ``"reachable$Changed"`` \| ``"uniqueId$Changed"`` \| ``"productAppearance$Changed"``\> & \{ `capabilityMinima$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>\> ; `dataModelRevision$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `hardwareVersion$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `hardwareVersionString$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `location$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`string`, `any`\>\> ; `nodeLabel$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`string`, `any`\>\> ; `productId$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `productName$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `softwareVersion$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `softwareVersionString$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `vendorId$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\>\> ; `vendorName$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\>  } & \{ `localConfigDisabled$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\>\> ; `manufacturingDate$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `partNumber$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productAppearance$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\>, `any`\>\> ; `productLabel$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productUrl$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `reachable$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\>\> ; `serialNumber$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `uniqueId$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\>  } & \{ `capabilityMinima$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>\> ; `dataModelRevision$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `hardwareVersion$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `hardwareVersionString$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `location$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`string`, `any`\>\> ; `nodeLabel$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`string`, `any`\>\> ; `productId$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `productName$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `softwareVersion$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `softwareVersionString$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\> ; `vendorId$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\>\> ; `vendorName$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`string`, `any`\>\>  } & \{ `localConfigDisabled$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalWritableAttribute`](../interfaces/cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\>\> ; `manufacturingDate$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `partNumber$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productAppearance$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\>, `any`\>\> ; `productLabel$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `productUrl$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `reachable$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`boolean`, `any`\>\> ; `serialNumber$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\> ; `uniqueId$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalFixedAttribute`](../interfaces/cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\>\>  } & \{ `leave`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<`Omit`\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\>, `any`\>, ``"optional"``\> & \{ `optional`: ``false``  }\> ; `shutDown`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<`Omit`\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<`void`, `any`\>, ``"optional"``\> & \{ `optional`: ``false``  }\> ; `startUp`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<`Omit`\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\>, ``"optional"``\> & \{ `optional`: ``false``  }\>  } & \{ `reachableChanged?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\>  }\>, `any`\>\>  }

Access the behavior's events.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).events

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).features

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).session

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• `Readonly` **state**: `Omit`\<[`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, ``"location"`` \| ``"vendorId"`` \| ``"serialNumber"`` \| ``"productId"`` \| ``"vendorName"`` \| ``"softwareVersion"`` \| ``"productName"`` \| ``"nodeLabel"`` \| ``"hardwareVersion"`` \| ``"hardwareVersionString"`` \| ``"softwareVersionString"`` \| ``"manufacturingDate"`` \| ``"partNumber"`` \| ``"productUrl"`` \| ``"productLabel"`` \| ``"reachable"`` \| ``"uniqueId"`` \| ``"productAppearance"`` \| ``"dataModelRevision"`` \| ``"localConfigDisabled"`` \| ``"capabilityMinima"``\> & \{ `location`: `string` ; `nodeLabel`: `string`  } & \{ `localConfigDisabled?`: `boolean` ; `reachable?`: `boolean`  } & \{ `capabilityMinima`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\> ; `dataModelRevision`: `number` ; `hardwareVersion`: `number` ; `hardwareVersionString`: `string` ; `productId`: `number` ; `productName`: `string` ; `softwareVersion`: `number` ; `softwareVersionString`: `string` ; `vendorId`: [`VendorId`](../modules/datatype_export.md#vendorid) ; `vendorName`: `string`  } & \{ `manufacturingDate?`: `string` ; `partNumber?`: `string` ; `productAppearance?`: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\> ; `productLabel?`: `string` ; `productUrl?`: `string` ; `serialNumber?`: `string` ; `uniqueId?`: `string`  }

Access the behavior's state.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).state

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:140](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L140)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:311](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L311)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

▪ `Static` `Readonly` **ExtensionInterface**: `Object`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).ExtensionInterface

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).Interface

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).Internal

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:217](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L217)

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

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), [`ElementFlagAlterations`](../modules/cluster_export.ElementModifier.md#elementflagalterations)\<\{ `events`: \{ `leave`: ``true`` = true; `shutDown`: ``true`` = true; `startUp`: ``true`` = true }  }\>\>, [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.BasicInformation.Cluster.md), typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), \{ `components`: `never`[] = [] }\>\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"basicInformation"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).supervisor

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### #emitReachableChange

▸ **#emitReachableChange**(`reachable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reachable` | `boolean` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:88](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L88)

___

### #handleRemovedFabric

▸ **#handleRemovedFabric**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:92](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L92)

___

### #online

▸ **#online**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:81](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L81)

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

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:77](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L77)

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).assertAttributeEnabled

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).callback

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L226)

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

[packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts:27](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/basic-information/BasicInformationServer.ts#L27)

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).requireAttributeEnabled

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).alter

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).enable

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).for

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).set

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

BasicInformationBehavior.enable(\{
    events: \{ startUp: true, shutDown: true, leave: true },
}).with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
