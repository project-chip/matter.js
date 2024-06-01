[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / BridgedDeviceBasicInformation

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

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:209

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

> `readonly` **productAppearance**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **vendorId**: [`OptionalFixedAttribute`](../../interfaces/OptionalFixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_VendorId/README.md), `any`\>

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

> `readonly` **reachableChanged**: [`Event`](../../interfaces/Event.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

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

> `readonly` **startUp**: [`OptionalEvent`](../../interfaces/OptionalEvent.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `any`\>

###### See

MatterSpecification.v11.Core § 9.13.5

##### id

> `readonly` **id**: `57`

##### name

> `readonly` **name**: `"BridgedDeviceBasicInformation"`

##### revision

> `readonly` **revision**: `2`

#### Source

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:82

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:212

***

### TlvProductAppearanceStruct

> `const` **TlvProductAppearanceStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:43

***

### TlvReachableChangedEvent

> `const` **TlvReachableChangedEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the BridgedDeviceBasicInformation reachableChanged event

#### See

MatterSpecification.v11.Core § 9.13.5.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:69

***

### TlvStartUpEvent

> `const` **TlvStartUpEvent**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Body of the BridgedDeviceBasicInformation startUp event

#### See

MatterSpecification.v11.Core § 9.13.5

#### Source

packages/matter.js/dist/esm/cluster/definitions/BridgedDeviceBasicInformationCluster.d.ts:54
