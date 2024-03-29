[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / TargetNavigator

# Namespace: TargetNavigator

[cluster/export](cluster_export.md).TargetNavigator

## Table of contents

### Enumerations

- [Status](../enums/cluster_export.TargetNavigator.Status.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.TargetNavigator.Cluster.md)
- [NavigateTargetRequest](../interfaces/cluster_export.TargetNavigator.NavigateTargetRequest.md)
- [NavigateTargetResponse](../interfaces/cluster_export.TargetNavigator.NavigateTargetResponse.md)
- [TargetInfoStruct](../interfaces/cluster_export.TargetNavigator.TargetInfoStruct.md)

### Variables

- [Cluster](cluster_export.TargetNavigator.md#cluster)
- [ClusterInstance](cluster_export.TargetNavigator.md#clusterinstance)
- [Complete](cluster_export.TargetNavigator.md#complete)
- [TlvNavigateTargetRequest](cluster_export.TargetNavigator.md#tlvnavigatetargetrequest)
- [TlvNavigateTargetResponse](cluster_export.TargetNavigator.md#tlvnavigatetargetresponse)
- [TlvTargetInfoStruct](cluster_export.TargetNavigator.md#tlvtargetinfostruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.TargetNavigator.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:175](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L175)

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:177](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L177)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `currentTarget`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<``null`` \| `number`, `any`\> ; `targetList`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `identifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>[], `any`\>  } ; `commands`: \{ `navigateTarget`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `target`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.TargetNavigator.Status.md)\>  }\>, `any`\>  } ; `id`: ``1285`` = 0x505; `name`: ``"TargetNavigator"`` = "TargetNavigator"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.TargetNavigator.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:130](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L130)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.TargetNavigator.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:178](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L178)

___

### TlvNavigateTargetRequest

• `Const` **TlvNavigateTargetRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `target`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the TargetNavigator navigateTarget command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.11.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:55](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L55)

___

### TlvNavigateTargetResponse

• `Const` **TlvNavigateTargetResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`Status`](../enums/cluster_export.TargetNavigator.Status.md)\>  }\>

This command shall be generated in response to NavigateTarget command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.11.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:104](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L104)

___

### TlvTargetInfoStruct

• `Const` **TlvTargetInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `identifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

This indicates an object describing the navigable target.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.11.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:27](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L27)
