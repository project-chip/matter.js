[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / export

# Module: export

## Table of contents

### References

- [MatterApplicationClusterSpecificationV1\_0](export.md#matterapplicationclusterspecificationv1_0)
- [MatterApplicationClusterSpecificationV1\_1](export.md#matterapplicationclusterspecificationv1_1)
- [MatterCoreSpecificationV1\_0](export.md#mattercorespecificationv1_0)
- [MatterCoreSpecificationV1\_1](export.md#mattercorespecificationv1_1)
- [MatterDeviceLibrarySpecificationV1\_0](export.md#matterdevicelibraryspecificationv1_0)
- [MatterDeviceLibrarySpecificationV1\_1](export.md#matterdevicelibraryspecificationv1_1)

### Modules

- [&lt;internal\&gt;](export._internal_.md)

### Classes

- [CommissioningController](../classes/export.CommissioningController.md)
- [CommissioningServer](../classes/export.CommissioningServer.md)
- [MatterNode](../classes/export.MatterNode.md)
- [MatterServer](../classes/export.MatterServer.md)

### Interfaces

- [CommissioningControllerOptions](../interfaces/export.CommissioningControllerOptions.md)
- [CommissioningServerOptions](../interfaces/export.CommissioningServerOptions.md)
- [DevicePairingInformation](../interfaces/export.DevicePairingInformation.md)

### Type Aliases

- [MatterServerOptions](export.md#matterserveroptions)
- [NodeOptions](export.md#nodeoptions)

## References

### MatterApplicationClusterSpecificationV1\_0

Re-exports [MatterApplicationClusterSpecificationV1_0](../interfaces/exports_spec.MatterApplicationClusterSpecificationV1_0.md)

___

### MatterApplicationClusterSpecificationV1\_1

Re-exports [MatterApplicationClusterSpecificationV1_1](../interfaces/exports_spec.MatterApplicationClusterSpecificationV1_1.md)

___

### MatterCoreSpecificationV1\_0

Re-exports [MatterCoreSpecificationV1_0](../interfaces/exports_spec.MatterCoreSpecificationV1_0.md)

___

### MatterCoreSpecificationV1\_1

Re-exports [MatterCoreSpecificationV1_1](../interfaces/exports_spec.MatterCoreSpecificationV1_1.md)

___

### MatterDeviceLibrarySpecificationV1\_0

Re-exports [MatterDeviceLibrarySpecificationV1_0](../interfaces/exports_spec.MatterDeviceLibrarySpecificationV1_0.md)

___

### MatterDeviceLibrarySpecificationV1\_1

Re-exports [MatterDeviceLibrarySpecificationV1_1](../interfaces/exports_spec.MatterDeviceLibrarySpecificationV1_1.md)

## Type Aliases

### MatterServerOptions

Ƭ **MatterServerOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `disableIpv4?` | `boolean` | If set to true no IPv4 socket listener is sed and only IPv6 is supported. |
| `mdnsAnnounceInterface?` | `string` | Interface to use for MDNS announcements. If not provided announcements will be sent from all network interfaces |

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:13

___

### NodeOptions

Ƭ **NodeOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueNodeId?` | `string` | Unique node id to use for the storage context of this node. If not provided the order of node addition is used. |

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:9
