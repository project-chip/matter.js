[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md) / ThreadInterfaceScanResultStruct

# Interface: ThreadInterfaceScanResultStruct

[cluster/export](../modules/cluster_export.md).[NetworkCommissioning](../modules/cluster_export.NetworkCommissioning.md).ThreadInterfaceScanResultStruct

ThreadInterfaceScanResultStruct represents a single Thread network scan result.

**`See`**

MatterSpecification.v11.Core § 11.8.5.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvThreadInterfaceScanResultStruct`](../modules/cluster_export.NetworkCommissioning.md#tlvthreadinterfacescanresultstruct)\>

  ↳ **`ThreadInterfaceScanResultStruct`**

## Table of contents

### Properties

- [channel](cluster_export.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#channel)
- [extendedAddress](cluster_export.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#extendedaddress)
- [extendedPanId](cluster_export.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#extendedpanid)
- [lqi](cluster_export.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#lqi)
- [networkName](cluster_export.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#networkname)
- [panId](cluster_export.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#panid)
- [rssi](cluster_export.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#rssi)
- [version](cluster_export.NetworkCommissioning.ThreadInterfaceScanResultStruct.md#version)

## Properties

### channel

• `Optional` **channel**: `number`

#### Inherited from

TypeFromSchema.channel

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:234](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L234)

___

### extendedAddress

• `Optional` **extendedAddress**: `Uint8Array`

ExtendedAddress stands for an IEEE 802.15.4 Extended Address.

**`See`**

MatterSpecification.v11.Core § 11.8.5.6.1

#### Inherited from

TypeFromSchema.extendedAddress

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:242](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L242)

___

### extendedPanId

• `Optional` **extendedPanId**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.extendedPanId

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:232](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L232)

___

### lqi

• `Optional` **lqi**: `number`

#### Inherited from

TypeFromSchema.lqi

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:245](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L245)

___

### networkName

• `Optional` **networkName**: `string`

#### Inherited from

TypeFromSchema.networkName

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:233](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L233)

___

### panId

• `Optional` **panId**: `number`

#### Inherited from

TypeFromSchema.panId

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L231)

___

### rssi

• `Optional` **rssi**: `number`

#### Inherited from

TypeFromSchema.rssi

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:244](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L244)

___

### version

• `Optional` **version**: `number`

#### Inherited from

TypeFromSchema.version

#### Defined in

[packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts:235](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/NetworkCommissioningCluster.ts#L235)
