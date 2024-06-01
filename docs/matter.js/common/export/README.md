[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / common/export

# common/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [FailsafeContext](namespaces/FailsafeContext/README.md)
- [Lifecycle](namespaces/Lifecycle/README.md)

### Classes

- [CrashedDependencyError](classes/CrashedDependencyError.md)
- [DependencyLifecycleError](classes/DependencyLifecycleError.md)
- [DestroyedDependencyError](classes/DestroyedDependencyError.md)
- [FailsafeContext](classes/FailsafeContext.md)
- [FailsafeTimer](classes/FailsafeTimer.md)
- [ImplementationError](classes/ImplementationError.md)
- [InternalError](classes/InternalError.md)
- [MatterError](classes/MatterError.md)
- [MatterFabricConflictError](classes/MatterFabricConflictError.md)
- [MatterFabricInvalidAdminSubjectError](classes/MatterFabricInvalidAdminSubjectError.md)
- [MatterFlowError](classes/MatterFlowError.md)
- [NoProviderError](classes/NoProviderError.md)
- [NotImplementedError](classes/NotImplementedError.md)
- [ReadOnlyError](classes/ReadOnlyError.md)
- [UnexpectedDataError](classes/UnexpectedDataError.md)
- [UninitializedDependencyError](classes/UninitializedDependencyError.md)
- [UnsupportedDependencyError](classes/UnsupportedDependencyError.md)
- [UnsupportedDependencyStatusError](classes/UnsupportedDependencyStatusError.md)
- [ValidationError](classes/ValidationError.md)

### Interfaces

- [Cancellable](interfaces/Cancellable.md)
- [Channel](interfaces/Channel.md)
- [CommissioningModeInstanceData](interfaces/CommissioningModeInstanceData.md)
- [Destructable](interfaces/Destructable.md)
- [InstanceBroadcaster](interfaces/InstanceBroadcaster.md)
- [Listener](interfaces/Listener.md)
- [Scanner](interfaces/Scanner.md)
- [Startable](interfaces/Startable.md)
- [TransportInterface](interfaces/TransportInterface.md)

## Type Aliases

### AddressTypeFromDevice\<D\>

> **AddressTypeFromDevice**\<`D`\>: `D` *extends* [`DiscoverableDevice`](README.md#discoverabledevicesa)\<infer SA\> ? `SA` : `never`

#### Type parameters

| Type parameter |
| :------ |
| `D` *extends* [`DiscoverableDevice`](README.md#discoverabledevicesa)\<`any`\> |

#### Source

[packages/matter.js/src/common/Scanner.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L56)

***

### CommissionableDevice

> **CommissionableDevice**: [`DiscoverableDevice`](README.md#discoverabledevicesa)\<[`ServerAddress`](README.md#serveraddress)\> & `object`

#### Type declaration

##### CM

> **CM**: `number`

Commissioning Mode

##### D

> **D**: `number`

Discriminator

##### deviceIdentifier

> **deviceIdentifier**: `string`

#### Source

[packages/matter.js/src/common/Scanner.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L63)

***

### CommissionableDeviceIdentifiers

> **CommissionableDeviceIdentifiers**: `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `{ [K in any]: never }`

Identifier to use to discover a commissionable device.
Please decide for the best matching identifier that you have.

#### Source

[packages/matter.js/src/common/Scanner.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L77)

***

### CommissionerInstanceData

> **CommissionerInstanceData**: `object`

#### Type declaration

##### deviceName

> **deviceName**: `string`

Device name for commissionable announcements.

##### deviceType?

> `optional` **deviceType**: `number`

Device type for commissionable announcements.

##### productId

> **productId**: `number`

Vendor ID for commissionable announcements.

##### sessionActiveInterval?

> `optional` **sessionActiveInterval**: `number`

Session Active Interval of the device for commissionable announcements.

##### sessionActiveThreshold?

> `optional` **sessionActiveThreshold**: `number`

This key defines the duration of time the node stays Active after the last network activity. *

##### sessionIdleInterval?

> `optional` **sessionIdleInterval**: `number`

Session Idle Interval of the device for commissionable announcements.

##### vendorId

> **vendorId**: [`VendorId`](../../datatype/export/README.md#vendorid)

Device type for commissionable announcements.

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L154)

***

### DiscoverableDevice\<SA\>

> **DiscoverableDevice**\<`SA`\>: [`DiscoveryData`](README.md#discoverydata) & `object`

#### Type declaration

##### addresses

> **addresses**: `SA`[]

The device's addresses IP/port pairs

#### Type parameters

| Type parameter |
| :------ |
| `SA` *extends* [`ServerAddress`](README.md#serveraddress) |

#### Source

[packages/matter.js/src/common/Scanner.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L51)

***

### DiscoveryData

> **DiscoveryData**: `object`

All information exposed by a commissionable device via announcements.
The properties are named identical as in the Matter specification.

#### Type declaration

##### DN?

> `optional` **DN**: `string`

Device advertising name

##### DT?

> `optional` **DT**: `number`

Device type

##### ICD?

> `optional` **ICD**: `number`

ICD Long Idle Time operating mode supported

##### PH?

> `optional` **PH**: `number`

Pairing hint

##### PI?

> `optional` **PI**: `string`

Pairing instructions

##### RI?

> `optional` **RI**: `string`

Rotating device identifier

##### SAI?

> `optional` **SAI**: `number`

Sleep Active Interval

##### SAT?

> `optional` **SAT**: `number`

Session active threshold

##### SII?

> `optional` **SII**: `number`

Sleep Idle Interval

##### T?

> `optional` **T**: `number`

TCP supported

##### VP?

> `optional` **VP**: `string`

VendorId + ProductId

#### Source

[packages/matter.js/src/common/Scanner.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L16)

***

### OperationalDevice

> **OperationalDevice**: [`DiscoverableDevice`](README.md#discoverabledevicesa)\<[`ServerAddressIp`](README.md#serveraddressip)\> & `object`

#### Type declaration

##### deviceIdentifier

> **deviceIdentifier**: `string`

#### Source

[packages/matter.js/src/common/Scanner.ts:59](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Scanner.ts#L59)

***

### OperationalInstanceData

> **OperationalInstanceData**: `object`

#### Type declaration

##### sessionActiveInterval?

> `optional` **sessionActiveInterval**: `number`

Session Active Interval of the device for operational announcements.

##### sessionActiveThreshold?

> `optional` **sessionActiveThreshold**: `number`

This key defines the duration of time the node stays Active after the last network activity. *

##### sessionIdleInterval?

> `optional` **sessionIdleInterval**: `number`

Session Idle Interval of the device for operational announcements.

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:177](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L177)

***

### ServerAddress

> **ServerAddress**: [`ServerAddressIp`](README.md#serveraddressip) \| [`ServerAddressBle`](README.md#serveraddressble)

#### Source

[packages/matter.js/src/common/ServerAddress.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/ServerAddress.ts#L18)

***

### ServerAddressBle

> **ServerAddressBle**: `object`

#### Type declaration

##### peripheralAddress

> **peripheralAddress**: `string`

##### type

> **type**: `"ble"`

#### Source

[packages/matter.js/src/common/ServerAddress.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/ServerAddress.ts#L13)

***

### ServerAddressIp

> **ServerAddressIp**: `object`

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Type declaration

##### ip

> **ip**: `string`

##### port

> **port**: `number`

##### type

> **type**: `"udp"`

#### Source

[packages/matter.js/src/common/ServerAddress.ts:7](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/ServerAddress.ts#L7)

## Variables

### PairingHintBitmap

> `const` **PairingHintBitmap**: `object`

#### Type declaration

##### administrator

> **administrator**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device has been commissioned. Any Administrator that commissioned the device provides a user interface that
may be used to put the device into Commissioning Mode.

##### customInstruction

> **customInstruction**: [`BitFlag`](../../schema/export/README.md#bitflag)

The PI key/value pair describes a custom way to put the Device into Commissioning Mode. This Custom Instruction
option is NOT recommended for use by a Device that does not have knowledge of the user’s language preference.

##### deviceManual

> **deviceManual**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device Manual provides special instructions to put the Device into Commissioning Mode (see Section 11.22.5.8,
“UserManualUrl”). This is a catch-all option to capture user interactions that are not codified by other options
in this table.

##### deviceManufacturerUrl

> **deviceManufacturerUrl**: [`BitFlag`](../../schema/export/README.md#bitflag)

This SHALL be set to 1 for devices requiring Custom Commissioning Flow before they can be available for
Commissioning by any Commissioner. For such a flow, the user SHOULD be sent to the URL specified in the
CommissioningCustomFlowUrl of the DeviceModel schema entry indexed by the Vendor ID and Product ID (e.g., as
found in the announcement) in the Distributed Compliance Ledger.

##### powerCycle

> **powerCycle**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will automatically enter Commissioning Mode upon power cycle (unplug/re- plug, remove/re-insert
batteries). This bit SHALL be set to 1 for devices using Standard Commissioning Flow, and set to 0 otherwise.

##### pressResetButton

> **pressResetButton**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed.

##### pressResetButtonForNumberOfSecondsWithApplicationOfPower

> **pressResetButtonForNumberOfSecondsWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed for N seconds when applying power to it.
The exact value of N SHALL be made available via PI key.

##### pressResetButtonNumberOfTimes

> **pressResetButtonNumberOfTimes**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed N times with maximum 1 second between each
press. The exact value of N SHALL be made available via PI key.

##### pressResetButtonUntilLightBlinks

> **pressResetButtonUntilLightBlinks**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed until associated light blinks.
Information on color of light MAY be made available via PI key (see Note 1).

##### pressResetButtonUntilLightBlinksWithApplicationOfPower

> **pressResetButtonUntilLightBlinksWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed until associated light blinks when
applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1).

##### pressResetButtonWithApplicationOfPower

> **pressResetButtonWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed when applying power to it.

##### pressRestButtonForNumberOfSeconds

> **pressRestButtonForNumberOfSeconds**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed for N seconds. The exact value of N SHALL
be made available via PI key.

##### pressSetupButton

> **pressSetupButton**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed.

##### pressSetupButtonForNumberOfSeconds

> **pressSetupButtonForNumberOfSeconds**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed for N seconds. The exact value of N SHALL
be made available via PI key.

##### pressSetupButtonForNumberOfSecondsWithApplicationOfPower

> **pressSetupButtonForNumberOfSecondsWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed for N seconds when applying power to it.
The exact value of N SHALL be made available via PI key.

##### pressSetupButtonNumberOfTimes

> **pressSetupButtonNumberOfTimes**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed N times with maximum 1 second between each
press. The exact value of N SHALL be made available via PI key.

##### pressSetupButtonUntilLightBlinks

> **pressSetupButtonUntilLightBlinks**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed until associated light blinks.
Information on color of light MAY be made available via PI key (see Note 1).

##### pressSetupButtonUntilLightBlinksWithApplicationOfPower

> **pressSetupButtonUntilLightBlinksWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed until associated light blinks when
applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1).

##### pressSetupButtonWithApplicationOfPower

> **pressSetupButtonWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed when applying power to it.

##### settingsMenuOnNode

> **settingsMenuOnNode**: [`BitFlag`](../../schema/export/README.md#bitflag)

The settings menu on the Device provides instructions to put it into Commissioning Mode.

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L12)

***

### PairingHintBitmapSchema

> `const` **PairingHintBitmapSchema**: [`BitmapSchemaInternal`](../../schema/export/classes/BitmapSchemaInternal.md)\<`object`\>

#### Type declaration

##### administrator

> **administrator**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device has been commissioned. Any Administrator that commissioned the device provides a user interface that
may be used to put the device into Commissioning Mode.

##### customInstruction

> **customInstruction**: [`BitFlag`](../../schema/export/README.md#bitflag)

The PI key/value pair describes a custom way to put the Device into Commissioning Mode. This Custom Instruction
option is NOT recommended for use by a Device that does not have knowledge of the user’s language preference.

##### deviceManual

> **deviceManual**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device Manual provides special instructions to put the Device into Commissioning Mode (see Section 11.22.5.8,
“UserManualUrl”). This is a catch-all option to capture user interactions that are not codified by other options
in this table.

##### deviceManufacturerUrl

> **deviceManufacturerUrl**: [`BitFlag`](../../schema/export/README.md#bitflag)

This SHALL be set to 1 for devices requiring Custom Commissioning Flow before they can be available for
Commissioning by any Commissioner. For such a flow, the user SHOULD be sent to the URL specified in the
CommissioningCustomFlowUrl of the DeviceModel schema entry indexed by the Vendor ID and Product ID (e.g., as
found in the announcement) in the Distributed Compliance Ledger.

##### powerCycle

> **powerCycle**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will automatically enter Commissioning Mode upon power cycle (unplug/re- plug, remove/re-insert
batteries). This bit SHALL be set to 1 for devices using Standard Commissioning Flow, and set to 0 otherwise.

##### pressResetButton

> **pressResetButton**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed.

##### pressResetButtonForNumberOfSecondsWithApplicationOfPower

> **pressResetButtonForNumberOfSecondsWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed for N seconds when applying power to it.
The exact value of N SHALL be made available via PI key.

##### pressResetButtonNumberOfTimes

> **pressResetButtonNumberOfTimes**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed N times with maximum 1 second between each
press. The exact value of N SHALL be made available via PI key.

##### pressResetButtonUntilLightBlinks

> **pressResetButtonUntilLightBlinks**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed until associated light blinks.
Information on color of light MAY be made available via PI key (see Note 1).

##### pressResetButtonUntilLightBlinksWithApplicationOfPower

> **pressResetButtonUntilLightBlinksWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed until associated light blinks when
applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1).

##### pressResetButtonWithApplicationOfPower

> **pressResetButtonWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed when applying power to it.

##### pressRestButtonForNumberOfSeconds

> **pressRestButtonForNumberOfSeconds**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed for N seconds. The exact value of N SHALL
be made available via PI key.

##### pressSetupButton

> **pressSetupButton**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed.

##### pressSetupButtonForNumberOfSeconds

> **pressSetupButtonForNumberOfSeconds**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed for N seconds. The exact value of N SHALL
be made available via PI key.

##### pressSetupButtonForNumberOfSecondsWithApplicationOfPower

> **pressSetupButtonForNumberOfSecondsWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed for N seconds when applying power to it.
The exact value of N SHALL be made available via PI key.

##### pressSetupButtonNumberOfTimes

> **pressSetupButtonNumberOfTimes**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed N times with maximum 1 second between each
press. The exact value of N SHALL be made available via PI key.

##### pressSetupButtonUntilLightBlinks

> **pressSetupButtonUntilLightBlinks**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed until associated light blinks.
Information on color of light MAY be made available via PI key (see Note 1).

##### pressSetupButtonUntilLightBlinksWithApplicationOfPower

> **pressSetupButtonUntilLightBlinksWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed until associated light blinks when
applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1).

##### pressSetupButtonWithApplicationOfPower

> **pressSetupButtonWithApplicationOfPower**: [`BitFlag`](../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed when applying power to it.

##### settingsMenuOnNode

> **settingsMenuOnNode**: [`BitFlag`](../../schema/export/README.md#bitflag)

The settings menu on the Device provides instructions to put it into Commissioning Mode.

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L132)

## Functions

### serverAddressToString()

> **serverAddressToString**(`address`): `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `address` | [`ServerAddress`](README.md#serveraddress) |

#### Returns

`string`

#### Source

[packages/matter.js/src/common/ServerAddress.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/ServerAddress.ts#L20)

***

### tryCatch()

> **tryCatch**\<`T`, `E`\>(`codeBlock`, `errorType`, `fallbackValueOrFunction`): `T`

Try to execute the code block and catch the error if it is of the given type.
If the error is of the given type, the fallback value or the result of the function is returned.
If the function returns undefined or the error type do not match, the error is normally thrown and not handled.

#### Type parameters

| Type parameter |
| :------ |
| `T` |
| `E` *extends* `Error` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `codeBlock` | () => `T` | Code block to execute |
| `errorType` | [`ClassExtends`](../../util/export/README.md#classextendsc)\<`E`\> | Errortype to catch and handle |
| `fallbackValueOrFunction` | `T` \| [`ErrorHandler`](-internal-/README.md#errorhandlerte)\<`T`, `E`\> | Fallback value or function to compute the fallback value |

#### Returns

`T`

#### Source

[packages/matter.js/src/common/TryCatchHandler.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/TryCatchHandler.ts#L19)

***

### tryCatchAsync()

> **tryCatchAsync**\<`T`, `E`\>(`codeBlock`, `errorType`, `fallbackValueOrFunction`): `Promise`\<`T`\>

Try to execute the async code block and catch the error if it is of the given type.
If the error is of the given type, the fallback value or the result of the function is returned.
If the function returns undefined or the error type do not match, the error is normally thrown and not handled.

#### Type parameters

| Type parameter |
| :------ |
| `T` |
| `E` *extends* `Error` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `codeBlock` | () => `Promise`\<`T`\> | Async code block to execute |
| `errorType` | [`ClassExtends`](../../util/export/README.md#classextendsc)\<`E`\> | Errortype to catch and handle |
| `fallbackValueOrFunction` | `T` \| [`ErrorHandler`](-internal-/README.md#errorhandlerte)\<`Promise`\<`T`\>, `E`\> | Fallback value or function to compute the fallback value |

#### Returns

`Promise`\<`T`\>

#### Source

[packages/matter.js/src/common/TryCatchHandler.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/TryCatchHandler.ts#L47)
