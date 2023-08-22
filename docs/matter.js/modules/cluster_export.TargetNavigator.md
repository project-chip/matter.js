[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / TargetNavigator

# Namespace: TargetNavigator

[cluster/export](cluster_export.md).TargetNavigator

## Table of contents

### Enumerations

- [Status](../enums/cluster_export.TargetNavigator.Status.md)

### Variables

- [Cluster](cluster_export.TargetNavigator.md#cluster)
- [TlvNavigateTargetRequest](cluster_export.TargetNavigator.md#tlvnavigatetargetrequest)
- [TlvNavigateTargetResponse](cluster_export.TargetNavigator.md#tlvnavigatetargetresponse)
- [TlvTargetInfoStruct](cluster_export.TargetNavigator.md#tlvtargetinfostruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `currentTarget`: [`OptionalAttribute`](cluster_export.md#optionalattribute)<``null`` \| `number`, `any`\> ; `targetList`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `identifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `navigateTarget`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `target`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.TargetNavigator.Status.md)\>  }\>, `any`\>  }, {}\>

Target Navigator

This cluster provides an interface for UX navigation within a set of targets on a device or endpoint.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.11

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L109)

___

### TlvNavigateTargetRequest

• `Const` **TlvNavigateTargetRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `target`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the TargetNavigator navigateTarget command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.11.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L44)

___

### TlvNavigateTargetResponse

• `Const` **TlvNavigateTargetResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `data`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)<`string`\> ; `status`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`Status`](../enums/cluster_export.TargetNavigator.Status.md)\>  }\>

This command shall be generated in response to NavigateTarget command.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.11.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L86)

___

### TlvTargetInfoStruct

• `Const` **TlvTargetInfoStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `identifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\>  }\>

This indicates an object describing the navigable target.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.11.5.1

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L23)
