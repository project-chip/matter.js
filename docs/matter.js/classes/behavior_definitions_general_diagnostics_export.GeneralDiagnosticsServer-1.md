[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/general-diagnostics/export](../modules/behavior_definitions_general_diagnostics_export.md) / GeneralDiagnosticsServer

# Class: GeneralDiagnosticsServer

[behavior/definitions/general-diagnostics/export](../modules/behavior_definitions_general_diagnostics_export.md).GeneralDiagnosticsServer

This is the default server implementation of GeneralDiagnosticsBehavior.

## Hierarchy

- [`GeneralDiagnosticsBehavior`](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md)

  ↳ **`GeneralDiagnosticsServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#constructor)

### Properties

- [#agent](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md##agent)
- [[reference]](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#[reference])
- [agent](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#agent)
- [cluster](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#cluster)
- [context](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#context)
- [endpoint](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#endpoint)
- [events](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#events)
- [features](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#features)
- [internal](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#internal)
- [session](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#session)
- [state](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#state)
- [Events](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#events-1)
- [Interface](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#interface)
- [cluster](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#cluster-1)
- [defaults](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#defaults)
- [dependencies](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#dependencies)
- [early](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#early)
- [id](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#id)
- [name](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#name)
- [schema](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#schema)
- [supervisor](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#supervisor)
- [supports](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#supports)

### Methods

- [#online](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md##online)
- [#triggerActiveHardwareFaultsChangedEvent](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md##triggeractivehardwarefaultschangedevent)
- [#triggerActiveNetworkFaultsChangedEvent](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md##triggeractivenetworkfaultschangedevent)
- [#triggerActiveRadioFaultsChangedEvent](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md##triggeractiveradiofaultschangedevent)
- [#updateNetworkList](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md##updatenetworklist)
- [#updateTotalOperationalHoursCounter](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md##updatetotaloperationalhourscounter)
- [[asyncDispose]](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#[asyncdispose])
- [asAdmin](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#assertattributeenabled)
- [callback](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#callback)
- [clearHardwareFault](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#clearhardwarefault)
- [clearNetworkFault](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#clearnetworkfault)
- [clearRadioFault](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#clearradiofault)
- [initialize](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#initialize)
- [reactTo](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#reactto)
- [registerHardwareFault](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#registerhardwarefault)
- [registerNetworkFault](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#registernetworkfault)
- [registerRadioFault](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#registerradiofault)
- [requireAttributeEnabled](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#requireattributeenabled)
- [testEventTrigger](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#testeventtrigger)
- [toString](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#tostring)
- [alter](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#alter)
- [enable](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#enable)
- [for](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#for)
- [set](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#set)
- [with](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md#with)

## Constructors

### constructor

• **new GeneralDiagnosticsServer**(`agent`, `backing`): [`GeneralDiagnosticsServer`](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`GeneralDiagnosticsServer`](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer-1.md)

#### Inherited from

GeneralDiagnosticsBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[#agent](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[[reference]](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[agent](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[cluster](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[context](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[endpoint](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `networkInterfaces$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\>\> ; `rebootCount$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `testEventTriggersEnabled$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>\>  } & \{ `activeHardwareFaults$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\>\> ; `activeNetworkFaults$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\>\> ; `activeRadioFaults$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\>\> ; `bootReason$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\>\> ; `totalOperationalHours$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `upTime$Changing`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>\>  } & \{ `networkInterfaces$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\>\> ; `rebootCount$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `testEventTriggersEnabled$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\>\>  } & \{ `activeHardwareFaults$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\>\> ; `activeNetworkFaults$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\>\> ; `activeRadioFaults$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\>\> ; `bootReason$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\>\> ; `totalOperationalHours$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\>\> ; `upTime$Changed`: `undefined` \| [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>\>  } & \{ `bootReason`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\>\>  } & \{ `hardwareFaultChange?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\>\> ; `networkFaultChange?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\>\> ; `radioFaultChange?`: [`EventObservable`](../modules/behavior_cluster_export.ClusterEvents.md#eventobservable)\<[`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>\>  }

Access the behavior's events.

