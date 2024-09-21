[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/operational-credentials/export](../modules/behavior_definitions_operational_credentials_export.md) / OperationalCredentialsServer

# Class: OperationalCredentialsServer

[behavior/definitions/operational-credentials/export](../modules/behavior_definitions_operational_credentials_export.md).OperationalCredentialsServer

This is the default server implementation of OperationalCredentialsBehavior.

TODO - currently "source of truth" for fabric data is persisted by FabricManager.  If we remove some legacy code
paths we can move source of truth to here.  Right now we just sync fabrics with MatterDevice.  This sync is only as
comprehensive as required by current use cases.  If fabrics are mutated directly on MatterDevice then this code will
require update.

## Hierarchy

- [`OperationalCredentialsBehavior`](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md)

  ↳ **`OperationalCredentialsServer`**

## Table of contents

### Constructors

- [constructor](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#constructor)

### Properties

- [#agent](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md##agent)
- [[reference]](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#[reference])
- [agent](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#agent)
- [cluster](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#cluster)
- [context](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#context)
- [endpoint](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#endpoint)
- [events](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#events)
- [features](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#features)
- [internal](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#internal)
- [session](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#session)
- [state](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#state)
- [Events](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#events-1)
- [ExtensionInterface](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#extensioninterface)
- [Interface](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#interface)
- [cluster](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#cluster-1)
- [defaults](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#defaults)
- [dependencies](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#dependencies)
- [early](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#early)
- [id](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#id)
- [name](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#name)
- [schema](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#schema)
- [supervisor](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#supervisor)
- [supports](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#supports)

### Methods

- [#handleAddedFabric](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md##handleaddedfabric)
- [#handleFailsafeClosed](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md##handlefailsafeclosed)
- [#handleRemovedFabric](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md##handleremovedfabric)
- [#handleUpdatedFabric](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md##handleupdatedfabric)
- [#mapNocErrors](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md##mapnocerrors)
- [#nodeOnline](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md##nodeonline)
- [#updateFabrics](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md##updatefabrics)
- [[asyncDispose]](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#[asyncdispose])
- [addNoc](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#addnoc)
- [addTrustedRootCertificate](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#addtrustedrootcertificate)
- [asAdmin](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#asadmin)
- [assertAttributeEnabled](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#assertattributeenabled)
- [attestationRequest](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#attestationrequest)
- [callback](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#callback)
- [certificateChainRequest](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#certificatechainrequest)
- [csrRequest](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#csrrequest)
- [getCertification](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#getcertification)
- [initialize](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#initialize)
- [reactTo](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#reactto)
- [removeFabric](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#removefabric)
- [requireAttributeEnabled](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#requireattributeenabled)
- [toString](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#tostring)
- [updateFabricLabel](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#updatefabriclabel)
- [updateNoc](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#updatenoc)
- [alter](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#alter)
- [enable](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#enable)
- [for](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#for)
- [set](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#set)
- [with](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md#with)

## Constructors

### constructor

• **new OperationalCredentialsServer**(`agent`, `backing`): [`OperationalCredentialsServer`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `agent` | [`Agent`](endpoint_export.Agent-1.md) |
| `backing` | [`BehaviorBacking`](behavior_cluster_export._internal_.BehaviorBacking.md) |

#### Returns

[`OperationalCredentialsServer`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer-1.md)

#### Inherited from

OperationalCredentialsBehavior.constructor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:201](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L201)

## Properties

### #agent

• `Private` **#agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[#agent](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md##agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:51](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L51)

___

### [reference]

• **[reference]**: [`Datasource`](../interfaces/behavior_cluster_export._internal_.Datasource-1.md)\<[`StateType`](../interfaces/behavior_cluster_export._internal_.StateType.md)\>

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[[reference]](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#[reference])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L274)

[packages/matter.js/src/behavior/Behavior.ts:274](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L274)

___

### agent

• **agent**: [`Agent`](endpoint_export.Agent-1.md)

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[agent](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#agent)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L80)

[packages/matter.js/src/behavior/Behavior.ts:80](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L80)

___

### cluster

• **cluster**: `never`

The implemented cluster.

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[cluster](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#cluster)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:47](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L47)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:306](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L306)

___

### context

• **context**: [`ActionContext`](../interfaces/behavior_cluster_export._internal_.ActionContext.md)

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[context](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#context)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L94)

[packages/matter.js/src/behavior/Behavior.ts:94](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L94)

___

### endpoint

• **endpoint**: [`Endpoint`](endpoint_export.Endpoint-1.md)\<[`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md)\>

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[endpoint](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#endpoint)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L87)

[packages/matter.js/src/behavior/Behavior.ts:87](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L87)

___

### events

• `Readonly` **events**: [`EventEmitter`](util_export.EventEmitter-1.md) & `Omit`\<[`ClusterEvents`](../modules/behavior_cluster_export.md#clusterevents)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md)\>, `never`\> & \{ `commissionedFabrics$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `currentFabricIndex$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\>\> ; `fabrics$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FabricScopedAttribute`](../interfaces/cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricId`](../modules/datatype_export.md#fabricid)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `rootPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>[], `any`\>\> ; `nocs$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FabricScopedAttribute`](../interfaces/cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `icac`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>\> ; `supportedFabrics$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `trustedRootCertificates$Changing`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`Uint8Array`[], `any`\>\>  } & {} & \{ `commissionedFabrics$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\>\> ; `currentFabricIndex$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\>\> ; `fabrics$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FabricScopedAttribute`](../interfaces/cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricId`](../modules/datatype_export.md#fabricid)\> ; `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `rootPublicKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `vendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\>  }\>[], `any`\>\> ; `nocs$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FabricScopedAttribute`](../interfaces/cluster_export.FabricScopedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `icac`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `noc`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>[], `any`\>\> ; `supportedFabrics$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`number`, `any`\>\> ; `trustedRootCertificates$Changed`: [`AttributeObservable`](../modules/behavior_cluster_export.ClusterEvents.md#attributeobservable)\<[`Attribute`](../interfaces/cluster_export.Attribute.md)\<`Uint8Array`[], `any`\>\>  } & {} & {} & {}

Access the behavior's events.

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[events](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#events)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:145](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L145)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:316](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L316)

___

### features

• **features**: `Object`

Supported features as a flag object.

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[features](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#features)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:54](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L54)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:321](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L321)

___

### internal

• **internal**: [`Internal`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.Internal.md)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:84](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L84)

___

### session

• **session**: [`SecureSession`](session_export.SecureSession.md)\<[`MatterDevice`](behavior_cluster_export._internal_.MatterDevice.md)\>

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[session](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#session)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L101)

[packages/matter.js/src/behavior/Behavior.ts:101](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L101)

___

### state

• **state**: [`State`](behavior_definitions_operational_credentials_export.OperationalCredentialsServer.State.md)

Access the behavior's state.

#### Overrides

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[state](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#state)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:85](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L85)

___

### Events

▪ `Static` `Readonly` **Events**: [`Type`](../modules/behavior_cluster_export.ClusterEvents.md#type)\<[`Cluster`](../interfaces/cluster_export.OperationalCredentials.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OperationalCredentialsInterface`](../modules/behavior_definitions_operational_credentials_export.md#operationalcredentialsinterface)\>\>

#### Inherited from

OperationalCredentialsBehavior.Events

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:215](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L215)

___

### ExtensionInterface

▪ `Static` `Readonly` **ExtensionInterface**: `Object`

#### Inherited from

OperationalCredentialsBehavior.ExtensionInterface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:226](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L226)

___

### Interface

▪ `Static` `Readonly` **Interface**: [`OperationalCredentialsInterface`](../modules/behavior_definitions_operational_credentials_export.md#operationalcredentialsinterface)

#### Inherited from

OperationalCredentialsBehavior.Interface

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:218](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L218)

___

### cluster

▪ `Static` `Readonly` **cluster**: [`Cluster`](../interfaces/cluster_export.OperationalCredentials.Cluster.md)

Base cluster state include all attribute values but may be extended by subclasses.

#### Inherited from

OperationalCredentialsBehavior.cluster

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:213](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L213)

___

### defaults

▪ `Static` `Readonly` **defaults**: [`Type`](../modules/behavior_cluster_export.ClusterState.md#type)\<[`Cluster`](../interfaces/cluster_export.OperationalCredentials.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](../modules/behavior_cluster_export.ClusterBehavior.md), [`OperationalCredentialsInterface`](../modules/behavior_definitions_operational_credentials_export.md#operationalcredentialsinterface)\>\>

#### Inherited from

OperationalCredentialsBehavior.defaults

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:222](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L222)

___

### dependencies

▪ `Static` `Optional` `Readonly` **dependencies**: `Iterable`\<[`Type`](../interfaces/behavior_export.Behavior.Type.md)\>

#### Inherited from

OperationalCredentialsBehavior.dependencies

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:224](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L224)

___

### early

▪ `Static` `Readonly` **early**: `boolean`

#### Inherited from

OperationalCredentialsBehavior.early

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:221](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L221)

___

### id

▪ `Static` `Readonly` **id**: ``"operationalCredentials"``

The behavior ID for ClusterBehaviors is the name of the cluster.

#### Inherited from

OperationalCredentialsBehavior.id

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:208](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L208)

___

### name

▪ `Static` `Readonly` **name**: `string`

#### Inherited from

OperationalCredentialsBehavior.name

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:203](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L203)

___

### schema

▪ `Static` `Optional` `Readonly` **schema**: [`Schema`](../modules/behavior_cluster_export._internal_.md#schema)

#### Inherited from

OperationalCredentialsBehavior.schema

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:220](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L220)

___

### supervisor

▪ `Static` `Readonly` **supervisor**: [`RootSupervisor`](behavior_cluster_export._internal_.RootSupervisor.md)

#### Inherited from

OperationalCredentialsBehavior.supervisor

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:223](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L223)

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

OperationalCredentialsBehavior.supports

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:225](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L225)

## Methods

### #handleAddedFabric

▸ **#handleAddedFabric**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:470](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L470)

___

### #handleFailsafeClosed

▸ **#handleFailsafeClosed**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:485](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L485)

___

### #handleRemovedFabric

▸ **#handleRemovedFabric**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:480](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L480)

___

### #handleUpdatedFabric

▸ **#handleUpdatedFabric**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:475](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L475)

___

### #mapNocErrors

▸ **#mapNocErrors**(`error`): [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `unknown` |

#### Returns

[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:161](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L161)

___

### #nodeOnline

▸ **#nodeOnline**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:489](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L489)

___

### #updateFabrics

▸ **#updateFabrics**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:432](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L432)

___

### [asyncDispose]

▸ **[asyncDispose]**(): [`MaybePromise`](../modules/util_export.md#maybepromise)

Release resources.  This is the public API for releasing application resources held by behaviors in internal
state.

#### Returns

[`MaybePromise`](../modules/util_export.md#maybepromise)

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[[asyncDispose]](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#[asyncdispose])

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:198](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L198)

___

### addNoc

▸ **addNoc**(`«destructured»`): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

This command shall add a new NOC chain to the device and commission a new Fabric association upon successful
validation of all arguments and preconditions.

The new value shall immediately be reflected in the NOCs list attribute.

A Commissioner or Administrator shall issue this command after issuing the CSRRequest command and receiving
its response.

A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `adminVendorId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`VendorId`](../modules/datatype_export.md#vendorid)\> ; `caseAdminSubject`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\> ; `icacValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `ipkValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `nocValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.17.6.8

#### Overrides

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[addNoc](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#addnoc)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:196](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L196)

___

### addTrustedRootCertificate

▸ **addTrustedRootCertificate**(`«destructured»`): `void`

This command shall add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding
representation, to the TrustedRootCertificates Attribute list and shall ensure the next AddNOC command
executed uses the provided certificate as its root of trust.

If the certificate from the RootCACertificate field is already installed, based on exact byte-for-byte
equality, then this command shall succeed with no change to the list.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer period,
which would cause the new invocation to add a second root certificate within a given fail- safe timer
period, then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If the certificate from the RootCACertificate field fails any validity checks, not fulfilling all the
requirements for a valid Matter Certificate Encoding representation, including a truncated or oversize
value, then this command shall fail with an INVALID_COMMAND status code sent back to the initiator.

Note that the only method of removing a trusted root is by removing the Fabric that uses it as its root of
trust using the RemoveFabric command.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `rootCaCertificate`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

`void`

**`See`**

MatterSpecification.v11.Core § 11.17.6.13

#### Overrides

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[addTrustedRootCertificate](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#addtrustedrootcertificate)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:394](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L394)

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

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[asAdmin](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#asadmin)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:125](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L125)

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

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[assertAttributeEnabled](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#assertattributeenabled)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:183](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L183)

___

### attestationRequest

▸ **attestationRequest**(`«destructured»`): `Promise`\<\{ `attestationElements`: `Uint8Array` = elements; `attestationSignature`: `Uint8Array`  }\>

This command shall be generated to request the Attestation Information, in the form of an
AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a

recipient shall fail the command with a Status Code of INVALID_COMMAND. The AttestationNonce field shall be
used in the computation of the Attestation Information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `attestationNonce`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

`Promise`\<\{ `attestationElements`: `Uint8Array` = elements; `attestationSignature`: `Uint8Array`  }\>

**`See`**

MatterSpecification.v11.Core § 11.17.6.1

#### Overrides

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[attestationRequest](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#attestationrequest)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:97](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L97)

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

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[callback](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#callback)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:226](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L226)

___

### certificateChainRequest

▸ **certificateChainRequest**(`«destructured»`): `Promise`\<\{ `certificate`: `Uint8Array` = certification.certificate }\>

If the CertificateType is not a valid value per CertificateChainTypeEnum then the command shall fail with a
Status Code of INVALID_COMMAND.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `certificateType`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CertificateChainType`](../enums/cluster_export.OperationalCredentials.CertificateChainType.md)\>  }\> |

#### Returns

`Promise`\<\{ `certificate`: `Uint8Array` = certification.certificate }\>

**`See`**

MatterSpecification.v11.Core § 11.17.6.3

#### Overrides

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[certificateChainRequest](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#certificatechainrequest)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:145](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L145)

___

### csrRequest

▸ **csrRequest**(`«destructured»`): `Promise`\<\{ `attestationSignature`: `Uint8Array` ; `nocsrElements`: `Uint8Array`  }\>

This command shall be generated to execute the Node Operational CSR Procedure and subsequently return the
NOCSR Information, in the form of a CSRResponse Command.

The CSRNonce field shall be used in the computation of the NOCSR Information. If the CSRNonce is malformed,
then this command shall fail with an INVALID_COMMAND status code.

If the IsForUpdateNOC field is present and set to true, but the command was received over a PASE session,
the command shall fail with an INVALID_COMMAND status code, as it would never be possible to use a resulting
subsequent certificate issued from the CSR with the UpdateNOC command, which is forbidden over PASE sessions.

If the IsForUpdateNOC field is present and set to true, the internal state of the CSR associated keypair
shall be tagged as being for a subsequent UpdateNOC, otherwise the internal state of the CSR shall be tagged
as being for a subsequent AddNOC. See Section 11.17.6.8, “AddNOC Command” and Section 11.17.6.9, “UpdateNOC
Command” for details about the processing.

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If the Node Operational Key Pair generated during processing of the Node Operational CSR Procedure is found
to collide with an existing key pair already previously generated and installed, and that check had been
executed, then this command shall fail with a FAILURE status code sent back to the initiator.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `csrNonce`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `isForUpdateNoc`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`boolean`\>  }\> |

#### Returns

`Promise`\<\{ `attestationSignature`: `Uint8Array` ; `nocsrElements`: `Uint8Array`  }\>

**`See`**

MatterSpecification.v11.Core § 11.17.6.5

#### Overrides

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[csrRequest](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#csrrequest)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:115](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L115)

___

### getCertification

▸ **getCertification**(): `Promise`\<[`DeviceCertification`](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md)\>

#### Returns

`Promise`\<[`DeviceCertification`](behavior_definitions_operational_credentials_export._internal_.DeviceCertification-1.md)\>

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:456](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L456)

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

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[initialize](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#initialize)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:87](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L87)

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

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[reactTo](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#reactto)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:212](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L212)

___

### removeFabric

▸ **removeFabric**(`«destructured»`): `Promise`\<\{ `debugText`: `string` ; `fabricIndex?`: `undefined` = fabric.fabricIndex; `statusCode`: [`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md) = OperationalCredentials.NodeOperationalCertStatus.InvalidFabricIndex } \| \{ `debugText?`: `undefined` = error.message; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `statusCode`: [`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md) = OperationalCredentials.NodeOperationalCertStatus.Ok }\>

This command is used by Administrators to remove a given Fabric and delete all associated fabric-scoped data.

If the given Fabric being removed is the last one to reference a given Trusted Root CA Certificate stored in
the Trusted Root Certificates list, then that Trusted Root Certificate shall be removed.

WARNING

This command, if referring to an already existing Fabric not under the control of the invoking
Administrator, shall ONLY be invoked after obtaining some form of explicit user consent through some method
executed by the Administrator or Commissioner. This method of obtaining consent SHOULD employ as much data
as possible about the existing Fabric associations within the Fabrics list, so that likelihood is as small
as possible of a user removing a Fabric unwittingly. If a method exists for an Administrator or Commissioner
to convey Fabric Removal to an entity related to that Fabric, whether in-band or out-of-band, then this
method SHOULD be used to notify the other Administrative Domain’s party of the removal. Otherwise, users may
only observe the removal of a Fabric association as persistently failing attempts to reach a Node
operationally.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\>  }\> |

#### Returns

`Promise`\<\{ `debugText`: `string` ; `fabricIndex?`: `undefined` = fabric.fabricIndex; `statusCode`: [`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md) = OperationalCredentials.NodeOperationalCertStatus.InvalidFabricIndex } \| \{ `debugText?`: `undefined` = error.message; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) ; `statusCode`: [`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md) = OperationalCredentials.NodeOperationalCertStatus.Ok }\>

**`See`**

MatterSpecification.v11.Core § 11.17.6.12

#### Overrides

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[removeFabric](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#removefabric)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:373](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L373)

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

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[requireAttributeEnabled](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#requireattributeenabled)

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:171](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L171)

___

### toString

▸ **toString**(): `string`

Description used in diagnostic messages.

#### Returns

`string`

#### Inherited from

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[toString](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#tostring)

#### Defined in

[packages/matter.js/src/behavior/Behavior.ts:203](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/Behavior.ts#L203)

___

### updateFabricLabel

▸ **updateFabricLabel**(`«destructured»`): `Promise`\<\{ `debugText`: `string` ; `fabricIndex?`: `undefined` = fabric.fabricIndex; `statusCode`: [`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md) = OperationalCredentials.NodeOperationalCertStatus.LabelConflict } \| \{ `debugText?`: `undefined` = error.message; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) = fabric.fabricIndex; `statusCode`: [`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md) = OperationalCredentials.NodeOperationalCertStatus.Ok }\>

This command shall be used by an Administrator to set the user-visible Label field for a given Fabric, as
reflected by entries in the Fabrics attribute.

The Label SHOULD be used by Administrators to provide additional per-fabric context when operations such as
RemoveFabric are used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `label`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\> |

#### Returns

`Promise`\<\{ `debugText`: `string` ; `fabricIndex?`: `undefined` = fabric.fabricIndex; `statusCode`: [`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md) = OperationalCredentials.NodeOperationalCertStatus.LabelConflict } \| \{ `debugText?`: `undefined` = error.message; `fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex) = fabric.fabricIndex; `statusCode`: [`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md) = OperationalCredentials.NodeOperationalCertStatus.Ok }\>

**`See`**

MatterSpecification.v11.Core § 11.17.6.11

#### Overrides

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[updateFabricLabel](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#updatefabriclabel)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:353](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L353)

___

### updateNoc

▸ **updateNoc**(`«destructured»`): `Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

This command shall replace the NOC and optional associated ICAC (if present) scoped under the accessing
fabric upon successful validation of all arguments and preconditions. The new value shall immediately be
reflected in the NOCs list attribute.

A Commissioner or Administrator shall issue this command after issuing the CSRRequest Command and receiving
its response.

A Commissioner or Administrator SHOULD issue this command after performing the Attestation Procedure.

Effect When Received

If this command is received without an armed fail-safe context (see Section 11.9.6.2, “ArmFailSafe
Command”), then this command shall fail with a FAILSAFE_REQUIRED status code sent back to the initiator.

If a prior UpdateNOC or AddNOC command was successfully executed within the fail-safe timer period, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If a prior AddTrustedRootCertificate command was successfully invoked within the fail-safe timer period,
then this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator, since the only
valid following logical operation is invoking the AddNOC command.

If the prior CSRRequest state that preceded UpdateNOC had the IsForUpdateNOC field indicated as false, then
this command shall fail with a CONSTRAINT_ERROR status code sent back to the initiator.

If any of the following conditions arise, the Node shall process an error by responding with an NOCResponse
with a StatusCode of InvalidNOC as described in Section 11.17.6.7.2, “Handling Errors”:

  • The NOC provided in the NOCValue does not refer in its subject to the FabricID associated with the
    accessing fabric.

  • The ICAC provided in the ICACValue (if present) has a FabricID in its subject that does not match the
    FabricID associated with the accessing fabric.

Otherwise, the command is considered an update of existing credentials for a given Fabric, and the following
shall apply:

  1. The Operational Certificate under the accessing fabric index in the NOCs list shall be updated to match
     the incoming NOCValue and ICACValue (if present), such that the Node’s Operational Identifier within
     the Fabric immediately changes.

    a. The operational key pair associated with the incoming NOC from the NOCValue, and generated by the
       prior CSRRequest command, shall be committed to permanent storage, for subsequent use during CASE.

    b. The operational discovery service record shall immediately reflect the new Operational Identifier.

    c. All internal data reflecting the prior operational identifier of the Node within the Fabric shall be
       revoked and removed, to an outcome equivalent to the disappearance of the prior Node, except for the
       ongoing CASE session context, which shall temporarily remain valid until the NOCResponse has been
       successfully delivered or until the next transport-layer error, so that the response can be received
       by the Administrator invoking the command.

Thereafter, the Node shall respond with an NOCResponse with a StatusCode of OK and a FabricIndex field
matching the FabricIndex under which the updated NOC is scoped.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `icacValue`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`Uint8Array`\> ; `nocValue`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\> |

#### Returns

`Promise`\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `debugText`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `fabricIndex`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`FabricIndex`](../modules/datatype_export.md#fabricindex)\> ; `statusCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeOperationalCertStatus`](../enums/cluster_export.OperationalCredentials.NodeOperationalCertStatus.md)\>  }\>\>

**`See`**

MatterSpecification.v11.Core § 11.17.6.9

#### Overrides

[OperationalCredentialsBehavior](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md).[updateNoc](../interfaces/behavior_definitions_operational_credentials_export.OperationalCredentialsBehavior-1.md#updatenoc)

#### Defined in

[packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts:297](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/definitions/operational-credentials/OperationalCredentialsServer.ts#L297)

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

OperationalCredentialsBehavior.alter

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:254](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L254)

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

OperationalCredentialsBehavior.enable

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:264](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L264)

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

OperationalCredentialsBehavior.for

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:240](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L240)

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

OperationalCredentialsBehavior.set

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:262](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L262)

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

OperationalCredentialsBehavior.with

#### Defined in

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:246](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L246)
