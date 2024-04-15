[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / CommissioningModeInstanceData

# Interface: CommissioningModeInstanceData

[common/export](../modules/common_export.md).CommissioningModeInstanceData

## Hierarchy

- [`ProductDescription`](behavior_cluster_export._internal_.ProductDescription.md)

  ↳ **`CommissioningModeInstanceData`**

## Table of contents

### Properties

- [deviceType](common_export.CommissioningModeInstanceData.md#devicetype)
- [discriminator](common_export.CommissioningModeInstanceData.md#discriminator)
- [name](common_export.CommissioningModeInstanceData.md#name)
- [pairingHint](common_export.CommissioningModeInstanceData.md#pairinghint)
- [pairingInstructions](common_export.CommissioningModeInstanceData.md#pairinginstructions)
- [productId](common_export.CommissioningModeInstanceData.md#productid)
- [sessionActiveInterval](common_export.CommissioningModeInstanceData.md#sessionactiveinterval)
- [sessionActiveThreshold](common_export.CommissioningModeInstanceData.md#sessionactivethreshold)
- [sessionIdleInterval](common_export.CommissioningModeInstanceData.md#sessionidleinterval)
- [vendorId](common_export.CommissioningModeInstanceData.md#vendorid)

## Properties

### deviceType

• `Readonly` **deviceType**: `number`

The device type for commissioning announcements.

#### Inherited from

[ProductDescription](behavior_cluster_export._internal_.ProductDescription.md).[deviceType](behavior_cluster_export._internal_.ProductDescription.md#devicetype)

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L18)

___

### discriminator

• **discriminator**: `number`

Device discriminator for commissionable announcements.

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L136)

___

### name

• `Readonly` **name**: `string`

The device name for commissioning announcements.

#### Inherited from

[ProductDescription](behavior_cluster_export._internal_.ProductDescription.md).[name](behavior_cluster_export._internal_.ProductDescription.md#name)

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L13)

___

### pairingHint

• `Optional` **pairingHint**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<\{ `administrator`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `customInstruction`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `deviceManual`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `deviceManufacturerUrl`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `powerCycle`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButton`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButtonNumberOfTimes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButtonUntilLightBlinks`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressResetButtonWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressRestButtonForNumberOfSeconds`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButton`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonForNumberOfSeconds`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonForNumberOfSecondsWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonNumberOfTimes`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonUntilLightBlinks`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonUntilLightBlinksWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `pressSetupButtonWithApplicationOfPower`: [`BitFlag`](../modules/schema_export.md#bitflag) ; `settingsMenuOnNode`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>

Pairing Hint of the device for commissionable announcements.

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L148)

___

### pairingInstructions

• `Optional` **pairingInstructions**: `string`

Pairing Instruction of the device for commissionable announcements.

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:151](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L151)

___

### productId

• `Readonly` **productId**: `number`

The product ID for commissioning announcements.

#### Inherited from

[ProductDescription](behavior_cluster_export._internal_.ProductDescription.md).[productId](behavior_cluster_export._internal_.ProductDescription.md#productid)

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L28)

___

### sessionActiveInterval

• `Optional` **sessionActiveInterval**: `number`

Session Active Interval of the device for commissionable announcements.

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L142)

___

### sessionActiveThreshold

• `Optional` **sessionActiveThreshold**: `number`

Duration of time the node should stay Active after the last network activity. *

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L145)

___

### sessionIdleInterval

• `Optional` **sessionIdleInterval**: `number`

Session Idle Interval of the device for commissionable announcements.

#### Defined in

[packages/matter.js/src/common/InstanceBroadcaster.ts:139](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/InstanceBroadcaster.ts#L139)

___

### vendorId

• `Readonly` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

The vendor ID for commissioning announcements.

#### Inherited from

[ProductDescription](behavior_cluster_export._internal_.ProductDescription.md).[vendorId](behavior_cluster_export._internal_.ProductDescription.md#vendorid)

#### Defined in

[packages/matter.js/src/behavior/system/product-description/ProductDescription.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/system/product-description/ProductDescription.ts#L23)
