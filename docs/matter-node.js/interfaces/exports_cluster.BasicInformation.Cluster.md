[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [BasicInformation](../modules/exports_cluster.BasicInformation.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[BasicInformation](../modules/exports_cluster.BasicInformation.md).Cluster

Basic Information

This cluster provides attributes and events for determining basic information about Nodes, which supports both
Commissioning and operational determination of Node characteristics, such as Vendor ID, Product ID and serial
number, which apply to the whole Node.

**`See`**

MatterSpecification.v11.Core § 11.1

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.BasicInformation.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.BasicInformation.Cluster.md#attributes)
- [base](exports_cluster.BasicInformation.Cluster.md#base)
- [commands](exports_cluster.BasicInformation.Cluster.md#commands)
- [events](exports_cluster.BasicInformation.Cluster.md#events)
- [extensions](exports_cluster.BasicInformation.Cluster.md#extensions)
- [features](exports_cluster.BasicInformation.Cluster.md#features)
- [id](exports_cluster.BasicInformation.Cluster.md#id)
- [name](exports_cluster.BasicInformation.Cluster.md#name)
- [revision](exports_cluster.BasicInformation.Cluster.md#revision)
- [supportedFeatures](exports_cluster.BasicInformation.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.BasicInformation.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.BasicInformation.Cluster.md#alter)
- [enable](exports_cluster.BasicInformation.Cluster.md#enable)
- [set](exports_cluster.BasicInformation.Cluster.md#set)
- [with](exports_cluster.BasicInformation.Cluster.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<\{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `leave` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> | The Leave event SHOULD be generated by a Node prior to permanently leaving a given Fabric, such as when the RemoveFabric command is invoked for a given fabric, or triggered by factory reset or some other manufacturer specific action to disable or reset the operational data in the Node. When a Leave event is generated, it SHOULD be assumed that the fabric recorded in the event is no longer usable, and subsequent interactions targeting that fabric will most likely fail. Upon receipt of Leave Event on a subscription, the receiving Node may update other nodes in the fabric by removing related bindings, access control list entries and other data referencing the leaving Node. **`See`** MatterSpecification.v11.Core § 11.1.6.3 |
| `reachableChanged` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> | This event shall be supported if and only if the Reachable attribute is supported. This event (when supported) shall be generated when there is a change in the Reachable attribute. Its main use case is in the derived Bridged Device Basic Information cluster. **`See`** MatterSpecification.v11.Core § 11.1.6.4 |
| `shutDown` | [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> | The ShutDown event SHOULD be generated by a Node prior to any orderly shutdown sequence on a best-effort basis. When a ShutDown event is generated, it SHOULD be the last Data Model event recorded by the Node. This event SHOULD be delivered urgently to current subscribers on a best- effort basis. Any subsequent incoming interactions to the Node may be dropped until the completion of a future boot or reboot process. **`See`** MatterSpecification.v11.Core § 11.1.6.2 |
| `startUp` | [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> | The StartUp event shall be generated by a Node as soon as reasonable after completing a boot or reboot process. The StartUp event SHOULD be the first Data Model event recorded by the Node after it completes a boot or reboot process. **`See`** MatterSpecification.v11.Core § 11.1.6.1 |

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``40``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"BasicInformation"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``2``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: \{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  } ; `events`: \{ `leave`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `fabricIndex`: [`FieldType`](exports_tlv.FieldType.md)\<[`FabricIndex`](../modules/exports_datatype.md#fabricindex)\>  }\>, `any`\> ; `reachableChanged`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `reachableNewValue`: [`FieldType`](exports_tlv.FieldType.md)\<`boolean`\>  }\>, `any`\> ; `shutDown`: [`OptionalEvent`](exports_cluster.OptionalEvent.md)\<`void`, `any`\> ; `startUp`: [`Event`](exports_cluster.Event.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `softwareVersion`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\>  } ; `id`: ``40`` ; `name`: ``"BasicInformation"`` ; `revision`: ``2``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