#### Inherited from

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[events](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[features](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#features)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### internal

• `Protected` **internal**: [`Internal`](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.Internal.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:27](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L27)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[session](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• **state**: [`State`](behavior_definitions_general_diagnostics_export.GeneralDiagnosticsServer.State.md)

Access the behavior's state.

#### Overrides

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[state](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:28](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L28)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Cluster`](../interfaces/cluster_export.GeneralDiagnostics.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`GeneralDiagnosticsInterface`](../modules/behavior_definitions_general_diagnostics_export.md#generaldiagnosticsinterface)\>\>

#### Inherited from

GeneralDiagnosticsBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`GeneralDiagnosticsInterface`](../modules/behavior_definitions_general_diagnostics_export.md#generaldiagnosticsinterface)

#### Inherited from

GeneralDiagnosticsBehavior.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.GeneralDiagnostics.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

GeneralDiagnosticsBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.GeneralDiagnostics.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`GeneralDiagnosticsInterface`](../modules/behavior_definitions_general_diagnostics_export.md#generaldiagnosticsinterface)\>\>

#### Inherited from

GeneralDiagnosticsBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

GeneralDiagnosticsBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

GeneralDiagnosticsBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"generalDiagnostics"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

GeneralDiagnosticsBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

GeneralDiagnosticsBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

GeneralDiagnosticsBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

GeneralDiagnosticsBehavior.supervisor

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

GeneralDiagnosticsBehavior.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### #online

▸ **#online**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:189](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L189)

___

### #triggerActiveHardwareFaultsChangedEvent

▸ **#triggerActiveHardwareFaultsChangedEvent**(`current`, `previous`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | [`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[] |
| `previous` | [`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:100](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L100)

___

### #triggerActiveNetworkFaultsChangedEvent

▸ **#triggerActiveNetworkFaultsChangedEvent**(`current`, `previous`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | [`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[] |
| `previous` | [`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:176](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L176)

___

### #triggerActiveRadioFaultsChangedEvent

▸ **#triggerActiveRadioFaultsChangedEvent**(`current`, `previous`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `current` | [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[] |
| `previous` | [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:138](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L138)

___

### #updateNetworkList

▸ **#updateNetworkList**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:215](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L215)

___

### #updateTotalOperationalHoursCounter

▸ **#updateTotalOperationalHoursCounter**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:208](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L208)

___

### [asyncDispose]

▸ **[asyncDispose]**(): `Promise`\<`void`\>

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

`Promise`\<`void`\>

#### Overrides

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:276](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L276)

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

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#asadmin)

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

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[assertAttributeEnabled](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#assertattributeenabled)

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

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[callback](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### clearHardwareFault

▸ **clearHardwareFault**(`faultType`): `void`

Clear a hardware fault. This convenience method updates the activeHardwareFaults attribute and sends out the
HardwareFaultChanged event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md) | The hardware fault to clear. |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:95](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L95)

___

### clearNetworkFault

▸ **clearNetworkFault**(`faultType`): `void`

Clear a network fault. This convenience method updates the activeNetworkFaults attribute and sends out the
NetworkFaultChanged event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md) | The network fault to clear. |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:171](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L171)

___

### clearRadioFault

▸ **clearRadioFault**(`faultType`): `void`

Clear a radio fault. This convenience method updates the activeRadioFaults attribute and sends out the
RadioFaultChanged event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md) | The radio fault to clear. |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:133](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L133)

___

### initialize

▸ **initialize**(): `void`

Behaviors are ephemeral and should not perform initialization in their constructor.  They can override this
method instead.

This method may be synchronous or asyncronous.  If asynchronous, the behavior will not be available for external
use until initialization completes.

#### Returns

`void`

#### Overrides

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[initialize](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:37](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L37)

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

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[reactTo](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### registerHardwareFault

▸ **registerHardwareFault**(`faultType`): `void`

Register a hardware fault. This convenience method updates the activeHardwareFaults attribute and sends out the
HardwareFaultChanged event. Make sure to clear the fault when it is resolved.
This method requires that the activeHardwareFaults attribute is activated when the cluster gets initialized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md) | The hardware fault to register. |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:82](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L82)

___

### registerNetworkFault

▸ **registerNetworkFault**(`faultType`): `void`

Register a network fault. This convenience method updates the activeNetworkFaults attribute and sends out the
NetworkFaultChanged event. Make sure to clear the fault when it is resolved.
This method requires that the activeNetworkFaults attribute is activated when the cluster gets initialized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md) | The network fault to register. |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:158](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L158)

___

### registerRadioFault

▸ **registerRadioFault**(`faultType`): `void`

Register a radio fault. This convenience method updates the activeRadioFaults attribute and sends out the
RadioFaultChanged event. Make sure to clear the fault when it is resolved.
This method requires that the activeRadioFaults attribute is activated when the cluster gets initialized.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `faultType` | [`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md) | The radio fault to register. |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:120](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L120)

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

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[requireAttributeEnabled](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#requireattributeenabled)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### testEventTrigger

▸ **testEventTrigger**(`«destructured»`): `void`

This command shall be supported to provide a means for certification tests to trigger some test-
plan-specific events, necessary to assist in automation of device interactions for some certification test
cases. This command shall NOT cause any changes to the state of the device that persist after the last
fabric is removed.

The fields for the TestEventTrigger command are as follows:

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\> |

#### Returns

`void`

**`See`**

MatterSpecification.v11.Core § 11.11.7.1

#### Overrides

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[testEventTrigger](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#testeventtrigger)

#### Defined in

[packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts:68](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/definitions/general-diagnostics/GeneralDiagnosticsServer.ts#L68)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[GeneralDiagnosticsBehavior](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md).[toString](../interfaces/behavior_definitions_general_diagnostics_export.GeneralDiagnosticsBehavior-1.md#tostring)

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

GeneralDiagnosticsBehavior.alter

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

GeneralDiagnosticsBehavior.enable

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

GeneralDiagnosticsBehavior.for

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

GeneralDiagnosticsBehavior.set

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

GeneralDiagnosticsBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
