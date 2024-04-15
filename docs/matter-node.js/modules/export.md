[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / export

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

Ƭ **CommissioningControllerOptions**: [`CommissioningControllerNodeOptions`](exports_device.md#commissioningcontrollernodeoptions) & \{ `adminFabricId?`: [`FabricId`](exports_datatype.md#fabricid) ; `adminFabricIndex?`: [`FabricIndex`](exports_datatype.md#fabricindex) ; `adminVendorId?`: [`VendorId`](exports_datatype.md#vendorid) ; `autoConnect?`: `boolean` ; `caseAuthenticatedTags?`: [`CaseAuthenticatedTag`](exports_datatype.md#caseauthenticatedtag)[] ; `environment?`: \{ `environment`: [`Environment`](../classes/environment_export._internal_.Environment.md) ; `id`: `string`  } ; `listeningAddressIpv4?`: `string` ; `listeningAddressIpv6?`: `string` ; `localPort?`: `number`  }

Constructor options for the CommissioningController class

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:29

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

packages/matter.js/dist/esm/MatterServer.d.ts:20

___

### NodeCommissioningOptions

Ƭ **NodeCommissioningOptions**: [`CommissioningControllerNodeOptions`](exports_device.md#commissioningcontrollernodeoptions) & \{ `commissioning?`: [`CommissioningOptions`](exports_protocol.md#commissioningoptions) ; `discovery`: \{ `identifierData`: [`CommissionableDeviceIdentifiers`](exports_common.md#commissionabledeviceidentifiers)  } \| \{ `commissionableDevice`: [`CommissionableDevice`](exports_common.md#commissionabledevice)  } & \{ `discoveryCapabilities?`: [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof [`DiscoveryCapabilitiesBitmap`](exports_schema.md#discoverycapabilitiesbitmap)\> ; `knownAddress?`: [`ServerAddress`](exports_common.md#serveraddress) ; `timeoutSeconds?`: `number`  } ; `passcode`: `number`  }

Options needed to commission a new node

#### Defined in

packages/matter.js/dist/esm/CommissioningController.d.ts:78

___

### NodeOptions

Ƭ **NodeOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `uniqueNodeId?` | `string` | Deprecated name for uniqueStorageKey TODO: Remove with 0.8 or such **`Deprecated`** |
| `uniqueStorageKey?` | `string` | Unique storage key for this node to use for the storage context of this node. If not provided the order of node addition is used. |

#### Defined in

packages/matter.js/dist/esm/MatterServer.d.ts:10

## Variables

### FORBIDDEN\_PASSCODES

• `Const` **FORBIDDEN\_PASSCODES**: `number`[]

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:25

___

### MATTER\_DATAMODEL\_VERSION

• `Const` **MATTER\_DATAMODEL\_VERSION**: ``16``

Data model revision used by this implementation
Value of 16 means "Matter 1.0/1.1"

**`See`**

MatterSpecification.v11.Core § 7.1.1

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:32
