[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / export

# Module: export

## Table of contents

### References

- [MatterApplicationClusterSpecificationV1\_0](export.md#matterapplicationclusterspecificationv1_0)
- [MatterApplicationClusterSpecificationV1\_1](export.md#matterapplicationclusterspecificationv1_1)
- [MatterApplicationClusterSpecificationV1\_2](export.md#matterapplicationclusterspecificationv1_2)
- [MatterCoreSpecificationV1\_0](export.md#mattercorespecificationv1_0)
- [MatterCoreSpecificationV1\_1](export.md#mattercorespecificationv1_1)
- [MatterCoreSpecificationV1\_2](export.md#mattercorespecificationv1_2)
- [MatterDeviceLibrarySpecificationV1\_0](export.md#matterdevicelibraryspecificationv1_0)
- [MatterDeviceLibrarySpecificationV1\_1](export.md#matterdevicelibraryspecificationv1_1)
- [MatterDeviceLibrarySpecificationV1\_2](export.md#matterdevicelibraryspecificationv1_2)

### Modules

- [\<internal\>](export._internal_.md)

### Classes

- [CommissioningController](../classes/export.CommissioningController.md)
- [CommissioningServer](../classes/export.CommissioningServer.md)
- [MatterNode](../classes/export.MatterNode.md)
- [MatterServer](../classes/export.MatterServer.md)

### Interfaces

- [CommissioningServerOptions](../interfaces/export.CommissioningServerOptions.md)
- [DevicePairingInformation](../interfaces/export.DevicePairingInformation.md)

### Type Aliases

- [CommissioningControllerOptions](export.md#commissioningcontrolleroptions)
- [MatterServerOptions](export.md#matterserveroptions)
- [NodeCommissioningOptions](export.md#nodecommissioningoptions)
- [NodeOptions](export.md#nodeoptions)

### Variables

- [FORBIDDEN\_PASSCODES](export.md#forbidden_passcodes)

## References

### MatterApplicationClusterSpecificationV1\_0

Re-exports [MatterApplicationClusterSpecificationV1_0](../interfaces/exports_spec.MatterApplicationClusterSpecificationV1_0.md)

___

### MatterApplicationClusterSpecificationV1\_1

Re-exports [MatterApplicationClusterSpecificationV1_1](../interfaces/exports_spec.MatterApplicationClusterSpecificationV1_1.md)

___

### MatterApplicationClusterSpecificationV1\_2

Re-exports [MatterApplicationClusterSpecificationV1_2](../interfaces/exports_spec.MatterApplicationClusterSpecificationV1_2.md)

___

### MatterCoreSpecificationV1\_0

Re-exports [MatterCoreSpecificationV1_0](../interfaces/exports_spec.MatterCoreSpecificationV1_0.md)

___

### MatterCoreSpecificationV1\_1

Re-exports [MatterCoreSpecificationV1_1](../interfaces/exports_spec.MatterCoreSpecificationV1_1.md)

___

### MatterCoreSpecificationV1\_2

Re-exports [MatterCoreSpecificationV1_2](../interfaces/exports_spec.MatterCoreSpecificationV1_2.md)

___

### MatterDeviceLibrarySpecificationV1\_0

Re-exports [MatterDeviceLibrarySpecificationV1_0](../interfaces/exports_spec.MatterDeviceLibrarySpecificationV1_0.md)

___

### MatterDeviceLibrarySpecificationV1\_1

Re-exports [MatterDeviceLibrarySpecificationV1_1](../interfaces/exports_spec.MatterDeviceLibrarySpecificationV1_1.md)

___

### MatterDeviceLibrarySpecificationV1\_2

Re-exports [MatterDeviceLibrarySpecificationV1_2](../interfaces/exports_spec.MatterDeviceLibrarySpecificationV1_2.md)

## Type Aliases

### CommissioningControllerOptions

Ƭ **CommissioningControllerOptions**: [`CommissioningControllerNodeOptions`](exports_device.md#commissioningcontrollernodeoptions) & \{ `adminFabricId?`: [`FabricId`](exports_datatype.md#fabricid) ; `adminFabricIndex?`: [`FabricIndex`](exports_datatype.md#fabricindex) ; `adminVendorId?`: [`VendorId`](exports_datatype.md#vendorid) ; `autoConnect?`: `boolean` ; `caseAuthenticatedTags?`: [`CaseAuthenticatedTag`](exports_datatype.md#caseauthenticatedtag)[] ; `listeningAddressIpv4?`: `string` ; `listeningAddressIpv6?`: `string` ; `localPort?`: `number`  }

Constructor options for the CommissioningController class

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:26

___

### MatterServerOptions

Ƭ **MatterServerOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `disableIpv4?` | `boolean` | If set to true no IPv4 socket listener is sed and only IPv6 is supported. |
| `mdnsAnnounceInterface?` | `string` | Interface to use for MDNS announcements. If not provided announcements will be sent from all network interfaces TODO: Remove in later versions then 0.7 **`Deprecated`** |
| `mdnsInterface?` | `string` | Interface to use for MDNS announcements and scanning. If not provided announcements/scanning will be done on all network interfaces |

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:19

___

### NodeCommissioningOptions

Ƭ **NodeCommissioningOptions**: [`CommissioningControllerNodeOptions`](exports_device.md#commissioningcontrollernodeoptions) & \{ `commissioning?`: [`CommissioningOptions`](exports_protocol.md#commissioningoptions) ; `discovery`: \{ `identifierData`: [`CommissionableDeviceIdentifiers`](exports_common.md#commissionabledeviceidentifiers)  } \| \{ `commissionableDevice`: [`CommissionableDevice`](exports_common.md#commissionabledevice)  } & \{ `discoveryCapabilities?`: [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof [`DiscoveryCapabilitiesBitmap`](exports_schema.md#discoverycapabilitiesbitmap)\> ; `knownAddress?`: [`ServerAddress`](exports_common.md#serveraddress) ; `timeoutSeconds?`: `number`  } ; `passcode`: `number`  }

Options needed to commission a new node

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:61

___

### NodeOptions

Ƭ **NodeOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueNodeId?` | `string` | Deprecated name for uniqueStorageKey TODO: Remove with 0.8 or such **`Deprecated`** |
| `uniqueStorageKey?` | `string` | Unique storage key for this node to use for the storage context of this node. If not provided the order of node addition is used. |

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:9

## Variables

### FORBIDDEN\_PASSCODES

• `Const` **FORBIDDEN\_PASSCODES**: `number`[]

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:26
