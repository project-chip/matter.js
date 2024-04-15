[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [AdministratorCommissioning](../modules/cluster_export.AdministratorCommissioning.md) / Complete

# Interface: Complete

[cluster/export](../modules/cluster_export.md).[AdministratorCommissioning](../modules/cluster_export.AdministratorCommissioning.md).Complete

This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CompleteInstance`](../modules/cluster_export.AdministratorCommissioning.md#completeinstance)\>

  ↳ **`Complete`**

## Table of contents

### Properties

- [attributes](cluster_export.AdministratorCommissioning.Complete.md#attributes)
- [base](cluster_export.AdministratorCommissioning.Complete.md#base)
- [commands](cluster_export.AdministratorCommissioning.Complete.md#commands)
- [events](cluster_export.AdministratorCommissioning.Complete.md#events)
- [extensions](cluster_export.AdministratorCommissioning.Complete.md#extensions)
- [features](cluster_export.AdministratorCommissioning.Complete.md#features)
- [id](cluster_export.AdministratorCommissioning.Complete.md#id)
- [name](cluster_export.AdministratorCommissioning.Complete.md#name)
- [revision](cluster_export.AdministratorCommissioning.Complete.md#revision)
- [supportedFeatures](cluster_export.AdministratorCommissioning.Complete.md#supportedfeatures)
- [unknown](cluster_export.AdministratorCommissioning.Complete.md#unknown)

### Methods

- [alter](cluster_export.AdministratorCommissioning.Complete.md#alter)
- [enable](cluster_export.AdministratorCommissioning.Complete.md#enable)
- [set](cluster_export.AdministratorCommissioning.Complete.md#set)
- [with](cluster_export.AdministratorCommissioning.Complete.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<[`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\>

#### Inherited from

Identity.attributes

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L86)

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L92)

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `openBasicCommissioningWindow` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } | - |
| `openCommissioningWindow` | [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> | This command is used by a current Administrator to instruct a Node to go into commissioning mode. The Enhanced Commissioning Method specifies a window of time during which an already commissioned Node accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW. When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric completes when the Node successfully receives a CommissioningComplete command, see Section 5.5, “Commissioning Flows”. The parameters for OpenCommissioningWindow command are as follows: A current Administrator may invoke this command to put a node in commissioning mode for the next Administrator. On completion, the command shall return a cluster specific status code from the enumeration below reflecting success or reasons for failure of the operation. The new Administrator shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning. If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments arise, this command shall fail with a cluster specific status code of PAKEParameterError. If a commissioning window is already currently open, this command shall fail with a cluster specific status code of Busy. If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code of Busy, since it is likely that concurrent commissioning operations from multiple separate Commissioners are about to take place. In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID. **`See`** MatterSpecification.v11.Core § 11.18.8.1 |
| `revokeCommissioning` | [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\> | This command is used by a current Administrator to instruct a Node to revoke any active Open Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window command, see Section 4.3.1, “Commissionable Node Discovery”. If no commissioning window was open at time of receipt, this command shall fail with a cluster specific status code of WindowNotOpen. **`See`** MatterSpecification.v11.Core § 11.18.8.3 |

#### Inherited from

Identity.commands

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L89)

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L90)

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L93)

___

### features

• **features**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `basic` | [`BitFlag`](../modules/schema_export.md#bitflag) | Basic Node supports Basic Commissioning Method. |

#### Inherited from

Identity.features

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L84)

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<[`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\>, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L81)

___

### name

• **name**: ``"AdministratorCommissioning"``

#### Inherited from

Identity.name

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L82)

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L83)

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L85)

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/cluster_export.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/cluster_export.ElementModifier.md#alterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/cluster_export.ElementModifier.md#withalterations)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/cluster_export.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/cluster_export.ElementModifier.md#elementflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/cluster_export.ElementModifier.md#withflags)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/cluster_export.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/cluster_export.ElementModifier.md#withvalues)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

Select features using [ClusterComposer.compose](../classes/cluster_export.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/cluster_export.ClusterComposer.md#featureselection)\<[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](cluster_export.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](cluster_export.Attribute.md)\<``null`` \| [`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](cluster_export.Command.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

#### Inherited from

Identity.with

#### Defined in

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
