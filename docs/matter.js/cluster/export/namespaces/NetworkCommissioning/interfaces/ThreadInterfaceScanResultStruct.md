[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [NetworkCommissioning](../README.md) / ThreadInterfaceScanResultStruct

# Interface: ThreadInterfaceScanResultStruct

ThreadInterfaceScanResultStruct represents a single Thread network scan result.

## See

MatterSpecification.v11.Core § 11.8.5.6

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvThreadInterfaceScanResultStruct`](../README.md#tlvthreadinterfacescanresultstruct)\>

## Properties

### channel?

> `optional` **channel**: `number`

#### Inherited from

`TypeFromSchema.channel`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:234](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L234)

***

### extendedAddress?

> `optional` **extendedAddress**: `Uint8Array`

ExtendedAddress stands for an IEEE 802.15.4 Extended Address.

#### See

MatterSpecification.v11.Core § 11.8.5.6.1

#### Inherited from

`TypeFromSchema.extendedAddress`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:242](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L242)

***

### extendedPanId?

> `optional` **extendedPanId**: `number` \| `bigint`

#### Inherited from

`TypeFromSchema.extendedPanId`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:232](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L232)

***

### lqi?

> `optional` **lqi**: `number`

#### Inherited from

`TypeFromSchema.lqi`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:245](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L245)

***

### networkName?

> `optional` **networkName**: `string`

#### Inherited from

`TypeFromSchema.networkName`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:233](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L233)

***

### panId?

> `optional` **panId**: `number`

#### Inherited from

`TypeFromSchema.panId`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:231](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L231)

***

### rssi?

> `optional` **rssi**: `number`

#### Inherited from

`TypeFromSchema.rssi`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L244)

***

### version?

> `optional` **version**: `number`

#### Inherited from

`TypeFromSchema.version`

#### Source

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:235](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L235)
