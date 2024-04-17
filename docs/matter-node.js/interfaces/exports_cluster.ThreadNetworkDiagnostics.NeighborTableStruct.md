[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md) / NeighborTableStruct

# Interface: NeighborTableStruct

[exports/cluster](../modules/exports_cluster.md).[ThreadNetworkDiagnostics](../modules/exports_cluster.ThreadNetworkDiagnostics.md).NeighborTableStruct

**`See`**

MatterSpecification.v11.Core § 11.13.5.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvNeighborTableStruct`](../modules/exports_cluster.ThreadNetworkDiagnostics.md#tlvneighbortablestruct)\>

  ↳ **`NeighborTableStruct`**

## Table of contents

### Properties

- [age](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#age)
- [averageRssi](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#averagerssi)
- [extAddress](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#extaddress)
- [frameErrorRate](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#frameerrorrate)
- [fullNetworkData](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#fullnetworkdata)
- [fullThreadDevice](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#fullthreaddevice)
- [isChild](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#ischild)
- [lastRssi](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#lastrssi)
- [linkFrameCounter](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#linkframecounter)
- [lqi](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#lqi)
- [messageErrorRate](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#messageerrorrate)
- [mleFrameCounter](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#mleframecounter)
- [rloc16](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#rloc16)
- [rxOnWhenIdle](exports_cluster.ThreadNetworkDiagnostics.NeighborTableStruct.md#rxonwhenidle)

## Properties

### age

• **age**: `number`

This field shall specify the duration of time, in seconds, since a frame has been received from the
neighboring Node.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.2

#### Inherited from

TypeFromSchema.age

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:63

___

### averageRssi

• **averageRssi**: ``null`` \| `number`

This field SHOULD specify the average RSSI across all received frames from the neighboring Node since the
receiving Node’s last reboot. If there is no known received frames this field SHOULD have

the value of null. This field shall have the units of dBm, having the range -128 dBm to 0 dBm.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.7

#### Inherited from

TypeFromSchema.averageRssi

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:99

___

### extAddress

• **extAddress**: `number` \| `bigint`

This field shall specify the IEEE 802.15.4 extended address for the neighboring Node.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.1

#### Inherited from

TypeFromSchema.extAddress

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:56

___

### frameErrorRate

• `Optional` **frameErrorRate**: `number`

This field shall specify the percentage of received frames from the neighboring Node that have resulted in
errors.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.9

#### Inherited from

TypeFromSchema.frameErrorRate

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:114

___

### fullNetworkData

• **fullNetworkData**: `boolean`

This field shall specify if the neighboring Node requires the full Network Data. If set to False, the
neighboring Node only requires the stable Network Data.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.13

#### Inherited from

TypeFromSchema.fullNetworkData

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:141

___

### fullThreadDevice

• **fullThreadDevice**: `boolean`

This field shall specify if the neighboring Node is a full Thread device.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.12

#### Inherited from

TypeFromSchema.fullThreadDevice

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:134

___

### isChild

• **isChild**: `boolean`

This field shall specify if the neighboring Node is a direct child of the Node reporting the NeighborTable
attribute.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.14

#### Inherited from

TypeFromSchema.isChild

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:148

___

### lastRssi

• **lastRssi**: ``null`` \| `number`

This field shall specify the RSSI of the most recently received frame from the neighboring Node. If there is
no known last received frame the LastRssi field SHOULD have the value of null. This field shall have the
units of dBm, having the range -128 dBm to 0 dBm.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.8

#### Inherited from

TypeFromSchema.lastRssi

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:107

___

### linkFrameCounter

• **linkFrameCounter**: `number`

This field shall specify the number of link layer frames that have been received from the neighboring node.
This field shall be reset to 0 upon a reboot of the Node.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.4

#### Inherited from

TypeFromSchema.linkFrameCounter

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:76

___

### lqi

• **lqi**: `number`

This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality indicators,
scaled from 0 to 255.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.6

#### Inherited from

TypeFromSchema.lqi

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:90

___

### messageErrorRate

• `Optional` **messageErrorRate**: `number`

This field shall specify the percentage of received messages from the neighboring Node that have resulted in
errors.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.10

#### Inherited from

TypeFromSchema.messageErrorRate

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:121

___

### mleFrameCounter

• **mleFrameCounter**: `number`

This field shall specify the number of Mesh Link Establishment frames that have been received from the
neighboring node. This field shall be reset to 0 upon a reboot of the Node.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.5

#### Inherited from

TypeFromSchema.mleFrameCounter

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:83

___

### rloc16

• **rloc16**: `number`

This field shall specify the RLOC16 of the neighboring Node.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.3

#### Inherited from

TypeFromSchema.rloc16

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:69

___

### rxOnWhenIdle

• **rxOnWhenIdle**: `boolean`

This field shall specify if the neighboring Node is capable of receiving frames while the Node is in an idle
state.

**`See`**

MatterSpecification.v11.Core § 11.13.5.4.11

#### Inherited from

TypeFromSchema.rxOnWhenIdle

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ThreadNetworkDiagnosticsCluster.d.ts:128
