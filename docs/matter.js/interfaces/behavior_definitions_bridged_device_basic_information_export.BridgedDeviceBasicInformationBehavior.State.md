[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/bridged-device-basic-information/export](../modules/behavior_definitions_bridged_device_basic_information_export.md) / [BridgedDeviceBasicInformationBehavior](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.md) / State

# Interface: State

[behavior/definitions/bridged-device-basic-information/export](../modules/behavior_definitions_bridged_device_basic_information_export.md).[BridgedDeviceBasicInformationBehavior](../modules/behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_bridged_device_basic_information_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [hardwareVersion](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#hardwareversion)
- [hardwareVersionString](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#hardwareversionstring)
- [manufacturingDate](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#manufacturingdate)
- [nodeLabel](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#nodelabel)
- [partNumber](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#partnumber)
- [productAppearance](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#productappearance)
- [productLabel](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#productlabel)
- [productName](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#productname)
- [productUrl](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#producturl)
- [reachable](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#reachable)
- [serialNumber](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#serialnumber)
- [softwareVersion](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#softwareversion)
- [softwareVersionString](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#softwareversionstring)
- [uniqueId](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#uniqueid)
- [vendorId](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#vendorid)
- [vendorName](behavior_definitions_bridged_device_basic_information_export.BridgedDeviceBasicInformationBehavior.State.md#vendorname)

## Properties

### hardwareVersion

• `Optional` **hardwareVersion**: `number`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.hardwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L134)

___

### hardwareVersionString

• `Optional` **hardwareVersionString**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.hardwareVersionString

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:139](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L139)

___

### manufacturingDate

• `Optional` **manufacturingDate**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.manufacturingDate

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:154](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L154)

___

### nodeLabel

• `Optional` **nodeLabel**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.nodeLabel

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L125)

___

### partNumber

• `Optional` **partNumber**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.partNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L159)

___

### productAppearance

• `Optional` **productAppearance**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>

#### Inherited from

StateType.productAppearance

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:186](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L186)

___

### productLabel

• `Optional` **productLabel**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.productLabel

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:169](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L169)

___

### productName

• `Optional` **productName**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.productName

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L120)

___

### productUrl

• `Optional` **productUrl**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.productUrl

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:164](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L164)

___

### reachable

• **reachable**: `boolean`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.reachable

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:179](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L179)

___

### serialNumber

• `Optional` **serialNumber**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.serialNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:174](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L174)

___

### softwareVersion

• `Optional` **softwareVersion**: `number`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.softwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L144)

___

### softwareVersionString

• `Optional` **softwareVersionString**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.softwareVersionString

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:149](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L149)

___

### uniqueId

• `Optional` **uniqueId**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.uniqueId

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:184](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L184)

___

### vendorId

• `Optional` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.vendorId

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L115)

___

### vendorName

• `Optional` **vendorName**: `string`

**`See`**

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

StateType.vendorName

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L110)
