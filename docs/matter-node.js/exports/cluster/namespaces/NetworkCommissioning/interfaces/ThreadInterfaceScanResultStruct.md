[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [NetworkCommissioning](../README.md) / ThreadInterfaceScanResultStruct

# Interface: ThreadInterfaceScanResultStruct

ThreadInterfaceScanResultStruct represents a single Thread network scan result.

## See

MatterSpecification.v11.Core § 11.8.5.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvThreadInterfaceScanResultStruct`](../README.md#tlvthreadinterfacescanresultstruct)\>

## Properties

### channel?

> `optional` **channel**: `number`

#### Inherited from

`TypeFromSchema.channel`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:217

***

### extendedAddress?

> `optional` **extendedAddress**: `Uint8Array`

ExtendedAddress stands for an IEEE 802.15.4 Extended Address.

#### See

MatterSpecification.v11.Core § 11.8.5.6.1

#### Inherited from

`TypeFromSchema.extendedAddress`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:224

***

### extendedPanId?

> `optional` **extendedPanId**: `number` \| `bigint`

#### Inherited from

`TypeFromSchema.extendedPanId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:215

***

### lqi?

> `optional` **lqi**: `number`

#### Inherited from

`TypeFromSchema.lqi`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:226

***

### networkName?

> `optional` **networkName**: `string`

#### Inherited from

`TypeFromSchema.networkName`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:216

***

### panId?

> `optional` **panId**: `number`

#### Inherited from

`TypeFromSchema.panId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:214

***

### rssi?

> `optional` **rssi**: `number`

#### Inherited from

`TypeFromSchema.rssi`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:225

***

### version?

> `optional` **version**: `number`

#### Inherited from

`TypeFromSchema.version`

#### Source

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:218
