[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / export

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

Re-exports [MatterApplicationClusterSpecificationV1_0](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_0.md)

___

### MatterApplicationClusterSpecificationV1\_1

Re-exports [MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md)

___

### MatterApplicationClusterSpecificationV1\_2

Re-exports [MatterApplicationClusterSpecificationV1_2](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_2.md)

___

### MatterCoreSpecificationV1\_0

Re-exports [MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md)

___

### MatterCoreSpecificationV1\_1

Re-exports [MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md)

___

### MatterCoreSpecificationV1\_2

Re-exports [MatterCoreSpecificationV1_2](../interfaces/spec_export.MatterCoreSpecificationV1_2.md)

___

### MatterDeviceLibrarySpecificationV1\_0

Re-exports [MatterDeviceLibrarySpecificationV1_0](../interfaces/spec_export.MatterDeviceLibrarySpecificationV1_0.md)

___

### MatterDeviceLibrarySpecificationV1\_1

Re-exports [MatterDeviceLibrarySpecificationV1_1](../interfaces/spec_export.MatterDeviceLibrarySpecificationV1_1.md)

___

### MatterDeviceLibrarySpecificationV1\_2

Re-exports [MatterDeviceLibrarySpecificationV1_2](../interfaces/spec_export.MatterDeviceLibrarySpecificationV1_2.md)

## Type Aliases

### CommissioningControllerOptions

Ƭ **CommissioningControllerOptions**: [`CommissioningControllerNodeOptions`](device_export.md#commissioningcontrollernodeoptions) & \{ `adminFabricId?`: [`FabricId`](datatype_export.md#fabricid) ; `adminFabricIndex?`: [`FabricIndex`](datatype_export.md#fabricindex) ; `adminVendorId?`: [`VendorId`](datatype_export.md#vendorid) ; `autoConnect?`: `boolean` ; `caseAuthenticatedTags?`: [`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)[] ; `listeningAddressIpv4?`: `string` ; `listeningAddressIpv6?`: `string` ; `localPort?`: `number`  }

Constructor options for the CommissioningController class

#### Defined in

[packages/matter.js/src/CommissioningController.ts:37](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/CommissioningController.ts#L37)

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

[packages/matter.js/src/MatterServer.ts:31](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/MatterServer.ts#L31)

___

### NodeCommissioningOptions

Ƭ **NodeCommissioningOptions**: [`CommissioningControllerNodeOptions`](device_export.md#commissioningcontrollernodeoptions) & \{ `commissioning?`: [`CommissioningOptions`](protocol_export.md#commissioningoptions) ; `discovery`: \{ `identifierData`: [`CommissionableDeviceIdentifiers`](common_export.md#commissionabledeviceidentifiers)  } \| \{ `commissionableDevice`: [`CommissionableDevice`](common_export.md#commissionabledevice)  } & \{ `discoveryCapabilities?`: [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof [`DiscoveryCapabilitiesBitmap`](schema_export.md#discoverycapabilitiesbitmap)\> ; `knownAddress?`: [`ServerAddress`](common_export.md#serveraddress) ; `timeoutSeconds?`: `number`  } ; `passcode`: `number`  }

Options needed to commission a new node

#### Defined in

[packages/matter.js/src/CommissioningController.ts:80](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/CommissioningController.ts#L80)

___

### NodeOptions

Ƭ **NodeOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueNodeId?` | `string` | Deprecated name for uniqueStorageKey TODO: Remove with 0.8 or such **`Deprecated`** |
| `uniqueStorageKey?` | `string` | Unique storage key for this node to use for the storage context of this node. If not provided the order of node addition is used. |

#### Defined in

[packages/matter.js/src/MatterServer.ts:19](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/MatterServer.ts#L19)

## Variables

### FORBIDDEN\_PASSCODES

• `Const` **FORBIDDEN\_PASSCODES**: `number`[]

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:76](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/CommissioningServer.ts#L76)
