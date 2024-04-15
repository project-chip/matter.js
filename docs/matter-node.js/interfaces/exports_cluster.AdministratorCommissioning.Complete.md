[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AdministratorCommissioning](../modules/exports_cluster.AdministratorCommissioning.md) / Complete

# Interface: Complete

[exports/cluster](../modules/exports_cluster.md).[AdministratorCommissioning](../modules/exports_cluster.AdministratorCommissioning.md).Complete

This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`CompleteInstance`](../modules/exports_cluster.AdministratorCommissioning.md#completeinstance)\>

  ↳ **`Complete`**

## Table of contents

### Properties

- [attributes](exports_cluster.AdministratorCommissioning.Complete.md#attributes)
- [base](exports_cluster.AdministratorCommissioning.Complete.md#base)
- [commands](exports_cluster.AdministratorCommissioning.Complete.md#commands)
- [events](exports_cluster.AdministratorCommissioning.Complete.md#events)
- [extensions](exports_cluster.AdministratorCommissioning.Complete.md#extensions)
- [features](exports_cluster.AdministratorCommissioning.Complete.md#features)
- [id](exports_cluster.AdministratorCommissioning.Complete.md#id)
- [name](exports_cluster.AdministratorCommissioning.Complete.md#name)
- [revision](exports_cluster.AdministratorCommissioning.Complete.md#revision)
- [supportedFeatures](exports_cluster.AdministratorCommissioning.Complete.md#supportedfeatures)
- [unknown](exports_cluster.AdministratorCommissioning.Complete.md#unknown)

### Methods

- [alter](exports_cluster.AdministratorCommissioning.Complete.md#alter)
- [enable](exports_cluster.AdministratorCommissioning.Complete.md#enable)
- [set](exports_cluster.AdministratorCommissioning.Complete.md#set)
- [with](exports_cluster.AdministratorCommissioning.Complete.md#with)

## Properties

### attributes

• **attributes**: [`Merge`](../modules/util_export.md#merge)\<[`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\>

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

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `openBasicCommissioningWindow` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } | - |
| `openCommissioningWindow` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> | This command is used by a current Administrator to instruct a Node to go into commissioning mode. The Enhanced Commissioning Method specifies a window of time during which an already commissioned Node accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW. When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric completes when the Node successfully receives a CommissioningComplete command, see Section 5.5, “Commissioning Flows”. The parameters for OpenCommissioningWindow command are as follows: A current Administrator may invoke this command to put a node in commissioning mode for the next Administrator. On completion, the command shall return a cluster specific status code from the enumeration below reflecting success or reasons for failure of the operation. The new Administrator shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning. If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments arise, this command shall fail with a cluster specific status code of PAKEParameterError. If a commissioning window is already currently open, this command shall fail with a cluster specific status code of Busy. If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code of Busy, since it is likely that concurrent commissioning operations from multiple separate Commissioners are about to take place. In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID. **`See`** MatterSpecification.v11.Core § 11.18.8.1 |
| `revokeCommissioning` | [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> | This command is used by a current Administrator to instruct a Node to revoke any active Open Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window command, see Section 4.3.1, “Commissionable Node Discovery”. If no commissioning window was open at time of receipt, this command shall fail with a cluster specific status code of WindowNotOpen. **`See`** MatterSpecification.v11.Core § 11.18.8.3 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

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

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `basic` | [`BitFlag`](../modules/exports_schema.md#bitflag) | Basic Node supports Basic Commissioning Method. |

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<[`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\>, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"AdministratorCommissioning"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

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

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>, `ValuesT`\>

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

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `attributes`: [`Merge`](../modules/util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`FabricIndex`](../modules/exports_datatype.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](exports_cluster.Attribute.md)\<``null`` \| [`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<\{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  }\>\> ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`ConditionalFeatureList`](../modules/exports_cluster.md#conditionalfeaturelist)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](exports_tlv.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](../modules/exports_schema.md#bitflag)  } ; `id`: [`Branded`](../modules/util_export.md#branded)\<``60``, ``"ClusterId"``\> ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
