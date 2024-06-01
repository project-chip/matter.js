[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / BridgedDeviceBasicInformation

# Namespace: BridgedDeviceBasicInformation

## Index

### Enumerations

- [Color](enumerations/Color.md)
- [ProductFinish](enumerations/ProductFinish.md)

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [ProductAppearanceStruct](interfaces/ProductAppearanceStruct.md)
- [ReachableChangedEvent](interfaces/ReachableChangedEvent.md)
- [StartUpEvent](interfaces/StartUpEvent.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:246](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L246)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.hardwareVersion

> `readonly` **hardwareVersion**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.hardwareVersionString

> `readonly` **hardwareVersionString**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.manufacturingDate

> `readonly` **manufacturingDate**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.nodeLabel

> `readonly` **nodeLabel**: [`OptionalWritableAttribute`](../../interfaces/OptionalWritableAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.partNumber

> `readonly` **partNumber**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.productAppearance

> `readonly` **productAppearance**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

##### attributes.productLabel

> `readonly` **productLabel**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.productName

> `readonly` **productName**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.productUrl

> `readonly` **productUrl**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.reachable

> `readonly` **reachable**: [`Attribute`](../../interfaces/Attribute.md)\<`boolean`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.serialNumber

> `readonly` **serialNumber**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.softwareVersion

> `readonly` **softwareVersion**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`number`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.softwareVersionString

> `readonly` **softwareVersionString**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.uniqueId

> `readonly` **uniqueId**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.vendorId

> `readonly` **vendorId**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`VendorId`](../../../../datatype/export/README.md#vendorid), `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### attributes.vendorName

> `readonly` **vendorName**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<`string`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.4

##### events

> `readonly` **events**: `object`

##### events.leave

> `readonly` **leave**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.5

##### events.reachableChanged

> `readonly` **reachableChanged**: [`Event`](../../interfaces/Event.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

This event shall be generated when there is a change in the Reachable attribute. Its purpose is to
provide an indication towards interested parties that the reachability of a bridged device (over the
non-Matter network) has changed, so they may take appropriate action.

After (re)start of a bridge this event may be generated.

###### See

MatterSpecification.v11.Core § 9.13.5.1

##### events.shutDown

> `readonly` **shutDown**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<`void`, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.5

##### events.startUp

> `readonly` **startUp**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `any`\>

###### See

MatterSpecification.v11.Core § 9.13.5

##### id

> `readonly` **id**: `57` = `0x39`

##### name

> `readonly` **name**: `"BridgedDeviceBasicInformation"` = `"BridgedDeviceBasicInformation"`

##### revision

> `readonly` **revision**: `2` = `2`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L101)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:249](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L249)

***

### TlvProductAppearanceStruct

> `const` **TlvProductAppearanceStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### Type declaration

##### finish

> **finish**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`ProductFinish`](enumerations/ProductFinish.md)\>

##### primaryColor

> **primaryColor**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`null` \| [`Color`](enumerations/Color.md)\>

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L64)

***

### TlvReachableChangedEvent

> `const` **TlvReachableChangedEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the BridgedDeviceBasicInformation reachableChanged event

#### See

MatterSpecification.v11.Core § 9.13.5.1

#### Type declaration

##### reachableNewValue

> **reachableNewValue**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L89)

***

### TlvStartUpEvent

> `const` **TlvStartUpEvent**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Body of the BridgedDeviceBasicInformation startUp event

#### See

MatterSpecification.v11.Core § 9.13.5

#### Type declaration

##### softwareVersion

> **softwareVersion**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number`\>

#### Source

[packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/BridgedDeviceBasicInformationCluster.ts#L75)
