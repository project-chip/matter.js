[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / AdministratorCommissioning

# Namespace: AdministratorCommissioning

[cluster/export](cluster_export.md).AdministratorCommissioning

## Table of contents

### Enumerations

- [CommissioningWindowStatus](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md)
- [Feature](../enums/cluster_export.AdministratorCommissioning.Feature.md)
- [StatusCode](../enums/cluster_export.AdministratorCommissioning.StatusCode.md)

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

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](cluster_export.AdministratorCommissioning.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  } & `SF` extends \{ `basic`: ``true``  } ? typeof [`BasicComponent`](cluster_export.AdministratorCommissioning.md#basiccomponent) : {}

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:359](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L359)

## Variables

### Base

• `Const` **Base**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `adminFabricIndex`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  } ; `commands`: \{ `openCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``60`` = 0x3c; `name`: ``"AdministratorCommissioning"`` = "AdministratorCommissioning"; `revision`: ``1`` = 1 }\>

These elements and properties are present in all AdministratorCommissioning clusters.

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:157](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L157)

___

### BasicComponent

• `Const` **BasicComponent**: [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)\<\{ `commands`: \{ `openBasicCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  }\>

A AdministratorCommissioningCluster supports these elements if it supports feature Basic.

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:279](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L279)

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](schema_export.md#bitflag)  }\>\> ; `commands`: \{ `openCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `events`: {} ; `features`: \{ `basic`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: [`Branded`](util_export.md#branded)\<``60`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\>, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `adminFabricIndex`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  } ; `commands`: \{ `openCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``60`` = 0x3c; `name`: ``"AdministratorCommissioning"`` = "AdministratorCommissioning"; `revision`: ``1`` = 1 }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features`: [...T[]]) => [`Extension`](cluster_export.AdministratorCommissioning.md#extension)\<[`BitFlags`](schema_export.md#bitflags)\<\{ `basic`: [`BitFlag`](schema_export.md#bitflag)  }, `T`\>\> = extender }

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

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:337](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L337)

___

### Complete

• `Const` **Complete**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: [`Merge`](util_export.md#merge)\<[`Merge`](util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: ``60`` & [`Brand`](util_export.md#brand)\<``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:371](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L371)

___

### TlvOpenBasicCommissioningWindowRequest

• `Const` **TlvOpenBasicCommissioningWindowRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the AdministratorCommissioning openBasicCommissioningWindow command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.18.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:138](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L138)

___

### TlvOpenCommissioningWindowRequest

• `Const` **TlvOpenCommissioningWindowRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the AdministratorCommissioning openCommissioningWindow command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.18.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:47](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L47)
