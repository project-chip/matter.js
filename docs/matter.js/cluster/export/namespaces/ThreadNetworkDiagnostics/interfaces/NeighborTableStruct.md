[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ThreadNetworkDiagnostics](../README.md) / NeighborTableStruct

# Interface: NeighborTableStruct

## See

MatterSpecification.v11.Core § 11.13.5.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvNeighborTableStruct`](../README.md#tlvneighbortablestruct)\>

## Properties

### age

> **age**: `number`

This field shall specify the duration of time, in seconds, since a frame has been received from the
neighboring Node.

#### See

MatterSpecification.v11.Core § 11.13.5.4.2

#### Inherited from

`TypeFromSchema.age`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L90)

***

### averageRssi

> **averageRssi**: `null` \| `number`

This field SHOULD specify the average RSSI across all received frames from the neighboring Node since the
receiving Node’s last reboot. If there is no known received frames this field SHOULD have

the value of null. This field shall have the units of dBm, having the range -128 dBm to 0 dBm.

#### See

MatterSpecification.v11.Core § 11.13.5.4.7

#### Inherited from

`TypeFromSchema.averageRssi`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L131)

***

### extAddress

> **extAddress**: `number` \| `bigint`

This field shall specify the IEEE 802.15.4 extended address for the neighboring Node.

#### See

MatterSpecification.v11.Core § 11.13.5.4.1

#### Inherited from

`TypeFromSchema.extAddress`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L82)

***

### frameErrorRate?

> `optional` **frameErrorRate**: `number`

This field shall specify the percentage of received frames from the neighboring Node that have resulted in
errors.

#### See

MatterSpecification.v11.Core § 11.13.5.4.9

#### Inherited from

`TypeFromSchema.frameErrorRate`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L148)

***

### fullNetworkData

> **fullNetworkData**: `boolean`

This field shall specify if the neighboring Node requires the full Network Data. If set to False, the
neighboring Node only requires the stable Network Data.

#### See

MatterSpecification.v11.Core § 11.13.5.4.13

#### Inherited from

`TypeFromSchema.fullNetworkData`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:179](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L179)

***

### fullThreadDevice

> **fullThreadDevice**: `boolean`

This field shall specify if the neighboring Node is a full Thread device.

#### See

MatterSpecification.v11.Core § 11.13.5.4.12

#### Inherited from

`TypeFromSchema.fullThreadDevice`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:171](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L171)

***

### isChild

> **isChild**: `boolean`

This field shall specify if the neighboring Node is a direct child of the Node reporting the NeighborTable
attribute.

#### See

MatterSpecification.v11.Core § 11.13.5.4.14

#### Inherited from

`TypeFromSchema.isChild`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:187](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L187)

***

### lastRssi

> **lastRssi**: `null` \| `number`

This field shall specify the RSSI of the most recently received frame from the neighboring Node. If there is
no known last received frame the LastRssi field SHOULD have the value of null. This field shall have the
units of dBm, having the range -128 dBm to 0 dBm.

#### See

MatterSpecification.v11.Core § 11.13.5.4.8

#### Inherited from

`TypeFromSchema.lastRssi`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L140)

***

### linkFrameCounter

> **linkFrameCounter**: `number`

This field shall specify the number of link layer frames that have been received from the neighboring node.
This field shall be reset to 0 upon a reboot of the Node.

#### See

MatterSpecification.v11.Core § 11.13.5.4.4

#### Inherited from

`TypeFromSchema.linkFrameCounter`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L105)

***

### lqi

> **lqi**: `number`

This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality indicators,
scaled from 0 to 255.

#### See

MatterSpecification.v11.Core § 11.13.5.4.6

#### Inherited from

`TypeFromSchema.lqi`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L121)

***

### messageErrorRate?

> `optional` **messageErrorRate**: `number`

This field shall specify the percentage of received messages from the neighboring Node that have resulted in
errors.

#### See

MatterSpecification.v11.Core § 11.13.5.4.10

#### Inherited from

`TypeFromSchema.messageErrorRate`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:156](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L156)

***

### mleFrameCounter

> **mleFrameCounter**: `number`

This field shall specify the number of Mesh Link Establishment frames that have been received from the
neighboring node. This field shall be reset to 0 upon a reboot of the Node.

#### See

MatterSpecification.v11.Core § 11.13.5.4.5

#### Inherited from

`TypeFromSchema.mleFrameCounter`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L113)

***

### rloc16

> **rloc16**: `number`

This field shall specify the RLOC16 of the neighboring Node.

#### See

MatterSpecification.v11.Core § 11.13.5.4.3

#### Inherited from

`TypeFromSchema.rloc16`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L97)

***

### rxOnWhenIdle

> **rxOnWhenIdle**: `boolean`

This field shall specify if the neighboring Node is capable of receiving frames while the Node is in an idle
state.

#### See

MatterSpecification.v11.Core § 11.13.5.4.11

#### Inherited from

`TypeFromSchema.rxOnWhenIdle`

#### Source

[packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts:164](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ThreadNetworkDiagnosticsCluster.ts#L164)
