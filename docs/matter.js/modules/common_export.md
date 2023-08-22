[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / common/export

# Module: common/export

## Table of contents

### Classes

- [ImplementationError](../classes/common_export.ImplementationError.md)
- [InternalError](../classes/common_export.InternalError.md)
- [MatterError](../classes/common_export.MatterError.md)
- [MatterFlowError](../classes/common_export.MatterFlowError.md)
- [NoProviderError](../classes/common_export.NoProviderError.md)
- [NotImplementedError](../classes/common_export.NotImplementedError.md)
- [UnexpectedDataError](../classes/common_export.UnexpectedDataError.md)
- [ValidationError](../classes/common_export.ValidationError.md)

### Interfaces

- [Channel](../interfaces/common_export.Channel.md)
- [InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md)
- [Listener](../interfaces/common_export.Listener.md)
- [Scanner](../interfaces/common_export.Scanner.md)
- [TransportInterface](../interfaces/common_export.TransportInterface.md)

### Type Aliases

- [CommissionableDevice](common_export.md#commissionabledevice)
- [CommissionableDeviceIdentifiers](common_export.md#commissionabledeviceidentifiers)
- [CommissionerInstanceData](common_export.md#commissionerinstancedata)
- [CommissioningModeInstanceData](common_export.md#commissioningmodeinstancedata)
- [OperationalInstanceData](common_export.md#operationalinstancedata)
- [ServerAddress](common_export.md#serveraddress)
- [ServerAddressBle](common_export.md#serveraddressble)
- [ServerAddressIp](common_export.md#serveraddressip)

### Variables

- [PairingHintBitmap](common_export.md#pairinghintbitmap)
- [PairingHintBitmapSchema](common_export.md#pairinghintbitmapschema)

### Functions

- [tryCatch](common_export.md#trycatch)
- [tryCatchAsync](common_export.md#trycatchasync)

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
| `addresses` | [`ServerAddress`](common_export.md#serveraddress)[] | The device's addresses IP/port pairs |

#### Defined in

[packages/matter.js/src/common/Scanner.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/Scanner.ts#L16)

___

### CommissionableDeviceIdentifiers

Ƭ **CommissionableDeviceIdentifiers**: { `instanceId`: `string`  } \| { `longDiscriminator`: `number`  } \| { `shortDiscriminator`: `number`  } \| { `vendorId`: [`VendorId`](datatype_export.md#vendorid)  } \| { `deviceType`: `number`  } \| { `productId`: `number`  } \| { [K in any]: never }

Identifier to use to discover a commissionable device.
Please decide for the best matching identifier that you have.

#### Defined in

[packages/matter.js/src/common/Scanner.ts:58](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/Scanner.ts#L58)

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
| `vendorId` | [`VendorId`](datatype_export.md#vendorid) | Device type for commissionable announcements. |

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:162](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/InstanceBroadcaster.ts#L162)

___

### CommissioningModeInstanceData

Ƭ **CommissioningModeInstanceData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `deviceName` | `string` | Device name for commissionable announcements. |
| `deviceType` | `number` | Device type for commissionable announcements. |
| `discriminator` | `number` | Device discriminator for commissionable announcements. |
| `pairingHint?` | [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof [`PairingHintBitmap`](common_export.md#pairinghintbitmap)\> | Pairing Hint of the device for commissionable announcements. |
| `pairingInstructions?` | `string` | Pairing Instruction of the device for commissionable announcements. |
| `productId` | `number` | Product ID for commissionable announcements. |
| `sleepActiveInterval?` | `number` | Sleep Active Interval of the device for commissionable announcements. |
| `sleepIdleInterval?` | `number` | Sleep Idle Interval of the device for commissionable announcements. |
| `vendorId` | [`VendorId`](datatype_export.md#vendorid) | Vendor ID for commissionable announcements. |

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:133](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/InstanceBroadcaster.ts#L133)

___

### OperationalInstanceData

Ƭ **OperationalInstanceData**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `sleepActiveInterval?` | `number` | Sleep Active Interval of the device for operational announcements. |
| `sleepIdleInterval?` | `number` | Sleep Idle Interval of the device for operational announcements. |

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:182](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/InstanceBroadcaster.ts#L182)

___

### ServerAddress

Ƭ **ServerAddress**: [`ServerAddressIp`](common_export.md#serveraddressip) \| [`ServerAddressBle`](common_export.md#serveraddressble)

#### Defined in

[packages/matter.js/src/common/ServerAddress.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/ServerAddress.ts#L18)

___

### ServerAddressBle

Ƭ **ServerAddressBle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `peripheralAddress` | `string` |
| `type` | ``"ble"`` |

#### Defined in

[packages/matter.js/src/common/ServerAddress.ts:13](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/ServerAddress.ts#L13)

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

[packages/matter.js/src/common/ServerAddress.ts:7](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/ServerAddress.ts#L7)

## Variables

### PairingHintBitmap

• `Const` **PairingHintBitmap**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `administrator` | [`BitFlag`](schema_export.md#bitflag-1) | The Device has been commissioned. Any Administrator that commissioned the device provides a user interface that may be used to put the device into Commissioning Mode. |
| `customInstruction` | [`BitFlag`](schema_export.md#bitflag-1) | The PI key/value pair describes a custom way to put the Device into Commissioning Mode. This Custom Instruction option is NOT recommended for use by a Device that does not have knowledge of the user’s language preference. |
| `deviceManual` | [`BitFlag`](schema_export.md#bitflag-1) | The Device Manual provides special instructions to put the Device into Commissioning Mode (see Section 11.22.5.8, “UserManualUrl”). This is a catch-all option to capture user interactions that are not codified by other options in this table. |
| `deviceManufacturerUrl` | [`BitFlag`](schema_export.md#bitflag-1) | This SHALL be set to 1 for devices requiring Custom Commissioning Flow before they can be available for Commissioning by any Commissioner. For such a flow, the user SHOULD be sent to the URL specified in the CommissioningCustomFlowUrl of the DeviceModel schema entry indexed by the Vendor ID and Product ID (e.g., as found in the announcement) in the Distributed Compliance Ledger. |
| `powerCycle` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will automatically enter Commissioning Mode upon power cycle (unplug/re- plug, remove/re-insert batteries). This bit SHALL be set to 1 for devices using Standard Commissioning Flow, and set to 0 otherwise. |
| `pressResetButton` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed. |
| `pressResetButtonForNumberOfSecondsWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed for N seconds when applying power to it. The exact value of N SHALL be made available via PI key. |
| `pressResetButtonNumberOfTimes` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed N times with maximum 1 second between each press. The exact value of N SHALL be made available via PI key. |
| `pressResetButtonUntilLightBlinks` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed until associated light blinks. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressResetButtonUntilLightBlinksWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed until associated light blinks when applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressResetButtonWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed when applying power to it. |
| `pressRestButtonForNumberOfSeconds` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when reset button is pressed for N seconds. The exact value of N SHALL be made available via PI key. |
| `pressSetupButton` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed. |
| `pressSetupButtonForNumberOfSeconds` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed for N seconds. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonForNumberOfSecondsWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed for N seconds when applying power to it. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonNumberOfTimes` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed N times with maximum 1 second between each press. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonUntilLightBlinks` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed until associated light blinks. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressSetupButtonUntilLightBlinksWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed until associated light blinks when applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressSetupButtonWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag-1) | The Device will enter Commissioning Mode when setup button is pressed when applying power to it. |
| `settingsMenuOnNode` | [`BitFlag`](schema_export.md#bitflag-1) | The settings menu on the Device provides instructions to put it into Commissioning Mode. |

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:11](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/InstanceBroadcaster.ts#L11)

___

### PairingHintBitmapSchema

• `Const` **PairingHintBitmapSchema**: [`BitmapSchemaInternal`](../classes/schema_export.BitmapSchemaInternal.md)<{ `administrator`: [`BitFlag`](schema_export.md#bitflag-1) ; `customInstruction`: [`BitFlag`](schema_export.md#bitflag-1) ; `deviceManual`: [`BitFlag`](schema_export.md#bitflag-1) ; `deviceManufacturerUrl`: [`BitFlag`](schema_export.md#bitflag-1) ; `powerCycle`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressResetButton`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressResetButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressResetButtonNumberOfTimes`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressResetButtonUntilLightBlinks`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressResetButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressResetButtonWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressRestButtonForNumberOfSeconds`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressSetupButton`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressSetupButtonForNumberOfSeconds`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressSetupButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressSetupButtonNumberOfTimes`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressSetupButtonUntilLightBlinks`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressSetupButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag-1) ; `pressSetupButtonWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag-1) ; `settingsMenuOnNode`: [`BitFlag`](schema_export.md#bitflag-1)  }\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:131](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/InstanceBroadcaster.ts#L131)

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

[packages/matter.js/src/common/TryCatchHandler.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/TryCatchHandler.ts#L19)

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

[packages/matter.js/src/common/TryCatchHandler.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/TryCatchHandler.ts#L47)
