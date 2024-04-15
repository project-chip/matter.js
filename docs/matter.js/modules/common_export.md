[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / common/export

# Module: common/export

## Table of contents

### Modules

- [\<internal\>](common_export._internal_.md)

### Namespaces

- [FailsafeContext](common_export.FailsafeContext.md)
- [Lifecycle](common_export.Lifecycle.md)

### Classes

- [CrashedDependencyError](../classes/common_export.CrashedDependencyError.md)
- [DependencyLifecycleError](../classes/common_export.DependencyLifecycleError.md)
- [DestroyedDependencyError](../classes/common_export.DestroyedDependencyError.md)
- [FailsafeContext](../classes/common_export.FailsafeContext-1.md)
- [FailsafeTimer](../classes/common_export.FailsafeTimer.md)
- [ImplementationError](../classes/common_export.ImplementationError.md)
- [InternalError](../classes/common_export.InternalError.md)
- [MatterError](../classes/common_export.MatterError.md)
- [MatterFabricConflictError](../classes/common_export.MatterFabricConflictError.md)
- [MatterFlowError](../classes/common_export.MatterFlowError.md)
- [NoProviderError](../classes/common_export.NoProviderError.md)
- [NotImplementedError](../classes/common_export.NotImplementedError.md)
- [ReadOnlyError](../classes/common_export.ReadOnlyError.md)
- [UnexpectedDataError](../classes/common_export.UnexpectedDataError.md)
- [UninitializedDependencyError](../classes/common_export.UninitializedDependencyError.md)
- [UnsupportedDependencyError](../classes/common_export.UnsupportedDependencyError.md)
- [UnsupportedDependencyStatusError](../classes/common_export.UnsupportedDependencyStatusError.md)
- [ValidationError](../classes/common_export.ValidationError.md)

### Interfaces

- [Cancellable](../interfaces/common_export.Cancellable.md)
- [Channel](../interfaces/common_export.Channel.md)
- [CommissioningModeInstanceData](../interfaces/common_export.CommissioningModeInstanceData.md)
- [Destructable](../interfaces/common_export.Destructable.md)
- [InstanceBroadcaster](../interfaces/common_export.InstanceBroadcaster.md)
- [Listener](../interfaces/common_export.Listener.md)
- [Scanner](../interfaces/common_export.Scanner.md)
- [Startable](../interfaces/common_export.Startable.md)
- [TransportInterface](../interfaces/common_export.TransportInterface.md)

### Type Aliases

- [AddressTypeFromDevice](common_export.md#addresstypefromdevice)
- [CommissionableDevice](common_export.md#commissionabledevice)
- [CommissionableDeviceIdentifiers](common_export.md#commissionabledeviceidentifiers)
- [CommissionerInstanceData](common_export.md#commissionerinstancedata)
- [DiscoverableDevice](common_export.md#discoverabledevice)
- [DiscoveryData](common_export.md#discoverydata)
- [OperationalDevice](common_export.md#operationaldevice)
- [OperationalInstanceData](common_export.md#operationalinstancedata)
- [ServerAddress](common_export.md#serveraddress)
- [ServerAddressBle](common_export.md#serveraddressble)
- [ServerAddressIp](common_export.md#serveraddressip)

### Variables

- [PairingHintBitmap](common_export.md#pairinghintbitmap)
- [PairingHintBitmapSchema](common_export.md#pairinghintbitmapschema)

### Functions

- [serverAddressToString](common_export.md#serveraddresstostring)
- [tryCatch](common_export.md#trycatch)
- [tryCatchAsync](common_export.md#trycatchasync)

## Type Aliases

### AddressTypeFromDevice

Ƭ **AddressTypeFromDevice**\<`D`\>: `D` extends [`DiscoverableDevice`](common_export.md#discoverabledevice)\<infer SA\> ? `SA` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `D` | extends [`DiscoverableDevice`](common_export.md#discoverabledevice)\<`any`\> |

#### Defined in

[packages/matter.js/src/common/Scanner.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Scanner.ts#L56)

___

### CommissionableDevice

Ƭ **CommissionableDevice**: [`DiscoverableDevice`](common_export.md#discoverabledevice)\<[`ServerAddress`](common_export.md#serveraddress)\> & \{ `CM`: `number` ; `D`: `number` ; `deviceIdentifier`: `string`  }

#### Defined in

[packages/matter.js/src/common/Scanner.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Scanner.ts#L63)

___

### CommissionableDeviceIdentifiers

Ƭ **CommissionableDeviceIdentifiers**: \{ `instanceId`: `string`  } \| \{ `longDiscriminator`: `number`  } \| \{ `shortDiscriminator`: `number`  } \| \{ `vendorId`: [`VendorId`](datatype_export.md#vendorid)  } \| \{ `deviceType`: `number`  } \| \{ `productId`: `number`  } \| \{ [K in any]: never }

Identifier to use to discover a commissionable device.
Please decide for the best matching identifier that you have.

#### Defined in

[packages/matter.js/src/common/Scanner.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Scanner.ts#L77)

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
| `vendorId` | [`VendorId`](datatype_export.md#vendorid) | Device type for commissionable announcements. |

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L154)

___

### DiscoverableDevice

Ƭ **DiscoverableDevice**\<`SA`\>: [`DiscoveryData`](common_export.md#discoverydata) & \{ `addresses`: `SA`[]  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SA` | extends [`ServerAddress`](common_export.md#serveraddress) |

#### Defined in

[packages/matter.js/src/common/Scanner.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Scanner.ts#L51)

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

[packages/matter.js/src/common/Scanner.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Scanner.ts#L16)

___

### OperationalDevice

Ƭ **OperationalDevice**: [`DiscoverableDevice`](common_export.md#discoverabledevice)\<[`ServerAddressIp`](common_export.md#serveraddressip)\> & \{ `deviceIdentifier`: `string`  }

#### Defined in

[packages/matter.js/src/common/Scanner.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Scanner.ts#L59)

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

[packages/matter.js/src/common/InstanceBroadcaster.ts:177](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L177)

___

### ServerAddress

Ƭ **ServerAddress**: [`ServerAddressIp`](common_export.md#serveraddressip) \| [`ServerAddressBle`](common_export.md#serveraddressble)

#### Defined in

[packages/matter.js/src/common/ServerAddress.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/ServerAddress.ts#L18)

___

### ServerAddressBle

Ƭ **ServerAddressBle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `peripheralAddress` | `string` |
| `type` | ``"ble"`` |

#### Defined in

[packages/matter.js/src/common/ServerAddress.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/ServerAddress.ts#L13)

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

[packages/matter.js/src/common/ServerAddress.ts:7](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/ServerAddress.ts#L7)

## Variables

### PairingHintBitmap

• `Const` **PairingHintBitmap**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `administrator` | [`BitFlag`](schema_export.md#bitflag) | The Device has been commissioned. Any Administrator that commissioned the device provides a user interface that may be used to put the device into Commissioning Mode. |
| `customInstruction` | [`BitFlag`](schema_export.md#bitflag) | The PI key/value pair describes a custom way to put the Device into Commissioning Mode. This Custom Instruction option is NOT recommended for use by a Device that does not have knowledge of the user’s language preference. |
| `deviceManual` | [`BitFlag`](schema_export.md#bitflag) | The Device Manual provides special instructions to put the Device into Commissioning Mode (see Section 11.22.5.8, “UserManualUrl”). This is a catch-all option to capture user interactions that are not codified by other options in this table. |
| `deviceManufacturerUrl` | [`BitFlag`](schema_export.md#bitflag) | This SHALL be set to 1 for devices requiring Custom Commissioning Flow before they can be available for Commissioning by any Commissioner. For such a flow, the user SHOULD be sent to the URL specified in the CommissioningCustomFlowUrl of the DeviceModel schema entry indexed by the Vendor ID and Product ID (e.g., as found in the announcement) in the Distributed Compliance Ledger. |
| `powerCycle` | [`BitFlag`](schema_export.md#bitflag) | The Device will automatically enter Commissioning Mode upon power cycle (unplug/re- plug, remove/re-insert batteries). This bit SHALL be set to 1 for devices using Standard Commissioning Flow, and set to 0 otherwise. |
| `pressResetButton` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed. |
| `pressResetButtonForNumberOfSecondsWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed for N seconds when applying power to it. The exact value of N SHALL be made available via PI key. |
| `pressResetButtonNumberOfTimes` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed N times with maximum 1 second between each press. The exact value of N SHALL be made available via PI key. |
| `pressResetButtonUntilLightBlinks` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed until associated light blinks. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressResetButtonUntilLightBlinksWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed until associated light blinks when applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressResetButtonWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed when applying power to it. |
| `pressRestButtonForNumberOfSeconds` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when reset button is pressed for N seconds. The exact value of N SHALL be made available via PI key. |
| `pressSetupButton` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed. |
| `pressSetupButtonForNumberOfSeconds` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed for N seconds. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonForNumberOfSecondsWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed for N seconds when applying power to it. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonNumberOfTimes` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed N times with maximum 1 second between each press. The exact value of N SHALL be made available via PI key. |
| `pressSetupButtonUntilLightBlinks` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed until associated light blinks. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressSetupButtonUntilLightBlinksWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed until associated light blinks when applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1). |
| `pressSetupButtonWithApplicationOfPower` | [`BitFlag`](schema_export.md#bitflag) | The Device will enter Commissioning Mode when setup button is pressed when applying power to it. |
| `settingsMenuOnNode` | [`BitFlag`](schema_export.md#bitflag) | The settings menu on the Device provides instructions to put it into Commissioning Mode. |

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L12)

___

### PairingHintBitmapSchema

• `Const` **PairingHintBitmapSchema**: [`BitmapSchemaInternal`](../classes/schema_export.BitmapSchemaInternal.md)\<\{ `administrator`: [`BitFlag`](schema_export.md#bitflag) ; `customInstruction`: [`BitFlag`](schema_export.md#bitflag) ; `deviceManual`: [`BitFlag`](schema_export.md#bitflag) ; `deviceManufacturerUrl`: [`BitFlag`](schema_export.md#bitflag) ; `powerCycle`: [`BitFlag`](schema_export.md#bitflag) ; `pressResetButton`: [`BitFlag`](schema_export.md#bitflag) ; `pressResetButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag) ; `pressResetButtonNumberOfTimes`: [`BitFlag`](schema_export.md#bitflag) ; `pressResetButtonUntilLightBlinks`: [`BitFlag`](schema_export.md#bitflag) ; `pressResetButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag) ; `pressResetButtonWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag) ; `pressRestButtonForNumberOfSeconds`: [`BitFlag`](schema_export.md#bitflag) ; `pressSetupButton`: [`BitFlag`](schema_export.md#bitflag) ; `pressSetupButtonForNumberOfSeconds`: [`BitFlag`](schema_export.md#bitflag) ; `pressSetupButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag) ; `pressSetupButtonNumberOfTimes`: [`BitFlag`](schema_export.md#bitflag) ; `pressSetupButtonUntilLightBlinks`: [`BitFlag`](schema_export.md#bitflag) ; `pressSetupButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag) ; `pressSetupButtonWithApplicationOfPower`: [`BitFlag`](schema_export.md#bitflag) ; `settingsMenuOnNode`: [`BitFlag`](schema_export.md#bitflag)  }\>

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L132)

## Functions

### serverAddressToString

▸ **serverAddressToString**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](common_export.md#serveraddress) |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/common/ServerAddress.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/ServerAddress.ts#L20)

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
| `fallbackValueOrFunction` | `T` \| [`ErrorHandler`](common_export._internal_.md#errorhandler)\<`T`, `E`\> | Fallback value or function to compute the fallback value |

#### Returns

`T`

#### Defined in

[packages/matter.js/src/common/TryCatchHandler.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/TryCatchHandler.ts#L19)

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
| `fallbackValueOrFunction` | `T` \| [`ErrorHandler`](common_export._internal_.md#errorhandler)\<`Promise`\<`T`\>, `E`\> | Fallback value or function to compute the fallback value |

#### Returns

`Promise`\<`T`\>

#### Defined in

[packages/matter.js/src/common/TryCatchHandler.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/TryCatchHandler.ts#L47)
