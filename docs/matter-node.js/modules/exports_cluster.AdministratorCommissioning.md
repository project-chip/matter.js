[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / AdministratorCommissioning

# Namespace: AdministratorCommissioning

[exports/cluster](exports_cluster.md).AdministratorCommissioning

## Table of contents

### Enumerations

- [CommissioningWindowStatus](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md)
- [Feature](../enums/exports_cluster.AdministratorCommissioning.Feature.md)
- [StatusCode](../enums/exports_cluster.AdministratorCommissioning.StatusCode.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.AdministratorCommissioning.Cluster.md)
- [Complete](../interfaces/exports_cluster.AdministratorCommissioning.Complete.md)
- [OpenBasicCommissioningWindowRequest](../interfaces/exports_cluster.AdministratorCommissioning.OpenBasicCommissioningWindowRequest.md)
- [OpenCommissioningWindowRequest](../interfaces/exports_cluster.AdministratorCommissioning.OpenCommissioningWindowRequest.md)

### Variables

- [Base](exports_cluster.AdministratorCommissioning.md#base)
- [BasicComponent](exports_cluster.AdministratorCommissioning.md#basiccomponent)
- [Cluster](exports_cluster.AdministratorCommissioning.md#cluster)
- [ClusterInstance](exports_cluster.AdministratorCommissioning.md#clusterinstance)
- [Complete](exports_cluster.AdministratorCommissioning.md#complete)
- [CompleteInstance](exports_cluster.AdministratorCommissioning.md#completeinstance)
- [TlvOpenBasicCommissioningWindowRequest](exports_cluster.AdministratorCommissioning.md#tlvopenbasiccommissioningwindowrequest)
- [TlvOpenCommissioningWindowRequest](exports_cluster.AdministratorCommissioning.md#tlvopencommissioningwindowrequest)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all AdministratorCommissioning clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `adminFabricIndex`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/FabricIndex"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_FabricIndex_.md) \| ``null``, `any`\> ; `adminVendorId`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_VendorId_.md) \| ``null``, `any`\> ; `windowStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  } | - |
| `attributes.adminFabricIndex` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/FabricIndex"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_FabricIndex_.md) \| ``null``, `any`\> | When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster. If, during an open commissioning window, the fabric for the Administrator that opened the window is removed, then this attribute shall be set to null. When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null. **`See`** MatterSpecification.v11.Core § 11.18.7.2 |
| `attributes.adminVendorId` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_VendorId_.md) \| ``null``, `any`\> | When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID associated with the Fabric scoping of the Administrator that opened the window. This field shall match the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened the window, at the time of window opening. If the fabric for the Administrator that opened the window is removed from the node while the commissioning window is still open, this attribute shall NOT be updated. When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null. **`See`** MatterSpecification.v11.Core § 11.18.7.3 |
| `attributes.windowStatus` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\> | This attribute shall indicate whether a new Commissioning window has been opened by an Administrator, using either the OCW command or the OBCW command. This attribute shall revert to WindowNotOpen upon expiry of a commissioning window. Note that an initial commissioning window is not opened using either the OCW command or the OBCW command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning. **`See`** MatterSpecification.v11.Core § 11.18.7.1 |
| `commands` | \{ `openCommissioningWindow`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `revokeCommissioning`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } | - |
| `commands.openCommissioningWindow` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | This command is used by a current Administrator to instruct a Node to go into commissioning mode. The Enhanced Commissioning Method specifies a window of time during which an already commissioned Node accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW. When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric completes when the Node successfully receives a CommissioningComplete command, see Section 5.5, “Commissioning Flows”. The parameters for OpenCommissioningWindow command are as follows: A current Administrator may invoke this command to put a node in commissioning mode for the next Administrator. On completion, the command shall return a cluster specific status code from the enumeration below reflecting success or reasons for failure of the operation. The new Administrator shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning. If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments arise, this command shall fail with a cluster specific status code of PAKEParameterError. If a commissioning window is already currently open, this command shall fail with a cluster specific status code of Busy. If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code of Busy, since it is likely that concurrent commissioning operations from multiple separate Commissioners are about to take place. In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID. **`See`** MatterSpecification.v11.Core § 11.18.8.1 |
| `commands.revokeCommissioning` | [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\> | This command is used by a current Administrator to instruct a Node to revoke any active Open Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window command, see Section 4.3.1, “Commissionable Node Discovery”. If no commissioning window was open at time of receipt, this command shall fail with a cluster specific status code of WindowNotOpen. **`See`** MatterSpecification.v11.Core § 11.18.8.3 |
| `extensions` | readonly [\{ `component`: \{ `commands`: \{ `openBasicCommissioningWindow`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `basic`: ``true``  }  }] | This metadata controls which AdministratorCommissioningCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `basic`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.basic` | [`BitFlag`](exports_schema.md#bitflag) | Basic Node supports Basic Commissioning Method. |
| `id` | ``60`` | - |
| `name` | ``"AdministratorCommissioning"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:193

___

### BasicComponent

• `Const` **BasicComponent**: `Object`

A AdministratorCommissioningCluster supports these elements if it supports feature Basic.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `commands` | \{ `openBasicCommissioningWindow`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } |
| `commands.openBasicCommissioningWindow` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:138

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.AdministratorCommissioning.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:620

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:622

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `adminFabricIndex`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/FabricIndex"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_FabricIndex_.md) \| ``null``, `any`\> ; `adminVendorId`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/VendorId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_VendorId_.md) \| ``null``, `any`\> ; `windowStatus`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`CommissioningWindowStatus`](../enums/exports_cluster.AdministratorCommissioning.CommissioningWindowStatus.md), `any`\>  } ; `commands`: \{ `openCommissioningWindow`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `revokeCommissioning`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `commands`: \{ `openBasicCommissioningWindow`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  }  } ; `flags`: \{ `basic`: ``true``  }  }] ; `features`: \{ `basic`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``60`` ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.AdministratorCommissioning.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:401

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.AdministratorCommissioning.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:806

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:808

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `openBasicCommissioningWindow`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `basic`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `openCommissioningWindow`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `revokeCommissioning`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `features`: \{ `basic`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"AdministratorCommissioning"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.AdministratorCommissioning.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:626

___

### TlvOpenBasicCommissioningWindowRequest

• `Const` **TlvOpenBasicCommissioningWindowRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AdministratorCommissioning openBasicCommissioningWindow command

**`See`**

MatterSpecification.v11.Core § 11.18.8.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:18

___

### TlvOpenCommissioningWindowRequest

• `Const` **TlvOpenCommissioningWindowRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AdministratorCommissioning openCommissioningWindow command

**`See`**

MatterSpecification.v11.Core § 11.18.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AdministratorCommissioningCluster.d.ts:50
