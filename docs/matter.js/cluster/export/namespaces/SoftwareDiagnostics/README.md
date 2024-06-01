[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / SoftwareDiagnostics

# Namespace: SoftwareDiagnostics

## Index

### Enumerations

- [Feature](enumerations/Feature.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [Complete](interfaces/Complete.md)
- [SoftwareFaultEvent](interfaces/SoftwareFaultEvent.md)
- [ThreadMetricsStruct](interfaces/ThreadMetricsStruct.md)

## Variables

### Base

> `const` **Base**: `object`

These elements and properties are present in all SoftwareDiagnostics clusters.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentHeapFree

> `readonly` **currentHeapFree**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

The CurrentHeapFree attribute shall indicate the current amount of heap memory, in bytes, that are free
for allocation. The effective amount may be smaller due to heap fragmentation or other reasons.

###### See

MatterSpecification.v11.Core § 11.12.6.2

##### attributes.currentHeapUsed

> `readonly` **currentHeapUsed**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

The CurrentHeapUsed attribute shall indicate the current amount of heap memory, in bytes, that is being
used.

###### See

MatterSpecification.v11.Core § 11.12.6.3

##### attributes.threadMetrics

> `readonly` **threadMetrics**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on the
Node shall be represented by a single entry within the ThreadMetrics attribute.

###### See

MatterSpecification.v11.Core § 11.12.6.1

##### events

> `readonly` **events**: `object`

##### events.softwareFault

> `readonly` **softwareFault**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The SoftwareFault Event shall be generated when a software fault takes place on the Node.

###### See

MatterSpecification.v11.Core § 11.12.8.1

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which SoftwareDiagnosticsCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.watermarks

> `readonly` **watermarks**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Watermarks

Node makes available the metrics for high watermark related to memory consumption.

##### id

> `readonly` **id**: `52` = `0x34`

##### name

> `readonly` **name**: `"SoftwareDiagnostics"` = `"SoftwareDiagnostics"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L177)

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:250](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L250)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentHeapFree

> `readonly` **currentHeapFree**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

The CurrentHeapFree attribute shall indicate the current amount of heap memory, in bytes, that are free
for allocation. The effective amount may be smaller due to heap fragmentation or other reasons.

###### See

MatterSpecification.v11.Core § 11.12.6.2

##### attributes.currentHeapUsed

> `readonly` **currentHeapUsed**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

The CurrentHeapUsed attribute shall indicate the current amount of heap memory, in bytes, that is being
used.

###### See

MatterSpecification.v11.Core § 11.12.6.3

##### attributes.threadMetrics

> `readonly` **threadMetrics**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on the
Node shall be represented by a single entry within the ThreadMetrics attribute.

###### See

MatterSpecification.v11.Core § 11.12.6.1

##### events

> `readonly` **events**: `object`

##### events.softwareFault

> `readonly` **softwareFault**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The SoftwareFault Event shall be generated when a software fault takes place on the Node.

###### See

MatterSpecification.v11.Core § 11.12.8.1

##### extensions

> `readonly` **extensions**: readonly [`object`]

This metadata controls which SoftwareDiagnosticsCluster elements matter.js activates for specific feature
combinations.

##### features

> `readonly` **features**: `object`

##### features.watermarks

> `readonly` **watermarks**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Watermarks

Node makes available the metrics for high watermark related to memory consumption.

##### id

> `readonly` **id**: `52` = `0x34`

##### name

> `readonly` **name**: `"SoftwareDiagnostics"` = `"SoftwareDiagnostics"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:236](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L236)

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:288](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L288)

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of client generated commands which are supported by this cluster server instance.

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`AttributeId`](../../../../datatype/export/README.md#attributeid)[], `never`\>

List of the attribute IDs of the attributes supported by the cluster instance.

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

Indicates the revision of the server cluster specification supported by the cluster instance.

##### attributes.currentHeapFree

> `readonly` **currentHeapFree**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

The CurrentHeapFree attribute shall indicate the current amount of heap memory, in bytes, that are free
for allocation. The effective amount may be smaller due to heap fragmentation or other reasons.

###### See

MatterSpecification.v11.Core § 11.12.6.2

##### attributes.currentHeapHighWatermark

> `readonly` **currentHeapHighWatermark**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### attributes.currentHeapUsed

> `readonly` **currentHeapUsed**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

The CurrentHeapUsed attribute shall indicate the current amount of heap memory, in bytes, that is being
used.

###### See

MatterSpecification.v11.Core § 11.12.6.3

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`EventId`](../../../../datatype/export/README.md#eventid)[], `never`\>

List of the event IDs of the events supported by the cluster instance.

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`TypeFromPartialBitSchema`](../../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>, `never`\>

Indicates whether the server supports zero or more optional cluster features.

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`CommandId`](../../../../datatype/export/README.md#commandid)[], `never`\>

List of server generated commands (server to client commands).

##### attributes.threadMetrics

> `readonly` **threadMetrics**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on the
Node shall be represented by a single entry within the ThreadMetrics attribute.

###### See

MatterSpecification.v11.Core § 11.12.6.1

##### commands

> `readonly` **commands**: `object`

##### commands.resetWatermarks

> `readonly` **resetWatermarks**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../schema/export/README.md#bitschema)\>

##### events

> `readonly` **events**: `object` = `Cluster.events`

##### events.softwareFault

> `readonly` **softwareFault**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

The SoftwareFault Event shall be generated when a software fault takes place on the Node.

###### See

MatterSpecification.v11.Core § 11.12.8.1

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.watermarks

> `readonly` **watermarks**: [`BitFlag`](../../../../schema/export/README.md#bitflag)

Watermarks

Node makes available the metrics for high watermark related to memory consumption.

##### id

> `readonly` **id**: [`Branded`](../../../../util/export/README.md#brandedtb)\<`52`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"SoftwareDiagnostics"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:258](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L258)

***

### TlvSoftwareFaultEvent

> `const` **TlvSoftwareFaultEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the SoftwareDiagnostics softwareFault event

#### See

MatterSpecification.v11.Core § 11.12.8.1

#### Type declaration

##### faultRecording

> **faultRecording**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`Uint8Array`\>

The FaultRecording field shall be a manufacturer-specified payload intended to convey information to assist
in further diagnosing or debugging a software fault. The FaultRecording field may be used to convey
information such as, but not limited to, thread backtraces or register contents.

###### See

MatterSpecification.v11.Core § 11.12.8.1.3

##### id

> **id**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

The ID field shall be set to the ID of the software thread in which the last software fault occurred.

###### See

MatterSpecification.v11.Core § 11.12.8.1.1

##### name

> **name**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

The Name field shall be set to a manufacturer-specified name or prefix of the software thread in which the
last software fault occurred.

###### See

MatterSpecification.v11.Core § 11.12.8.1.2

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L88)

***

### TlvThreadMetricsStruct

> `const` **TlvThreadMetricsStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### See

MatterSpecification.v11.Core § 11.12.5.1

#### Type declaration

##### id

> **id**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

The Id field shall be a server-assigned per-thread unique ID that is constant for the duration of the
thread. Efforts SHOULD be made to avoid reusing ID values when possible.

###### See

MatterSpecification.v11.Core § 11.12.5.1.1

##### name

> **name**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`string`\>

The Name field shall be set to a vendor defined name or prefix of the software thread that is static for the
duration of the thread.

###### See

MatterSpecification.v11.Core § 11.12.5.1.2

##### stackFreeCurrent

> **stackFreeCurrent**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

The StackFreeCurrent field shall indicate the current amount of stack memory, in bytes, that are not being
utilized on the respective thread.

###### See

MatterSpecification.v11.Core § 11.12.5.1.3

##### stackFreeMinimum

> **stackFreeMinimum**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

The StackFreeMinimum field shall indicate the minimum amount of stack memory, in bytes, that has been
available at any point between the current time and this attribute being reset or initialized on the
respective thread. This value shall only be reset upon a Node reboot or upon receiving of the
ResetWatermarks command.

###### See

MatterSpecification.v11.Core § 11.12.5.1.4

##### stackSize

> **stackSize**: [`OptionalFieldType`](../../../../tlv/export/interfaces/OptionalFieldType.md)\<`number`\>

The StackSize field shall indicate the amount of stack memory, in bytes, that has been allocated

for use by the respective thread.

###### See

MatterSpecification.v11.Core § 11.12.5.1.5

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L33)

***

### WatermarksComponent

> `const` **WatermarksComponent**: `object`

A SoftwareDiagnosticsCluster supports these elements if it supports feature Watermarks.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.currentHeapHighWatermark

> `readonly` **currentHeapHighWatermark**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\>

The CurrentHeapHighWatermark attribute shall indicate the maximum amount of heap memory, in bytes, that
has been used by the Node. This value shall only be reset upon a Node reboot or upon receiving of the
ResetWatermarks command.

###### See

MatterSpecification.v11.Core § 11.12.6.4

##### commands

> `readonly` **commands**: `object`

##### commands.resetWatermarks

> `readonly` **resetWatermarks**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

Receipt of this command shall reset the following values which track high and lower watermarks:

  • The StackFreeMinimum field of the ThreadMetrics attribute

  • The CurrentHeapHighWatermark attribute This command has no payload.

Effect on Receipt

On receipt of this command, the Node shall make the following modifications to attributes it supports:

If implemented, the server shall set the value of the CurrentHeapHighWatermark attribute to the value of
the CurrentHeapUsed attribute.

If implemented, the server shall set the value of the StackFreeMinimum field for every thread to the
value of the corresponding thread’s StackFreeCurrent field.

###### See

MatterSpecification.v11.Core § 11.12.7.1

#### Source

[packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/SoftwareDiagnosticsCluster.ts#L124)
