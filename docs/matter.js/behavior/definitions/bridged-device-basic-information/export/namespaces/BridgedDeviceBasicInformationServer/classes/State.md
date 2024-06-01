[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/definitions/bridged-device-basic-information/export](../../../README.md) / [BridgedDeviceBasicInformationServer](../README.md) / State

# Class: State

## Extends

- `State`

## Constructors

### new State()

> **new State**(): [`State`](State.md)

#### Returns

[`State`](State.md)

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.constructor`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:216](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L216)

## Properties

### hardwareVersion?

> `optional` **hardwareVersion**: `number`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.hardwareVersion`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L134)

***

### hardwareVersionString?

> `optional` **hardwareVersionString**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.hardwareVersionString`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:139](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L139)

***

### manufacturingDate?

> `optional` **manufacturingDate**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.manufacturingDate`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L154)

***

### nodeLabel?

> `optional` **nodeLabel**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.nodeLabel`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L125)

***

### partNumber?

> `optional` **partNumber**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.partNumber`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L159)

***

### productAppearance?

> `optional` **productAppearance**: [`TypeFromFields`](../../../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>

#### Type declaration

##### finish

> **finish**: [`FieldType`](../../../../../../../tlv/export/interfaces/FieldType.md)\<[`ProductFinish`](../../../../../../../cluster/export/namespaces/BridgedDeviceBasicInformation/enumerations/ProductFinish.md)\>

##### primaryColor

> **primaryColor**: [`FieldType`](../../../../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`Color`](../../../../../../../cluster/export/namespaces/BridgedDeviceBasicInformation/enumerations/Color.md)\>

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.productAppearance`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:186](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L186)

***

### productLabel?

> `optional` **productLabel**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.productLabel`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:169](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L169)

***

### productName?

> `optional` **productName**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.productName`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L120)

***

### productUrl?

> `optional` **productUrl**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.productUrl`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:164](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L164)

***

### reachable

> **reachable**: `boolean` = `true`

#### Overrides

`BridgedDeviceBasicInformationBehavior.State.reachable`

#### Source

[packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/definitions/bridged-device-basic-information/BridgedDeviceBasicInformationServer.ts#L69)

***

### serialNumber?

> `optional` **serialNumber**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.serialNumber`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:174](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L174)

***

### softwareVersion?

> `optional` **softwareVersion**: `number`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.softwareVersion`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L144)

***

### softwareVersionString?

> `optional` **softwareVersionString**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.softwareVersionString`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L149)

***

### uniqueId?

> `optional` **uniqueId**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.uniqueId`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:184](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L184)

***

### vendorId?

> `optional` **vendorId**: [`VendorId`](../../../../../../../datatype/export/README.md#vendorid)

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.vendorId`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L115)

***

### vendorName?

> `optional` **vendorName**: `string`

#### See

MatterSpecification.v11.Core § 9.13.4

#### Inherited from

`BridgedDeviceBasicInformationBehavior.State.vendorName`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L110)
