[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / CommissioningModeInstanceData

# Interface: CommissioningModeInstanceData

[exports/common](../modules/exports_common.md).CommissioningModeInstanceData

## Hierarchy

- [`ProductDescription`](exports_cluster._internal_.ProductDescription.md)

  ↳ **`CommissioningModeInstanceData`**

## Table of contents

### Properties

- [deviceType](exports_common.CommissioningModeInstanceData.md#devicetype)
- [discriminator](exports_common.CommissioningModeInstanceData.md#discriminator)
- [name](exports_common.CommissioningModeInstanceData.md#name)
- [pairingHint](exports_common.CommissioningModeInstanceData.md#pairinghint)
- [pairingInstructions](exports_common.CommissioningModeInstanceData.md#pairinginstructions)
- [productId](exports_common.CommissioningModeInstanceData.md#productid)
- [sessionActiveInterval](exports_common.CommissioningModeInstanceData.md#sessionactiveinterval)
- [sessionActiveThreshold](exports_common.CommissioningModeInstanceData.md#sessionactivethreshold)
- [sessionIdleInterval](exports_common.CommissioningModeInstanceData.md#sessionidleinterval)
- [vendorId](exports_common.CommissioningModeInstanceData.md#vendorid)

## Properties

### deviceType

• `Readonly` **deviceType**: `number`

The device type for commissioning announcements.

#### Inherited from

[ProductDescription](exports_cluster._internal_.ProductDescription.md).[deviceType](exports_cluster._internal_.ProductDescription.md#devicetype)

#### Defined in

packages/matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:15

___

### discriminator

• **discriminator**: `number`

Device discriminator for commissionable announcements.

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:212

___

### name

• `Readonly` **name**: `string`

The device name for commissioning announcements.

#### Inherited from

[ProductDescription](exports_cluster._internal_.ProductDescription.md).[name](exports_cluster._internal_.ProductDescription.md#name)

#### Defined in

packages/matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:11

___

### pairingHint

• `Optional` **pairingHint**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<\{ `administrator`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `customInstruction`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `deviceManual`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `deviceManufacturerUrl`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `powerCycle`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButton`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButtonNumberOfTimes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButtonUntilLightBlinks`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressResetButtonWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressRestButtonForNumberOfSeconds`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButton`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonForNumberOfSeconds`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonNumberOfTimes`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonUntilLightBlinks`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `pressSetupButtonWithApplicationOfPower`: [`BitFlag`](../modules/exports_schema.md#bitflag) ; `settingsMenuOnNode`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>

Pairing Hint of the device for commissionable announcements.

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:220

___

### pairingInstructions

• `Optional` **pairingInstructions**: `string`

Pairing Instruction of the device for commissionable announcements.

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:222

___

### productId

• `Readonly` **productId**: `number`

The product ID for commissioning announcements.

#### Inherited from

[ProductDescription](exports_cluster._internal_.ProductDescription.md).[productId](exports_cluster._internal_.ProductDescription.md#productid)

#### Defined in

packages/matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:23

___

### sessionActiveInterval

• `Optional` **sessionActiveInterval**: `number`

Session Active Interval of the device for commissionable announcements.

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:216

___

### sessionActiveThreshold

• `Optional` **sessionActiveThreshold**: `number`

Duration of time the node should stay Active after the last network activity. *

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:218

___

### sessionIdleInterval

• `Optional` **sessionIdleInterval**: `number`

Session Idle Interval of the device for commissionable announcements.

#### Defined in

packages/matter.js/dist/esm/common/InstanceBroadcaster.d.ts:214

___

### vendorId

• `Readonly` **vendorId**: [`VendorId`](../modules/exports_datatype.md#vendorid)

The vendor ID for commissioning announcements.

#### Inherited from

[ProductDescription](exports_cluster._internal_.ProductDescription.md).[vendorId](exports_cluster._internal_.ProductDescription.md#vendorid)

#### Defined in

packages/matter.js/dist/esm/behavior/system/product-description/ProductDescription.d.ts:19
