[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md) / ThreadInterfaceScanResultStruct

# Interface: ThreadInterfaceScanResultStruct

[exports/cluster](../modules/exports_cluster.md).[NetworkCommissioning](../modules/exports_cluster.NetworkCommissioning.md).ThreadInterfaceScanResultStruct

ThreadInterfaceScanResultStruct represents a single Thread network scan result.

**`See`**

MatterSpecification.v11.Core § 11.8.5.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvThreadInterfaceScanResultStruct`](../modules/exports_cluster.NetworkCommissioning.md#tlvthreadinterfacescanresultstruct)\>

  ↳ **`ThreadInterfaceScanResultStruct`**

## Table of contents

### Properties

- [channel](exports_cluster.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#channel)
- [extendedAddress](exports_cluster.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#extendedaddress)
- [extendedPanId](exports_cluster.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#extendedpanid)
- [lqi](exports_cluster.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#lqi)
- [networkName](exports_cluster.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#networkname)
- [panId](exports_cluster.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#panid)
- [rssi](exports_cluster.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#rssi)
- [version](exports_cluster.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#version)

## Properties

### channel

• `Optional` **channel**: `number`

#### Inherited from

TypeFromSchema.channel

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:217

___

### extendedAddress

• `Optional` **extendedAddress**: `Uint8Array`

ExtendedAddress stands for an IEEE 802.15.4 Extended Address.

**`See`**

MatterSpecification.v11.Core § 11.8.5.6.1

#### Inherited from

TypeFromSchema.extendedAddress

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:224

___

### extendedPanId

• `Optional` **extendedPanId**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.extendedPanId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:215

___

### lqi

• `Optional` **lqi**: `number`

#### Inherited from

TypeFromSchema.lqi

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:226

___

### networkName

• `Optional` **networkName**: `string`

#### Inherited from

TypeFromSchema.networkName

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:216

___

### panId

• `Optional` **panId**: `number`

#### Inherited from

TypeFromSchema.panId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:214

___

### rssi

• `Optional` **rssi**: `number`

#### Inherited from

TypeFromSchema.rssi

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:225

___

### version

• `Optional` **version**: `number`

#### Inherited from

TypeFromSchema.version

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/NetworkCommissioningCluster.d.ts:218
