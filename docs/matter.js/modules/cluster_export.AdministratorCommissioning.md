[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / AdministratorCommissioning

# Namespace: AdministratorCommissioning

[cluster/export](cluster_export.md).AdministratorCommissioning

## Table of contents

### Enumerations

- [CommissioningWindowStatus](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md)
- [Feature](../enums/cluster_export.AdministratorCommissioning.Feature.md)
- [StatusCode](../enums/cluster_export.AdministratorCommissioning.StatusCode.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.AdministratorCommissioning.Cluster.md)
- [Complete](../interfaces/cluster_export.AdministratorCommissioning.Complete.md)
- [OpenBasicCommissioningWindowRequest](../interfaces/cluster_export.AdministratorCommissioning.OpenBasicCommissioningWindowRequest.md)
- [OpenCommissioningWindowRequest](../interfaces/cluster_export.AdministratorCommissioning.OpenCommissioningWindowRequest.md)

### Variables

- [Base](cluster_export.AdministratorCommissioning.md#base)
- [BasicComponent](cluster_export.AdministratorCommissioning.md#basiccomponent)
- [Cluster](cluster_export.AdministratorCommissioning.md#cluster)
- [ClusterInstance](cluster_export.AdministratorCommissioning.md#clusterinstance)
- [Complete](cluster_export.AdministratorCommissioning.md#complete)
- [CompleteInstance](cluster_export.AdministratorCommissioning.md#completeinstance)
- [TlvOpenBasicCommissioningWindowRequest](cluster_export.AdministratorCommissioning.md#tlvopenbasiccommissioningwindowrequest)
- [TlvOpenCommissioningWindowRequest](cluster_export.AdministratorCommissioning.md#tlvopencommissioningwindowrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all AdministratorCommissioning clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `adminFabricIndex`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  } | - |
| `attributes.adminFabricIndex` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> | When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster. If, during an open commissioning window, the fabric for the Administrator that opened the window is removed, then this attribute shall be set to null. When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null. **`See`** MatterSpecification.v11.Core § 11.18.7.2 |
| `attributes.adminVendorId` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> | When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID associated with the Fabric scoping of the Administrator that opened the window. This field shall match the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened the window, at the time of window opening. If the fabric for the Administrator that opened the window is removed from the node while the commissioning window is still open, this attribute shall NOT be updated. When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null. **`See`** MatterSpecification.v11.Core § 11.18.7.3 |
| `attributes.windowStatus` | [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\> | This attribute shall indicate whether a new Commissioning window has been opened by an Administrator, using either the OCW command or the OBCW command. This attribute shall revert to WindowNotOpen upon expiry of a commissioning window. Note that an initial commissioning window is not opened using either the OCW command or the OBCW command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning. **`See`** MatterSpecification.v11.Core § 11.18.7.1 |
| `commands` | \{ `openCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } | - |
| `commands.openCommissioningWindow` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> | This command is used by a current Administrator to instruct a Node to go into commissioning mode. The Enhanced Commissioning Method specifies a window of time during which an already commissioned Node accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW. When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric completes when the Node successfully receives a CommissioningComplete command, see Section 5.5, “Commissioning Flows”. The parameters for OpenCommissioningWindow command are as follows: A current Administrator may invoke this command to put a node in commissioning mode for the next Administrator. On completion, the command shall return a cluster specific status code from the enumeration below reflecting success or reasons for failure of the operation. The new Administrator shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning. If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments arise, this command shall fail with a cluster specific status code of PAKEParameterError. If a commissioning window is already currently open, this command shall fail with a cluster specific status code of Busy. If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code of Busy, since it is likely that concurrent commissioning operations from multiple separate Commissioners are about to take place. In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID. **`See`** MatterSpecification.v11.Core § 11.18.8.1 |
| `commands.revokeCommissioning` | [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\> | This command is used by a current Administrator to instruct a Node to revoke any active Open Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window command, see Section 4.3.1, “Commissionable Node Discovery”. If no commissioning window was open at time of receipt, this command shall fail with a cluster specific status code of WindowNotOpen. **`See`** MatterSpecification.v11.Core § 11.18.8.3 |
| `extensions` | readonly [\{ `component`: \{ `commands`: \{ `openBasicCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = BasicComponent; `flags`: \{ `basic`: ``true`` = true }  }] | This metadata controls which AdministratorCommissioningCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `basic`: [`BitFlag`](schema_export.md#bitflag)  } | - |
| `features.basic` | [`BitFlag`](schema_export.md#bitflag) | Basic Node supports Basic Commissioning Method. |
| `id` | ``60`` | - |
| `name` | ``"AdministratorCommissioning"`` | - |
| `revision` | ``1`` | - |

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L220)

___

### BasicComponent

• `Const` **BasicComponent**: `Object`

A AdministratorCommissioningCluster supports these elements if it supports feature Basic.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `openBasicCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  } |
| `commands.openBasicCommissioningWindow` | [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> |

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L159)

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.AdministratorCommissioning.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:364](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L364)

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:366](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L366)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `adminFabricIndex`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  } ; `commands`: \{ `openCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `openBasicCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\>  }  } = BasicComponent; `flags`: \{ `basic`: ``true`` = true }  }] ; `features`: \{ `basic`: [`BitFlag`](schema_export.md#bitflag)  } ; `id`: ``60`` = 0x3c; `name`: ``"AdministratorCommissioning"`` = "AdministratorCommissioning"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.AdministratorCommissioning.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:348](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L348)

___

### Complete

• **Complete**: [`Complete`](../interfaces/cluster_export.AdministratorCommissioning.Complete.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:394](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L394)

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:396](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L396)

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: [`Merge`](util_export.md#merge)\<\{ `adminFabricIndex`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`FabricIndex`](datatype_export.md#fabricindex), `any`\> ; `adminVendorId`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<``null`` \| [`VendorId`](datatype_export.md#vendorid), `any`\> ; `windowStatus`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`CommissioningWindowStatus`](../enums/cluster_export.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes)\<\{ `basic`: [`BitFlag`](schema_export.md#bitflag)  }\>\> = Cluster.attributes; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `void`, `any`\> & \{ `isConditional`: ``true`` = true; `mandatoryIf`: [] \| [\{ `basic`: `boolean` = true }] ; `optional`: ``true`` = true; `optionalIf`: [] \| [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)\<[`BitSchema`](schema_export.md#bitschema)\>  } ; `openCommissioningWindow`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>, `void`, `any`\> ; `revokeCommissioning`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](schema_export.md#bitflag)  } = Cluster.features; `id`: [`Branded`](util_export.md#branded)\<``60``, ``"ClusterId"``\> = Cluster.id; `name`: ``"AdministratorCommissioning"`` = Cluster.name; `revision`: ``1`` = Cluster.revision }\>

**`See`**

[Complete](cluster_export.AdministratorCommissioning.md#complete)

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:372](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L372)

___

### TlvOpenBasicCommissioningWindowRequest

• `Const` **TlvOpenBasicCommissioningWindowRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the AdministratorCommissioning openBasicCommissioningWindow command

**`See`**

MatterSpecification.v11.Core § 11.18.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L29)

___

### TlvOpenCommissioningWindowRequest

• `Const` **TlvOpenCommissioningWindowRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `commissioningTimeout`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `discriminator`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `iterations`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `pakePasscodeVerifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `salt`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\>  }\>

Input to the AdministratorCommissioning openCommissioningWindow command

**`See`**

MatterSpecification.v11.Core § 11.18.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/AdministratorCommissioningCluster.ts#L63)
