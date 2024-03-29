[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/common

# Module: exports/common

## Table of contents

### Modules

- [\<internal\>](exports_common._internal_.md)

### Namespaces

- [FailsafeContext](exports_common.FailsafeContext.md)
- [Lifecycle](exports_common.Lifecycle.md)

### Classes

- [CrashedDependencyError](../classes/exports_common.CrashedDependencyError.md)
- [DependencyLifecycleError](../classes/exports_common.DependencyLifecycleError.md)
- [DestroyedDependencyError](../classes/exports_common.DestroyedDependencyError.md)
- [FailsafeContext](../classes/exports_common.FailsafeContext-1.md)
- [FailsafeTimer](../classes/exports_common.FailsafeTimer.md)
- [ImplementationError](../classes/exports_common.ImplementationError.md)
- [InternalError](../classes/exports_common.InternalError.md)
- [MatterError](../classes/exports_common.MatterError.md)
- [MatterFabricConflictError](../classes/exports_common.MatterFabricConflictError.md)
- [MatterFlowError](../classes/exports_common.MatterFlowError.md)
- [NoProviderError](../classes/exports_common.NoProviderError.md)
- [NotImplementedError](../classes/exports_common.NotImplementedError.md)
- [ReadOnlyError](../classes/exports_common.ReadOnlyError.md)
- [UnexpectedDataError](../classes/exports_common.UnexpectedDataError.md)
- [UninitializedDependencyError](../classes/exports_common.UninitializedDependencyError.md)
- [UnsupportedDependencyError](../classes/exports_common.UnsupportedDependencyError.md)
- [UnsupportedDependencyStatusError](../classes/exports_common.UnsupportedDependencyStatusError.md)
- [ValidationError](../classes/exports_common.ValidationError.md)

### Interfaces

- [Cancellable](../interfaces/exports_common.Cancellable.md)
- [Channel](../interfaces/exports_common.Channel.md)
- [CommissioningModeInstanceData](../interfaces/exports_common.CommissioningModeInstanceData.md)
- [Destructable](../interfaces/exports_common.Destructable.md)
- [InstanceBroadcaster](../interfaces/exports_common.InstanceBroadcaster.md)
- [Listener](../interfaces/exports_common.Listener.md)
- [Scanner](../interfaces/exports_common.Scanner.md)
- [Startable](../interfaces/exports_common.Startable.md)
- [TransportInterface](../interfaces/exports_common.TransportInterface.md)

### Type Aliases

- [AddressTypeFromDevice](exports_common.md#addresstypefromdevice)
- [CommissionableDevice](exports_common.md#commissionabledevice)
- [CommissionableDeviceIdentifiers](exports_common.md#commissionabledeviceidentifiers)
- [CommissionerInstanceData](exports_common.md#commissionerinstancedata)
- [DiscoverableDevice](exports_common.md#discoverabledevice)
- [DiscoveryData](exports_common.md#discoverydata)
- [OperationalDevice](exports_common.md#operationaldevice)
- [OperationalInstanceData](exports_common.md#operationalinstancedata)
- [ServerAddress](exports_common.md#serveraddress)
- [ServerAddressBle](exports_common.md#serveraddressble)
- [ServerAddressIp](exports_common.md#serveraddressip)

### Variables

- [PairingHintBitmap](exports_common.md#pairinghintbitmap)
- [PairingHintBitmapSchema](exports_common.md#pairinghintbitmapschema)

### Functions

- [serverAddressToString](exports_common.md#serveraddresstostring)
- [tryCatch](exports_common.md#trycatch)
- [tryCatchAsync](exports_common.md#trycatchasync)

## Type Aliases

### AddressTypeFromDevice

Ƭ **AddressTypeFromDevice**\<`D`\>: `D` extends [`DiscoverableDevice`](exports_common.md#discoverabledevice)\<infer SA\> ? `SA` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`DiscoverableDevice`](exports_common.md#discoverabledevice)\<`any`\> |

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:42

___

### CommissionableDevice

Ƭ **CommissionableDevice**: [`DiscoverableDevice`](exports_common.md#discoverabledevice)\<[`ServerAddress`](exports_common.md#serveraddress)\> & \{ `CM`: `number` ; `D`: `number` ; `deviceIdentifier`: `string`  }

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:46

___

### CommissionableDeviceIdentifiers

Ƭ **CommissionableDeviceIdentifiers**: \{ `instanceId`: `string`  } \| \{ `longDiscriminator`: `number`  } \| \{ `shortDiscriminator`: `number`  } \| \{ `vendorId`: [`VendorId`](exports_datatype.md#vendorid)  } \| \{ `deviceType`: `number`  } \| \{ `productId`: `number`  } \| \{ [K in any]: never }

Identifier to use to discover a commissionable device.
Please decide for the best matching identifier that you have.

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:57

___

### CommissionerInstanceData

Ƭ **CommissionerInstanceData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceName` | `string` | Device name for commissionable announcements. |
| `deviceType?` | `number` | Device type for commissionable announcements. |
| `productId` | `number` | Vendor ID for commissionable announcements. |
| `sessionActiveInterval?` | `number` | Session Active Interval of the device for commissionable announcements. |
| `sessionActiveThreshold?` | `number` | This key defines the duration of time the node stays Active after the last network activity. * |
| `sessionIdleInterval?` | `number` | Session Idle Interval of the device for commissionable announcements. |
| `vendorId` | [`VendorId`](exports_datatype.md#vendorid) | Device type for commissionable announcements. |

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:224

___

### DiscoverableDevice

Ƭ **DiscoverableDevice**\<`SA`\>: [`DiscoveryData`](exports_common.md#discoverydata) & \{ `addresses`: `SA`[]  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SA` | extends [`ServerAddress`](exports_common.md#serveraddress) |

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:38

___

### DiscoveryData

Ƭ **DiscoveryData**: `Object`

All information exposed by a commissionable device via announcements.
The properties are named identical as in the Matter specification.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `DN?` | `string` | Device advertising name |
| `DT?` | `number` | Device type |
| `ICD?` | `number` | ICD Long Idle Time operating mode supported |
| `PH?` | `number` | Pairing hint |
| `PI?` | `string` | Pairing instructions |
| `RI?` | `string` | Rotating device identifier |
| `SAI?` | `number` | Sleep Active Interval |
| `SAT?` | `number` | Session active threshold |
| `SII?` | `number` | Sleep Idle Interval |
| `T?` | `number` | TCP supported |
| `VP?` | `string` | VendorId + ProductId |

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:14

___

### OperationalDevice

Ƭ **OperationalDevice**: [`DiscoverableDevice`](exports_common.md#discoverabledevice)\<[`ServerAddressIp`](exports_common.md#serveraddressip)\> & \{ `deviceIdentifier`: `string`  }

#### Defined in

packages/matter.js/dist/esm/common/Scanner.d.ts:43

___

### OperationalInstanceData

Ƭ **OperationalInstanceData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `sessionActiveInterval?` | `number` | Session Active Interval of the device for operational announcements. |
| `sessionActiveThreshold?` | `number` | This key defines the duration of time the node stays Active after the last network activity. * |
| `sessionIdleInterval?` | `number` | Session Idle Interval of the device for operational announcements. |

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:240

___

### ServerAddress

Ƭ **ServerAddress**: [`ServerAddressIp`](exports_common.md#serveraddressip) \| [`ServerAddressBle`](exports_common.md#serveraddressble)

#### Defined in

packages/matter.js/dist/esm/common/ServerAddress.d.ts:15

___

### ServerAddressBle

Ƭ **ServerAddressBle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `peripheralAddress` | `string` |
| `type` | ``"ble"`` |

#### Defined in

packages/matter.js/dist/esm/common/ServerAddress.d.ts:11

___

### ServerAddressIp

Ƭ **ServerAddressIp**: `Object`

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ip` | `string` |
| `port` | `number` |
| `type` | ``"udp"`` |

#### Defined in

packages/matter.js/dist/esm/common/ServerAddress.d.ts:6

## Variables

### PairingHintBitmap

• `Const` **PairingHintBitmap**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `administrator` | [`BitFlag`](exports_schema.md#bitflag) | The Device has been commissioned. Any Administrator that commissioned the device provides a user interface that may be used to put the device into Commissioning Mode. |
| `customInstruction` | [`BitFlag`](exports_schema.md#bitflag) | The PI key/value pair describes a custom way to put the Device into Commissioning Mode. This Custom Instruction option is NOT recommended for use by a Device that does not have knowledge of the user’s language preference. |
| `deviceManual` | [`BitFlag`](exports_schema.md#bitflag) | The Device Manual provides special instructions to put the Device into Commissioning Mode (see Section 11.22.5.8, “UserManualUrl”). This is a catch-all option to capture user interactions that are not codified by other options in this table. |
| `deviceManufacturerUrl` | [`BitFlag`](exports_schema.md#bitflag) | This SHALL be set to 1 for devices requiring Custom Commissioning Flow before they can be available for Commissioning by any Commissioner. For such a flow, the user SHOULD be sent to the URL specified in the CommissioningCustomFlowUrl of the DeviceModel schema entry indexed by the Vendor ID and Product ID (e.g., as found in the announcement) in the Distributed Compliance Ledger. |
| `powerCycle` | [`BitFlag`](exports_schema.md#bitflag) | The Device will automatically enter Commissioning Mode upon power cycle (unplug/re- plug, remove/re-insert batteries). This bit SHALL be set to 1 for devices using Standard Commissioning Flow, and set to 0 otherwise. |
| `pressResetButton` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed. |
| `pressResetButtonForNumberOfSecondsWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed for N seconds when applying power to it. The exact value of N SHALL be made available via PI key. |
| `pressResetButtonNumberOfTimes` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed N times with maximum 1 second between each press. The exact value of N SHALL be made available via PI key. |
| `pressResetButtonUntilLightBlinks` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed until associated light blinks. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressResetButtonUntilLightBlinksWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed until associated light blinks when applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressResetButtonWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed when applying power to it. |
| `pressRestButtonForNumberOfSeconds` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed for N seconds. The exact value of N SHALL be made available via PI key. |
| `pressSetupButton` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed. |
| `pressSetupButtonForNumberOfSeconds` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed for N seconds. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonForNumberOfSecondsWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed for N seconds when applying power to it. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonNumberOfTimes` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed N times with maximum 1 second between each press. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonUntilLightBlinks` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed until associated light blinks. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressSetupButtonUntilLightBlinksWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed until associated light blinks when applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressSetupButtonWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed when applying power to it. |
| `settingsMenuOnNode` | [`BitFlag`](exports_schema.md#bitflag) | The settings menu on the Device provides instructions to put it into Commissioning Mode. |

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:10

___

### PairingHintBitmapSchema

• `Const` **PairingHintBitmapSchema**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md)

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:110

## Functions

### serverAddressToString

▸ **serverAddressToString**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](exports_common.md#serveraddress) |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/esm/common/ServerAddress.d.ts:16

___

### tryCatch

▸ **tryCatch**\<`T`, `E`\>(`codeBlock`, `errorType`, `fallbackValueOrFunction`): `T`

Try to execute the code block and catch the error if it is of the given type.
If the error is of the given type, the fallback value or the result of the function is returned.
If the function returns undefined or the error type do not match, the error is normally thrown and not handled.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends `Error` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `codeBlock` | () => `T` | Code block to execute |
| `errorType` | [`ClassExtends`](util_export.md#classextends)\<`E`\> | Errortype to catch and handle |
| `fallbackValueOrFunction` | `T` \| [`ErrorHandler`](exports_common._internal_.md#errorhandler)\<`T`, `E`\> | Fallback value or function to compute the fallback value |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/esm/common/TryCatchHandler.d.ts:17

___

### tryCatchAsync

▸ **tryCatchAsync**\<`T`, `E`\>(`codeBlock`, `errorType`, `fallbackValueOrFunction`): `Promise`\<`T`\>

Try to execute the async code block and catch the error if it is of the given type.
If the error is of the given type, the fallback value or the result of the function is returned.
If the function returns undefined or the error type do not match, the error is normally thrown and not handled.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `E` | extends `Error` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `codeBlock` | () => `Promise`\<`T`\> | Async code block to execute |
| `errorType` | [`ClassExtends`](util_export.md#classextends)\<`E`\> | Errortype to catch and handle |
| `fallbackValueOrFunction` | `T` \| [`ErrorHandler`](exports_common._internal_.md#errorhandler)\<`Promise`\<`T`\>, `E`\> | Fallback value or function to compute the fallback value |

#### Returns

`Promise`\<`T`\>

#### Defined in

packages/matter.js/dist/esm/common/TryCatchHandler.d.ts:27
