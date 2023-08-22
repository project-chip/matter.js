[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / AdministratorCommissioning

# Namespace: AdministratorCommissioning

[cluster/export](cluster_export.md).AdministratorCommissioning

## Table of contents

### Enumerations

- [CommissioningWindowStatus](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md)
- [Feature](../enums/cluster_export.AdministratorCommissioning.Feature.md)

### Type Aliases

- [Extension](cluster_export.AdministratorCommissioning.md#extension)

### Variables

- [Base](cluster_export.AdministratorCommissioning.md#base)
- [BasicComponent](cluster_export.AdministratorCommissioning.md#basiccomponent)
- [Cluster](cluster_export.AdministratorCommissioning.md#cluster)
- [Complete](cluster_export.AdministratorCommissioning.md#complete)
- [TlvOpenBasicCommissioningWindowRequest](cluster_export.AdministratorCommissioning.md#tlvopenbasiccommissioningwindowrequest)
- [TlvOpenCommissioningWindowRequest](cluster_export.AdministratorCommissioning.md#tlvopencommissioningwindowrequest)

## Type Aliases

### Extension

Ƭ **Extension**<`SF`\>: [`ClusterForBaseCluster`](cluster_export.md#clusterforbasecluster)<typeof [`Base`](cluster_export.AdministratorCommissioning.md#base), `SF`\> & { `supportedFeatures`: `SF`  } & `SF` extends { `basic`: ``true``  } ? typeof [`BasicComponent`](cluster_export.AdministratorCommissioning.md#basiccomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:323](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L323)

## Variables

### Base

• `Const` **Base**: [`BaseClusterComponent`](cluster_export.md#baseclustercomponent)<{ `basic`: [`BitFlag`](schema_export.md#bitflag-1)  }, { `adminFabricIndex`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.md#attribute)<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, { `openCommissioningWindow`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

These elements and properties are present in all AdministratorCommissioning clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:142](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L142)

___

### BasicComponent

• `Const` **BasicComponent**: [`ClusterComponent`](cluster_export.md#clustercomponent)<[`Attributes`](../interfaces/cluster_export.Attributes.md), { `openBasicCommissioningWindow`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md)\>

A AdministratorCommissioningCluster supports these elements if it supports feature Basic.

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:252](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L252)

___

### Cluster

• `Const` **Cluster**: [`ExtensibleCluster`](cluster_export.md#extensiblecluster)<{ `basic`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `basic`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<{ `adminFabricIndex`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.md#attribute)<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `basic`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `openCommissioningWindow`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, [`Events`](../interfaces/cluster_export.Events.md), <T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.AdministratorCommissioning.md#extension)<[`BitFlags`](schema_export.md#bitflags)<{ `basic`: [`BitFlag`](schema_export.md#bitflag-1)  }, `T`\>\>\>

Administrator Commissioning

This cluster is used to trigger a Node to allow a new Administrator to commission it. It defines Attributes,
Commands and Responses needed for this purpose.

For the management of Operational Credentials and Trusted Root Certificates, the Node Operational Credentials
cluster is used.

AdministratorCommissioningCluster supports optional features that you can enable with the
AdministratorCommissioningCluster.with() factory method.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.18

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:304](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L304)

___

### Complete

• `Const` **Complete**: [`Cluster`](cluster_export.md#cluster)<{ `basic`: [`BitFlag`](schema_export.md#bitflag-1)  }, [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<{ `basic`: [`BitFlag`](schema_export.md#bitflag-1)  }\>, [`Merge`](util_export.md#merge)<[`Merge`](util_export.md#merge)<{ `adminFabricIndex`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.md#attribute)<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.md#attribute)<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `basic`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<{ `basic`: [`BitFlag`](schema_export.md#bitflag-1)  }\>\>, { `openBasicCommissioningWindow`: [`AsConditional`](cluster_export.md#asconditional)<[`BitSchema`](schema_export.md#bitschema), [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `void`, `any`\>\> ; `openCommissioningWindow`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.md#command)<`void`, `void`, `any`\>  }, {}\>

This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:335](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L335)

___

### TlvOpenBasicCommissioningWindowRequest

• `Const` **TlvOpenBasicCommissioningWindowRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the AdministratorCommissioning openBasicCommissioningWindow command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.18.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:123](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L123)

___

### TlvOpenCommissioningWindowRequest

• `Const` **TlvOpenCommissioningWindowRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`Uint8Array`\>  }\>

Input to the AdministratorCommissioning openCommissioningWindow command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.18.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:55](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L55)
