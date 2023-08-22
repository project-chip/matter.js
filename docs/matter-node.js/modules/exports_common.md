[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/common

# Module: exports/common

## Table of contents

### Classes

- [ImplementationError](../classes/exports_common.ImplementationError.md)
- [InternalError](../classes/exports_common.InternalError.md)
- [MatterError](../classes/exports_common.MatterError.md)
- [MatterFlowError](../classes/exports_common.MatterFlowError.md)
- [NoProviderError](../classes/exports_common.NoProviderError.md)
- [NotImplementedError](../classes/exports_common.NotImplementedError.md)
- [UnexpectedDataError](../classes/exports_common.UnexpectedDataError.md)
- [ValidationError](../classes/exports_common.ValidationError.md)

### Interfaces

- [Channel](../interfaces/exports_common.Channel.md)
- [InstanceBroadcaster](../interfaces/exports_common.InstanceBroadcaster.md)
- [Listener](../interfaces/exports_common.Listener.md)
- [Scanner](../interfaces/exports_common.Scanner.md)
- [TransportInterface](../interfaces/exports_common.TransportInterface.md)

### Type Aliases

- [CommissionableDevice](exports_common.md#commissionabledevice)
- [CommissionableDeviceIdentifiers](exports_common.md#commissionabledeviceidentifiers)
- [CommissionerInstanceData](exports_common.md#commissionerinstancedata)
- [CommissioningModeInstanceData](exports_common.md#commissioningmodeinstancedata)
- [OperationalInstanceData](exports_common.md#operationalinstancedata)
- [ServerAddress](exports_common.md#serveraddress)
- [ServerAddressBle](exports_common.md#serveraddressble)
- [ServerAddressIp](exports_common.md#serveraddressip)

### Variables

- [PairingHintBitmap](exports_common.md#pairinghintbitmap)
- [PairingHintBitmapSchema](exports_common.md#pairinghintbitmapschema)

### Functions

- [tryCatch](exports_common.md#trycatch)
- [tryCatchAsync](exports_common.md#trycatchasync)

## Type Aliases

### CommissionableDevice

Ƭ **CommissionableDevice**: `Object`

All information exposed by a commissionable device via announcements.
The properties are named identical as in the Matter specification.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `CM` | `number` | Commissioning Mode |
| `D` | `number` | Discriminator |
| `DN?` | `string` | Device advertising name |
| `DT?` | `number` | Device type |
| `PH?` | `number` | Pairing hint |
| `PI?` | `string` | Pairing instructions |
| `RI?` | `string` | Rotating device identifier |
| `SAI?` | `number` | Sleep Active Interval |
| `SII?` | `number` | Sleep Idle Interval |
| `T?` | `number` | TCP supported |
| `VP?` | `string` | VendorId + ProductId |
| `addresses` | [`ServerAddress`](exports_common.md#serveraddress)[] | The device's addresses IP/port pairs |

#### Defined in

packages/matter.js/dist/cjs/common/Scanner.d.ts:14

___

### CommissionableDeviceIdentifiers

Ƭ **CommissionableDeviceIdentifiers**: { `instanceId`: `string`  } \| { `longDiscriminator`: `number`  } \| { `shortDiscriminator`: `number`  } \| { `vendorId`: [`VendorId`](exports_datatype.md#vendorid)  } \| { `deviceType`: `number`  } \| { `productId`: `number`  } \| { [K in any]: never }

Identifier to use to discover a commissionable device.
Please decide for the best matching identifier that you have.

#### Defined in

packages/matter.js/dist/cjs/common/Scanner.d.ts:44

___

### CommissionerInstanceData

Ƭ **CommissionerInstanceData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceName` | `string` | Device name for commissionable announcements. |
| `deviceType?` | `number` | Device type for commissionable announcements. |
| `productId` | `number` | Vendor ID for commissionable announcements. |
| `sleepActiveInterval?` | `number` | Sleep Active Interval of the device for commissionable announcements. |
| `sleepIdleInterval?` | `number` | Sleep Idle Interval of the device for commissionable announcements. |
| `vendorId` | [`VendorId`](exports_datatype.md#vendorid) | Device type for commissionable announcements. |

#### Defined in

packages/matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:229

___

### CommissioningModeInstanceData

Ƭ **CommissioningModeInstanceData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceName` | `string` | Device name for commissionable announcements. |
| `deviceType` | `number` | Device type for commissionable announcements. |
| `discriminator` | `number` | Device discriminator for commissionable announcements. |
| `pairingHint?` | [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<typeof [`PairingHintBitmap`](exports_common.md#pairinghintbitmap)\> | Pairing Hint of the device for commissionable announcements. |
| `pairingInstructions?` | `string` | Pairing Instruction of the device for commissionable announcements. |
| `productId` | `number` | Product ID for commissionable announcements. |
| `sleepActiveInterval?` | `number` | Sleep Active Interval of the device for commissionable announcements. |
| `sleepIdleInterval?` | `number` | Sleep Idle Interval of the device for commissionable announcements. |
| `vendorId` | [`VendorId`](exports_datatype.md#vendorid) | Vendor ID for commissionable announcements. |

#### Defined in

packages/matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:209

___

### OperationalInstanceData

Ƭ **OperationalInstanceData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `sleepActiveInterval?` | `number` | Sleep Active Interval of the device for operational announcements. |
| `sleepIdleInterval?` | `number` | Sleep Idle Interval of the device for operational announcements. |

#### Defined in

packages/matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:243

___

### ServerAddress

Ƭ **ServerAddress**: [`ServerAddressIp`](exports_common.md#serveraddressip) \| [`ServerAddressBle`](exports_common.md#serveraddressble)

#### Defined in

packages/matter.js/dist/cjs/common/ServerAddress.d.ts:15

___

### ServerAddressBle

Ƭ **ServerAddressBle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `peripheralAddress` | `string` |
| `type` | ``"ble"`` |

#### Defined in

packages/matter.js/dist/cjs/common/ServerAddress.d.ts:11

___

### ServerAddressIp

Ƭ **ServerAddressIp**: `Object`

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ip` | `string` |
| `port` | `number` |
| `type` | ``"udp"`` |

#### Defined in

packages/matter.js/dist/cjs/common/ServerAddress.d.ts:6

## Variables

### PairingHintBitmap

• `Const` **PairingHintBitmap**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `administrator` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device has been commissioned. Any Administrator that commissioned the device provides a user interface that may be used to put the device into Commissioning Mode. |
| `customInstruction` | [`BitFlag`](exports_schema.md#bitflag-1) | The PI key/value pair describes a custom way to put the Device into Commissioning Mode. This Custom Instruction option is NOT recommended for use by a Device that does not have knowledge of the user’s language preference. |
| `deviceManual` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device Manual provides special instructions to put the Device into Commissioning Mode (see Section 11.22.5.8, “UserManualUrl”). This is a catch-all option to capture user interactions that are not codified by other options in this table. |
| `deviceManufacturerUrl` | [`BitFlag`](exports_schema.md#bitflag-1) | This SHALL be set to 1 for devices requiring Custom Commissioning Flow before they can be available for Commissioning by any Commissioner. For such a flow, the user SHOULD be sent to the URL specified in the CommissioningCustomFlowUrl of the DeviceModel schema entry indexed by the Vendor ID and Product ID (e.g., as found in the announcement) in the Distributed Compliance Ledger. |
| `powerCycle` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will automatically enter Commissioning Mode upon power cycle (unplug/re- plug, remove/re-insert batteries). This bit SHALL be set to 1 for devices using Standard Commissioning Flow, and set to 0 otherwise. |
| `pressResetButton` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed. |
| `pressResetButtonForNumberOfSecondsWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed for N seconds when applying power to it. The exact value of N SHALL be made available via PI key. |
| `pressResetButtonNumberOfTimes` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed N times with maximum 1 second between each press. The exact value of N SHALL be made available via PI key. |
| `pressResetButtonUntilLightBlinks` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed until associated light blinks. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressResetButtonUntilLightBlinksWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed until associated light blinks when applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressResetButtonWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed when applying power to it. |
| `pressRestButtonForNumberOfSeconds` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed for N seconds. The exact value of N SHALL be made available via PI key. |
| `pressSetupButton` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed. |
| `pressSetupButtonForNumberOfSeconds` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed for N seconds. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonForNumberOfSecondsWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed for N seconds when applying power to it. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonNumberOfTimes` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed N times with maximum 1 second between each press. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonUntilLightBlinks` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed until associated light blinks. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressSetupButtonUntilLightBlinksWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed until associated light blinks when applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressSetupButtonWithApplicationOfPower` | [`BitFlag`](exports_schema.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed when applying power to it. |
| `settingsMenuOnNode` | [`BitFlag`](exports_schema.md#bitflag-1) | The settings menu on the Device provides instructions to put it into Commissioning Mode. |

#### Defined in

packages/matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:9

___

### PairingHintBitmapSchema

• `Const` **PairingHintBitmapSchema**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md)

#### Defined in

packages/matter.js/dist/cjs/common/InstanceBroadcaster.d.ts:109

## Functions

### tryCatch

▸ **tryCatch**<`T`, `E`\>(`codeBlock`, `errorType`, `fallbackValueOrFunction`): `T`

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
| `errorType` | [`ClassExtends`](util_export.md#classextends)<`E`\> | Errortype to catch and handle |
| `fallbackValueOrFunction` | `T` \| [`ErrorHandler`](export._internal_.md#errorhandler)<`T`, `E`\> | Fallback value or function to compute the fallback value |

#### Returns

`T`

#### Defined in

packages/matter.js/dist/cjs/common/TryCatchHandler.d.ts:17

___

### tryCatchAsync

▸ **tryCatchAsync**<`T`, `E`\>(`codeBlock`, `errorType`, `fallbackValueOrFunction`): `Promise`<`T`\>

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
| `codeBlock` | () => `Promise`<`T`\> | Async code block to execute |
| `errorType` | [`ClassExtends`](util_export.md#classextends)<`E`\> | Errortype to catch and handle |
| `fallbackValueOrFunction` | `T` \| [`ErrorHandler`](export._internal_.md#errorhandler)<`Promise`<`T`\>, `E`\> | Fallback value or function to compute the fallback value |

#### Returns

`Promise`<`T`\>

#### Defined in

packages/matter.js/dist/cjs/common/TryCatchHandler.d.ts:27
