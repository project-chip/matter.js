[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ModeSelect

# Namespace: ModeSelect

[exports/cluster](exports_cluster.md).ModeSelect

## Table of contents

### Enumerations

- [Feature](../enums/exports_cluster.ModeSelect.Feature.md)

### Interfaces

- [ChangeToModeRequest](../interfaces/exports_cluster.ModeSelect.ChangeToModeRequest.md)
- [Cluster](../interfaces/exports_cluster.ModeSelect.Cluster.md)
- [Complete](../interfaces/exports_cluster.ModeSelect.Complete.md)
- [ModeOptionStruct](../interfaces/exports_cluster.ModeSelect.ModeOptionStruct.md)
- [SemanticTagStruct](../interfaces/exports_cluster.ModeSelect.SemanticTagStruct.md)

### Variables

- [Base](exports_cluster.ModeSelect.md#base)
- [Cluster](exports_cluster.ModeSelect.md#cluster)
- [ClusterInstance](exports_cluster.ModeSelect.md#clusterinstance)
- [Complete](exports_cluster.ModeSelect.md#complete)
- [CompleteInstance](exports_cluster.ModeSelect.md#completeinstance)
- [OnOffComponent](exports_cluster.ModeSelect.md#onoffcomponent)
- [TlvChangeToModeRequest](exports_cluster.ModeSelect.md#tlvchangetomoderequest)
- [TlvModeOptionStruct](exports_cluster.ModeSelect.md#tlvmodeoptionstruct)
- [TlvSemanticTagStruct](exports_cluster.ModeSelect.md#tlvsemantictagstruct)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all ModeSelect clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `attributes` | \{ `currentMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } | - |
| `attributes.currentMode` | [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> | This attribute represents the current mode of the server. The value of this field must match the Mode field of one of the entries in the SupportedModes attribute. **`See`** MatterSpecification.v11.Cluster § 1.8.5.4 |
| `attributes.description` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> | This attribute describes the purpose of the server, in readable text. For example, a coffee machine may have a Mode Select cluster for the amount of milk to add, and another Mode Select cluster for the amount of sugar to add. In this case, the first instance can have the description Milk and the second instance can have the description Sugar. This allows the user to tell the purpose of each of the instances. **`See`** MatterSpecification.v11.Cluster § 1.8.5.1 |
| `attributes.standardNamespace` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> | This attribute, when not null, shall indicate a single standard namespace for any standard semantic tag value supported in this or any other cluster instance with the same value of this attribute. A null value indicates no standard namespace, and therefore, no standard semantic tags are provided in this cluster instance. Each standard namespace and corresponding values and value meanings shall be defined in another document. **`See`** MatterSpecification.v11.Cluster § 1.8.5.2 |
| `attributes.startUpMode` | [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> | The StartUpMode attribute value indicates the desired startup mode for the server when it is supplied with power. If this attribute is not null, the CurrentMode attribute shall be set to the StartUpMode value, when the server is powered up, except in the case when the OnMode attribute overrides the StartUpMode attribute. This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentMode attribute shall return to its value prior to the restart. The value of this field shall match the Mode field of one of the entries in the SupportedModes attribute. If this attribute is not implemented, or is set to the null value, it shall have no effect. **`See`** MatterSpecification.v11.Cluster § 1.8.5.5 |
| `attributes.supportedModes` | [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> | This attribute is the list of supported modes that may be selected for the CurrentMode attribute. Each item in this list represents a unique mode as indicated by the Mode field of the ModeOptionStruct. Each entry in this list shall have a unique value for the Mode field. **`See`** MatterSpecification.v11.Cluster § 1.8.5.3 |
| `commands` | \{ `changeToMode`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } | - |
| `commands.changeToMode` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> | On receipt of this command, if the NewMode field indicates a valid mode transition within the supported list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the server shall respond with an INVALID_COMMAND status response. **`See`** MatterSpecification.v11.Cluster § 1.8.6.1 |
| `extensions` | readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] | This metadata controls which ModeSelectCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `onOff`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.onOff` | [`BitFlag`](exports_schema.md#bitflag) | OnOff Dependency with the On/Off cluster |
| `id` | ``80`` | - |
| `name` | ``"ModeSelect"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:157

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.ModeSelect.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:506

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:508

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `currentMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `standardNamespace`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `extensions`: readonly [\{ `component`: \{ `attributes`: \{ `onMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  }  } ; `flags`: \{ `onOff`: ``true``  }  }] ; `features`: \{ `onOff`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``80`` ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.ModeSelect.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:320

___

### Complete

• **Complete**: [`Complete`](../interfaces/exports_cluster.ModeSelect.Complete.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:623

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:625

___

### CompleteInstance

• `Const` **CompleteInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `acceptedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `attributeList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/AttributeId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_AttributeId_.md)[], `never`\> ; `clusterRevision`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `never`\> ; `currentMode`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `description`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `eventList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/EventId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_EventId_.md)[], `never`\> ; `featureMap`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/schema/BitmapSchema"`](exports_schema._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_schema_BitmapSchema_.md), `never`\> ; `generatedCommandList`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/datatype/CommandId"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_datatype_CommandId_.md)[], `never`\> ; `onMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> & \{ `isConditional`: ``true`` ; `mandatoryIf`: [] \| [\{ `onOff`: `boolean`  }] ; `optional`: ``true`` ; `optionalIf`: [] \| [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/cluster/Cluster"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_cluster_Cluster_.md)  } ; `standardNamespace`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<`number` \| ``null``, `any`\> ; `startUpMode`: [`OptionalWritableAttribute`](../interfaces/exports_cluster.OptionalWritableAttribute.md)\<`number` \| ``null``, `any`\> ; `supportedModes`: [`FixedAttribute`](../interfaces/exports_cluster.FixedAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\>  } ; `commands`: \{ `changeToMode`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `features`: \{ `onOff`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"ModeSelect"`` ; `revision`: ``1``  }\>

**`See`**

[Complete](exports_cluster.ModeSelect.md#complete)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:512

___

### OnOffComponent

• `Const` **OnOffComponent**: `Object`

A ModeSelectCluster supports these elements if it supports feature OnOff.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `onMode`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\>  } |
| `attributes.onMode` | [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number` \| ``null``, `any`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:127

___

### TlvChangeToModeRequest

• `Const` **TlvChangeToModeRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ModeSelect changeToMode command

**`See`**

MatterSpecification.v11.Cluster § 1.8.6.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:114

___

### TlvModeOptionStruct

• `Const` **TlvModeOptionStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This is a struct representing a possible mode of the server.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:50

___

### TlvSemanticTagStruct

• `Const` **TlvSemanticTagStruct**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

A Semantic Tag is meant to be interpreted by the client for the purpose the cluster serves.

**`See`**

MatterSpecification.v11.Cluster § 1.8.8.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ModeSelectCluster.d.ts:18
