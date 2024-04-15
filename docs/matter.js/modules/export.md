[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / export

# Module: export

## Table of contents

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
- [MATTER\_DATAMODEL\_VERSION](export.md#matter_datamodel_version)

## Type Aliases

### CommissioningControllerOptions

Ƭ **CommissioningControllerOptions**: [`CommissioningControllerNodeOptions`](device_export.md#commissioningcontrollernodeoptions) & \{ `adminFabricId?`: [`FabricId`](datatype_export.md#fabricid) ; `adminFabricIndex?`: [`FabricIndex`](datatype_export.md#fabricindex) ; `adminVendorId?`: [`VendorId`](datatype_export.md#vendorid) ; `autoConnect?`: `boolean` ; `caseAuthenticatedTags?`: [`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)[] ; `environment?`: \{ `environment`: [`Environment`](../classes/environment_export.Environment.md) ; `id`: `string`  } ; `listeningAddressIpv4?`: `string` ; `listeningAddressIpv6?`: `string` ; `localPort?`: `number`  }

Constructor options for the CommissioningController class

#### Defined in

[packages/matter.js/src/CommissioningController.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningController.ts#L47)

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

[packages/matter.js/src/MatterServer.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L32)

___

### NodeCommissioningOptions

Ƭ **NodeCommissioningOptions**: [`CommissioningControllerNodeOptions`](device_export.md#commissioningcontrollernodeoptions) & \{ `commissioning?`: [`CommissioningOptions`](protocol_export.md#commissioningoptions) ; `discovery`: \{ `identifierData`: [`CommissionableDeviceIdentifiers`](common_export.md#commissionabledeviceidentifiers)  } \| \{ `commissionableDevice`: [`CommissionableDevice`](common_export.md#commissionabledevice)  } & \{ `discoveryCapabilities?`: [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof [`DiscoveryCapabilitiesBitmap`](schema_export.md#discoverycapabilitiesbitmap)\> ; `knownAddress?`: [`ServerAddress`](common_export.md#serveraddress) ; `timeoutSeconds?`: `number`  } ; `passcode`: `number`  }

Options needed to commission a new node

#### Defined in

[packages/matter.js/src/CommissioningController.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningController.ts#L106)

___

### NodeOptions

Ƭ **NodeOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueNodeId?` | `string` | Deprecated name for uniqueStorageKey TODO: Remove with 0.8 or such **`Deprecated`** |
| `uniqueStorageKey?` | `string` | Unique storage key for this node to use for the storage context of this node. If not provided the order of node addition is used. |

#### Defined in

[packages/matter.js/src/MatterServer.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/MatterServer.ts#L20)

## Variables

### FORBIDDEN\_PASSCODES

• `Const` **FORBIDDEN\_PASSCODES**: `number`[]

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:76](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L76)

___

### MATTER\_DATAMODEL\_VERSION

• `Const` **MATTER\_DATAMODEL\_VERSION**: ``16``

Data model revision used by this implementation
Value of 16 means "Matter 1.0/1.1"

**`See`**

MatterSpecification.v11.Core § 7.1.1

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L86)
