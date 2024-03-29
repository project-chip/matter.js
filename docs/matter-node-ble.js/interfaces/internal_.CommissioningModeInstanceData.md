[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / CommissioningModeInstanceData

# Interface: CommissioningModeInstanceData

[\<internal\>](../modules/internal_.md).CommissioningModeInstanceData

## Hierarchy

- [`ProductDescription`](internal_.ProductDescription.md)

  ↳ **`CommissioningModeInstanceData`**

## Table of contents

### Properties

- [deviceType](internal_.CommissioningModeInstanceData.md#devicetype)
- [discriminator](internal_.CommissioningModeInstanceData.md#discriminator)
- [name](internal_.CommissioningModeInstanceData.md#name)
- [pairingHint](internal_.CommissioningModeInstanceData.md#pairinghint)
- [pairingInstructions](internal_.CommissioningModeInstanceData.md#pairinginstructions)
- [productId](internal_.CommissioningModeInstanceData.md#productid)
- [sessionActiveInterval](internal_.CommissioningModeInstanceData.md#sessionactiveinterval)
- [sessionActiveThreshold](internal_.CommissioningModeInstanceData.md#sessionactivethreshold)
- [sessionIdleInterval](internal_.CommissioningModeInstanceData.md#sessionidleinterval)
- [vendorId](internal_.CommissioningModeInstanceData.md#vendorid)

## Properties

### deviceType

• `Readonly` **deviceType**: `number`

The device type for commissioning announcements.

#### Inherited from

[ProductDescription](internal_.ProductDescription.md).[deviceType](internal_.ProductDescription.md#devicetype)

#### Defined in

matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:15

___

### discriminator

• **discriminator**: `number`

Device discriminator for commissionable announcements.

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:212

___

### name

• `Readonly` **name**: `string`

The device name for commissioning announcements.

#### Inherited from

[ProductDescription](internal_.ProductDescription.md).[name](internal_.ProductDescription.md#name)

#### Defined in

matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:11

___

### pairingHint

• `Optional` **pairingHint**: [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)\<\{ `administrator`: [`BitFlag`](../modules/internal_.md#bitflag) ; `customInstruction`: [`BitFlag`](../modules/internal_.md#bitflag) ; `deviceManual`: [`BitFlag`](../modules/internal_.md#bitflag) ; `deviceManufacturerUrl`: [`BitFlag`](../modules/internal_.md#bitflag) ; `powerCycle`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressResetButton`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressResetButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressResetButtonNumberOfTimes`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressResetButtonUntilLightBlinks`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressResetButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressResetButtonWithApplicationOfPower`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressRestButtonForNumberOfSeconds`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressSetupButton`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressSetupButtonForNumberOfSeconds`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressSetupButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressSetupButtonNumberOfTimes`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressSetupButtonUntilLightBlinks`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressSetupButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/internal_.md#bitflag) ; `pressSetupButtonWithApplicationOfPower`: [`BitFlag`](../modules/internal_.md#bitflag) ; `settingsMenuOnNode`: [`BitFlag`](../modules/internal_.md#bitflag)  }\>

Pairing Hint of the device for commissionable announcements.

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:220

___

### pairingInstructions

• `Optional` **pairingInstructions**: `string`

Pairing Instruction of the device for commissionable announcements.

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:222

___

### productId

• `Readonly` **productId**: `number`

The product ID for commissioning announcements.

#### Inherited from

[ProductDescription](internal_.ProductDescription.md).[productId](internal_.ProductDescription.md#productid)

#### Defined in

matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:23

___

### sessionActiveInterval

• `Optional` **sessionActiveInterval**: `number`

Session Active Interval of the device for commissionable announcements.

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:216

___

### sessionActiveThreshold

• `Optional` **sessionActiveThreshold**: `number`

Duration of time the node should stay Active after the last network activity. *

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:218

___

### sessionIdleInterval

• `Optional` **sessionIdleInterval**: `number`

Session Idle Interval of the device for commissionable announcements.

#### Defined in

matter.js/dist/esm/common/InstanceBroadcaster.d.ts:214

___

### vendorId

• `Readonly` **vendorId**: [`VendorId`](../modules/internal_.md#vendorid)

The vendor ID for commissioning announcements.

#### Inherited from

[ProductDescription](internal_.ProductDescription.md).[vendorId](internal_.ProductDescription.md#vendorid)

#### Defined in

matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:19
