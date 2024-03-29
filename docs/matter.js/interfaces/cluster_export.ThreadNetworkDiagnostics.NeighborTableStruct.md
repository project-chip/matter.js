[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md) / NeighborTableStruct

# Interface: NeighborTableStruct

[cluster/export](../modules/cluster_export.md).[ThreadNetworkDiagnostics](../modules/cluster_export.ThreadNetworkDiagnostics.md).NeighborTableStruct

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvNeighborTableStruct`](../modules/cluster_export.ThreadNetworkDiagnostics.md#tlvneighbortablestruct)\>

  ↳ **`NeighborTableStruct`**

## Table of contents

### Properties

- [age](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#age)
- [averageRssi](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#averagerssi)
- [extAddress](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#extaddress)
- [frameErrorRate](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#frameerrorrate)
- [fullNetworkData](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#fullnetworkdata)
- [fullThreadDevice](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#fullthreaddevice)
- [isChild](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#ischild)
- [lastRssi](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#lastrssi)
- [linkFrameCounter](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#linkframecounter)
- [lqi](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#lqi)
- [messageErrorRate](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#messageerrorrate)
- [mleFrameCounter](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#mleframecounter)
- [rloc16](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#rloc16)
- [rxOnWhenIdle](cluster_export.ThreadNetworkDiagnostics.NeighborTableStruct.md#rxonwhenidle)

## Properties

### age

• **age**: `number`

This field shall specify the duration of time, in seconds, since a frame has been received from the
neighboring Node.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.2

#### Inherited from

TypeFromSchema.age

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:91](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L91)

___

### averageRssi

• **averageRssi**: ``null`` \| `number`

This field SHOULD specify the average RSSI across all received frames from the neighboring Node since the
receiving Node’s last reboot. If there is no known received frames this field SHOULD have

the value of null. This field shall have the units of dBm, having the range -128 dBm to 0 dBm.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.7

#### Inherited from

TypeFromSchema.averageRssi

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:132](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L132)

___

### extAddress

• **extAddress**: `number` \| `bigint`

This field shall specify the IEEE 802.15.4 extended address for the neighboring Node.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.1

#### Inherited from

TypeFromSchema.extAddress

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:83](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L83)

___

### frameErrorRate

• `Optional` **frameErrorRate**: `number`

This field shall specify the percentage of received frames from the neighboring Node that have resulted in
errors.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.9

#### Inherited from

TypeFromSchema.frameErrorRate

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:149](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L149)

___

### fullNetworkData

• **fullNetworkData**: `boolean`

This field shall specify if the neighboring Node requires the full Network Data. If set to False, the
neighboring Node only requires the stable Network Data.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.13

#### Inherited from

TypeFromSchema.fullNetworkData

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:180](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L180)

___

### fullThreadDevice

• **fullThreadDevice**: `boolean`

This field shall specify if the neighboring Node is a full Thread device.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.12

#### Inherited from

TypeFromSchema.fullThreadDevice

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:172](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L172)

___

### isChild

• **isChild**: `boolean`

This field shall specify if the neighboring Node is a direct child of the Node reporting the NeighborTable
attribute.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.14

#### Inherited from

TypeFromSchema.isChild

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:188](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L188)

___

### lastRssi

• **lastRssi**: ``null`` \| `number`

This field shall specify the RSSI of the most recently received frame from the neighboring Node. If there is
no known last received frame the LastRssi field SHOULD have the value of null. This field shall have the
units of dBm, having the range -128 dBm to 0 dBm.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.8

#### Inherited from

TypeFromSchema.lastRssi

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:141](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L141)

___

### linkFrameCounter

• **linkFrameCounter**: `number`

This field shall specify the number of link layer frames that have been received from the neighboring node.
This field shall be reset to 0 upon a reboot of the Node.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.4

#### Inherited from

TypeFromSchema.linkFrameCounter

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:106](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L106)

___

### lqi

• **lqi**: `number`

This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality indicators,
scaled from 0 to 255.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.6

#### Inherited from

TypeFromSchema.lqi

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:122](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L122)

___

### messageErrorRate

• `Optional` **messageErrorRate**: `number`

This field shall specify the percentage of received messages from the neighboring Node that have resulted in
errors.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.10

#### Inherited from

TypeFromSchema.messageErrorRate

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:157](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L157)

___

### mleFrameCounter

• **mleFrameCounter**: `number`

This field shall specify the number of Mesh Link Establishment frames that have been received from the
neighboring node. This field shall be reset to 0 upon a reboot of the Node.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.5

#### Inherited from

TypeFromSchema.mleFrameCounter

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:114](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L114)

___

### rloc16

• **rloc16**: `number`

This field shall specify the RLOC16 of the neighboring Node.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.3

#### Inherited from

TypeFromSchema.rloc16

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:98](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L98)

___

### rxOnWhenIdle

• **rxOnWhenIdle**: `boolean`

This field shall specify if the neighboring Node is capable of receiving frames while the Node is in an idle
state.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.13.5.4.11

#### Inherited from

TypeFromSchema.rxOnWhenIdle

#### Defined in

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:165](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L165)
