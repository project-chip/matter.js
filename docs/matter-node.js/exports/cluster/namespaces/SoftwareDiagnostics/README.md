[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / SoftwareDiagnostics

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

> `readonly` **threadMetrics**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on the
Node shall be represented by a single entry within the ThreadMetrics attribute.

###### See

MatterSpecification.v11.Core § 11.12.6.1

##### events

> `readonly` **events**: `object`

##### events.softwareFault

> `readonly` **softwareFault**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **watermarks**: [`BitFlag`](../../../schema/README.md#bitflag)

Watermarks

Node makes available the metrics for high watermark related to memory consumption.

##### id

> `readonly` **id**: `52`

##### name

> `readonly` **name**: `"SoftwareDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:149

***

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:460

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

> `readonly` **threadMetrics**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

The ThreadMetrics attribute shall be a list of ThreadMetricsStruct structs. Each active thread on the
Node shall be represented by a single entry within the ThreadMetrics attribute.

###### See

MatterSpecification.v11.Core § 11.12.6.1

##### events

> `readonly` **events**: `object`

##### events.softwareFault

> `readonly` **softwareFault**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **watermarks**: [`BitFlag`](../../../schema/README.md#bitflag)

Watermarks

Node makes available the metrics for high watermark related to memory consumption.

##### id

> `readonly` **id**: `52`

##### name

> `readonly` **name**: `"SoftwareDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:300

***

### Complete

> **Complete**: [`Complete`](interfaces/Complete.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:590

***

### CompleteInstance

> `const` **CompleteInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Complete](README.md#complete)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.acceptedCommandList

> `readonly` **acceptedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.attributeList

> `readonly` **attributeList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_AttributeId/README.md)[], `never`\>

##### attributes.clusterRevision

> `readonly` **clusterRevision**: [`Attribute`](../../interfaces/Attribute.md)\<`number`, `never`\>

##### attributes.currentHeapFree

> `readonly` **currentHeapFree**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

##### attributes.currentHeapHighWatermark

> `readonly` **currentHeapHighWatermark**: [`Attribute`](../../interfaces/Attribute.md)\<`number` \| `bigint`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### attributes.currentHeapUsed

> `readonly` **currentHeapUsed**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<`number` \| `bigint`, `any`\>

##### attributes.eventList

> `readonly` **eventList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EventId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EventId/README.md)[], `never`\>

##### attributes.featureMap

> `readonly` **featureMap**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](../../../schema/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_schema_BitmapSchema/README.md), `never`\>

##### attributes.generatedCommandList

> `readonly` **generatedCommandList**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_CommandId/README.md)[], `never`\>

##### attributes.threadMetrics

> `readonly` **threadMetrics**: [`OptionalAttribute`](../../interfaces/OptionalAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.resetWatermarks

> `readonly` **resetWatermarks**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_cluster_Cluster/README.md)

##### events

> `readonly` **events**: `object`

##### events.softwareFault

> `readonly` **softwareFault**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

The SoftwareFault Event shall be generated when a software fault takes place on the Node.

###### See

MatterSpecification.v11.Core § 11.12.8.1

##### features

> `readonly` **features**: `object`

##### features.watermarks

> `readonly` **watermarks**: [`BitFlag`](../../../schema/README.md#bitflag)

Watermarks

Node makes available the metrics for high watermark related to memory consumption.

##### id

> `readonly` **id**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/util/Type"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_util_Type/README.md)

##### name

> `readonly` **name**: `"SoftwareDiagnostics"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:466

***

### TlvSoftwareFaultEvent

> `const` **TlvSoftwareFaultEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the SoftwareDiagnostics softwareFault event

#### See

MatterSpecification.v11.Core § 11.12.8.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:66

***

### TlvThreadMetricsStruct

> `const` **TlvThreadMetricsStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### See

MatterSpecification.v11.Core § 11.12.5.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:16

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

packages/matter.js/dist/esm/cluster/definitions/SoftwareDiagnosticsCluster.d.ts:99
