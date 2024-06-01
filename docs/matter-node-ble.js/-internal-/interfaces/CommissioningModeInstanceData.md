[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / CommissioningModeInstanceData

# Interface: CommissioningModeInstanceData

## Extends

- [`ProductDescription`](ProductDescription.md)

## Properties

### deviceType

> `readonly` **deviceType**: `number`

The device type for commissioning announcements.

#### Inherited from

[`ProductDescription`](ProductDescription.md).[`deviceType`](ProductDescription.md#devicetype)

#### Source

matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:15

***

### discriminator

> **discriminator**: `number`

Device discriminator for commissionable announcements.

#### Source

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:212

***

### name

> `readonly` **name**: `string`

The device name for commissioning announcements.

#### Inherited from

[`ProductDescription`](ProductDescription.md).[`name`](ProductDescription.md#name)

#### Source

matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:11

***

### pairingHint?

> `optional` **pairingHint**: [`TypeFromPartialBitSchema`](../README.md#typefrompartialbitschemat)\<`object`\>

Pairing Hint of the device for commissionable announcements.

#### Type declaration

##### administrator

> **administrator**: [`BitFlag`](../README.md#bitflag)

The Device has been commissioned. Any Administrator that commissioned the device provides a user interface that
may be used to put the device into Commissioning Mode.

##### customInstruction

> **customInstruction**: [`BitFlag`](../README.md#bitflag)

The PI key/value pair describes a custom way to put the Device into Commissioning Mode. This Custom Instruction
option is NOT recommended for use by a Device that does not have knowledge of the user’s language preference.

##### deviceManual

> **deviceManual**: [`BitFlag`](../README.md#bitflag)

The Device Manual provides special instructions to put the Device into Commissioning Mode (see Section 11.22.5.8,
“UserManualUrl”). This is a catch-all option to capture user interactions that are not codified by other options
in this table.

##### deviceManufacturerUrl

> **deviceManufacturerUrl**: [`BitFlag`](../README.md#bitflag)

This SHALL be set to 1 for devices requiring Custom Commissioning Flow before they can be available for
Commissioning by any Commissioner. For such a flow, the user SHOULD be sent to the URL specified in the
CommissioningCustomFlowUrl of the DeviceModel schema entry indexed by the Vendor ID and Product ID (e.g., as
found in the announcement) in the Distributed Compliance Ledger.

##### powerCycle

> **powerCycle**: [`BitFlag`](../README.md#bitflag)

The Device will automatically enter Commissioning Mode upon power cycle (unplug/re- plug, remove/re-insert
batteries). This bit SHALL be set to 1 for devices using Standard Commissioning Flow, and set to 0 otherwise.

##### pressResetButton

> **pressResetButton**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed.

##### pressResetButtonForNumberOfSecondsWithApplicationOfPower

> **pressResetButtonForNumberOfSecondsWithApplicationOfPower**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed for N seconds when applying power to it.
The exact value of N SHALL be made available via PI key.

##### pressResetButtonNumberOfTimes

> **pressResetButtonNumberOfTimes**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed N times with maximum 1 second between each
press. The exact value of N SHALL be made available via PI key.

##### pressResetButtonUntilLightBlinks

> **pressResetButtonUntilLightBlinks**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed until associated light blinks.
Information on color of light MAY be made available via PI key (see Note 1).

##### pressResetButtonUntilLightBlinksWithApplicationOfPower

> **pressResetButtonUntilLightBlinksWithApplicationOfPower**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed until associated light blinks when
applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1).

##### pressResetButtonWithApplicationOfPower

> **pressResetButtonWithApplicationOfPower**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed when applying power to it.

##### pressRestButtonForNumberOfSeconds

> **pressRestButtonForNumberOfSeconds**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed for N seconds. The exact value of N SHALL
be made available via PI key.

##### pressSetupButton

> **pressSetupButton**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed.

##### pressSetupButtonForNumberOfSeconds

> **pressSetupButtonForNumberOfSeconds**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed for N seconds. The exact value of N SHALL
be made available via PI key.

##### pressSetupButtonForNumberOfSecondsWithApplicationOfPower

> **pressSetupButtonForNumberOfSecondsWithApplicationOfPower**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed for N seconds when applying power to it.
The exact value of N SHALL be made available via PI key.

##### pressSetupButtonNumberOfTimes

> **pressSetupButtonNumberOfTimes**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed N times with maximum 1 second between each
press. The exact value of N SHALL be made available via PI key.

##### pressSetupButtonUntilLightBlinks

> **pressSetupButtonUntilLightBlinks**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed until associated light blinks.
Information on color of light MAY be made available via PI key (see Note 1).

##### pressSetupButtonUntilLightBlinksWithApplicationOfPower

> **pressSetupButtonUntilLightBlinksWithApplicationOfPower**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed until associated light blinks when
applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1).

##### pressSetupButtonWithApplicationOfPower

> **pressSetupButtonWithApplicationOfPower**: [`BitFlag`](../README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed when applying power to it.

##### settingsMenuOnNode

> **settingsMenuOnNode**: [`BitFlag`](../README.md#bitflag)

The settings menu on the Device provides instructions to put it into Commissioning Mode.

#### Source

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:220

***

### pairingInstructions?

> `optional` **pairingInstructions**: `string`

Pairing Instruction of the device for commissionable announcements.

#### Source

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:222

***

### productId

> `readonly` **productId**: `number`

The product ID for commissioning announcements.

#### Inherited from

[`ProductDescription`](ProductDescription.md).[`productId`](ProductDescription.md#productid)

#### Source

matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:23

***

### sessionActiveInterval?

> `optional` **sessionActiveInterval**: `number`

Session Active Interval of the device for commissionable announcements.

#### Source

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:216

***

### sessionActiveThreshold?

> `optional` **sessionActiveThreshold**: `number`

Duration of time the node should stay Active after the last network activity. *

#### Source

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:218

***

### sessionIdleInterval?

> `optional` **sessionIdleInterval**: `number`

Session Idle Interval of the device for commissionable announcements.

#### Source

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:214

***

### vendorId

> `readonly` **vendorId**: [`VendorId`](../README.md#vendorid-1)

The vendor ID for commissioning announcements.

#### Inherited from

[`ProductDescription`](ProductDescription.md).[`vendorId`](ProductDescription.md#vendorid)

#### Source

matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:19
