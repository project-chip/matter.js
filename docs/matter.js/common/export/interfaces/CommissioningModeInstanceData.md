[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / CommissioningModeInstanceData

# Interface: CommissioningModeInstanceData

## Extends

- [`ProductDescription`](../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md)

## Properties

### deviceType

> `readonly` **deviceType**: `number`

The device type for commissioning announcements.

#### Inherited from

[`ProductDescription`](../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md).[`deviceType`](../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md#devicetype)

#### Source

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L18)

***

### discriminator

> **discriminator**: `number`

Device discriminator for commissionable announcements.

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L136)

***

### name

> `readonly` **name**: `string`

The device name for commissioning announcements.

#### Inherited from

[`ProductDescription`](../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md).[`name`](../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md#name)

#### Source

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L13)

***

### pairingHint?

> `optional` **pairingHint**: [`TypeFromPartialBitSchema`](../../../schema/export/README.md#typefrompartialbitschemat)\<`object`\>

Pairing Hint of the device for commissionable announcements.

#### Type declaration

##### administrator

> **administrator**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device has been commissioned. Any Administrator that commissioned the device provides a user interface that
may be used to put the device into Commissioning Mode.

##### customInstruction

> **customInstruction**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The PI key/value pair describes a custom way to put the Device into Commissioning Mode. This Custom Instruction
option is NOT recommended for use by a Device that does not have knowledge of the user’s language preference.

##### deviceManual

> **deviceManual**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device Manual provides special instructions to put the Device into Commissioning Mode (see Section 11.22.5.8,
“UserManualUrl”). This is a catch-all option to capture user interactions that are not codified by other options
in this table.

##### deviceManufacturerUrl

> **deviceManufacturerUrl**: [`BitFlag`](../../../schema/export/README.md#bitflag)

This SHALL be set to 1 for devices requiring Custom Commissioning Flow before they can be available for
Commissioning by any Commissioner. For such a flow, the user SHOULD be sent to the URL specified in the
CommissioningCustomFlowUrl of the DeviceModel schema entry indexed by the Vendor ID and Product ID (e.g., as
found in the announcement) in the Distributed Compliance Ledger.

##### powerCycle

> **powerCycle**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will automatically enter Commissioning Mode upon power cycle (unplug/re- plug, remove/re-insert
batteries). This bit SHALL be set to 1 for devices using Standard Commissioning Flow, and set to 0 otherwise.

##### pressResetButton

> **pressResetButton**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed.

##### pressResetButtonForNumberOfSecondsWithApplicationOfPower

> **pressResetButtonForNumberOfSecondsWithApplicationOfPower**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed for N seconds when applying power to it.
The exact value of N SHALL be made available via PI key.

##### pressResetButtonNumberOfTimes

> **pressResetButtonNumberOfTimes**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed N times with maximum 1 second between each
press. The exact value of N SHALL be made available via PI key.

##### pressResetButtonUntilLightBlinks

> **pressResetButtonUntilLightBlinks**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed until associated light blinks.
Information on color of light MAY be made available via PI key (see Note 1).

##### pressResetButtonUntilLightBlinksWithApplicationOfPower

> **pressResetButtonUntilLightBlinksWithApplicationOfPower**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed until associated light blinks when
applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1).

##### pressResetButtonWithApplicationOfPower

> **pressResetButtonWithApplicationOfPower**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed when applying power to it.

##### pressRestButtonForNumberOfSeconds

> **pressRestButtonForNumberOfSeconds**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when reset button is pressed for N seconds. The exact value of N SHALL
be made available via PI key.

##### pressSetupButton

> **pressSetupButton**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed.

##### pressSetupButtonForNumberOfSeconds

> **pressSetupButtonForNumberOfSeconds**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed for N seconds. The exact value of N SHALL
be made available via PI key.

##### pressSetupButtonForNumberOfSecondsWithApplicationOfPower

> **pressSetupButtonForNumberOfSecondsWithApplicationOfPower**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed for N seconds when applying power to it.
The exact value of N SHALL be made available via PI key.

##### pressSetupButtonNumberOfTimes

> **pressSetupButtonNumberOfTimes**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed N times with maximum 1 second between each
press. The exact value of N SHALL be made available via PI key.

##### pressSetupButtonUntilLightBlinks

> **pressSetupButtonUntilLightBlinks**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed until associated light blinks.
Information on color of light MAY be made available via PI key (see Note 1).

##### pressSetupButtonUntilLightBlinksWithApplicationOfPower

> **pressSetupButtonUntilLightBlinksWithApplicationOfPower**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed until associated light blinks when
applying power to the Device. Information on color of light MAY be made available via PI key (see Note 1).

##### pressSetupButtonWithApplicationOfPower

> **pressSetupButtonWithApplicationOfPower**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The Device will enter Commissioning Mode when setup button is pressed when applying power to it.

##### settingsMenuOnNode

> **settingsMenuOnNode**: [`BitFlag`](../../../schema/export/README.md#bitflag)

The settings menu on the Device provides instructions to put it into Commissioning Mode.

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L148)

***

### pairingInstructions?

> `optional` **pairingInstructions**: `string`

Pairing Instruction of the device for commissionable announcements.

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L151)

***

### productId

> `readonly` **productId**: `number`

The product ID for commissioning announcements.

#### Inherited from

[`ProductDescription`](../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md).[`productId`](../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md#productid)

#### Source

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L28)

***

### sessionActiveInterval?

> `optional` **sessionActiveInterval**: `number`

Session Active Interval of the device for commissionable announcements.

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:142](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L142)

***

### sessionActiveThreshold?

> `optional` **sessionActiveThreshold**: `number`

Duration of time the node should stay Active after the last network activity. *

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L145)

***

### sessionIdleInterval?

> `optional` **sessionIdleInterval**: `number`

Session Idle Interval of the device for commissionable announcements.

#### Source

[packages/matter.js/src/common/InstanceBroadcaster.ts:139](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/InstanceBroadcaster.ts#L139)

***

### vendorId

> `readonly` **vendorId**: [`VendorId`](../../../datatype/export/README.md#vendorid)

The vendor ID for commissioning announcements.

#### Inherited from

[`ProductDescription`](../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md).[`vendorId`](../../../behavior/cluster/export/-internal-/interfaces/ProductDescription.md#vendorid)

#### Source

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L23)
