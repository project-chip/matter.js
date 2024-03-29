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

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.hardwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:135](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L135)

___

### hardwareVersionString

• `Optional` **hardwareVersionString**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.hardwareVersionString

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:140](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L140)

___

### manufacturingDate

• `Optional` **manufacturingDate**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.manufacturingDate

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:155](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L155)

___

### nodeLabel

• `Optional` **nodeLabel**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.nodeLabel

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:126](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L126)

___

### partNumber

• `Optional` **partNumber**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.partNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:160](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L160)

___

### productAppearance

• `Optional` **productAppearance**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BridgedDeviceBasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BridgedDeviceBasicInformation.Color.md)\>  }\>

#### Inherited from

StateType.productAppearance

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:187](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L187)

___

### productLabel

• `Optional` **productLabel**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.productLabel

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:170](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L170)

___

### productName

• `Optional` **productName**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.productName

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:121](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L121)

___

### productUrl

• `Optional` **productUrl**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.productUrl

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:165](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L165)

___

### reachable

• **reachable**: `boolean`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.reachable

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:180](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L180)

___

### serialNumber

• `Optional` **serialNumber**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.serialNumber

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:175](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L175)

___

### softwareVersion

• `Optional` **softwareVersion**: `number`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.softwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:145](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L145)

___

### softwareVersionString

• `Optional` **softwareVersionString**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.softwareVersionString

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:150](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L150)

___

### uniqueId

• `Optional` **uniqueId**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.uniqueId

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:185](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L185)

___

### vendorId

• `Optional` **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.vendorId

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:116](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L116)

___

### vendorName

• `Optional` **vendorName**: `string`

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.13.4

#### Inherited from

StateType.vendorName

#### Defined in

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:111](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L111)
