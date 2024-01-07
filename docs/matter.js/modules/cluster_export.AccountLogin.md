[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / AccountLogin

# Namespace: AccountLogin

[cluster/export](cluster_export.md).AccountLogin

## Table of contents

### Variables

- [Cluster](cluster_export.AccountLogin.md#cluster)
- [TlvGetSetupPinRequest](cluster_export.AccountLogin.md#tlvgetsetuppinrequest)
- [TlvGetSetupPinResponse](cluster_export.AccountLogin.md#tlvgetsetuppinresponse)
- [TlvLoginRequest](cluster_export.AccountLogin.md#tlvloginrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `commands`: \{ `getSetupPin`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `setupPin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](cluster_export.md#command)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` = 0x50e; `name`: ``"AccountLogin"`` = "AccountLogin"; `revision`: ``1`` = 1 }\>

Account Login

This cluster provides commands that facilitate user account login on a Content App or a node. For example, a
Content App running on a Video Player device, which is represented as an endpoint (see Device Type Library
document), can use this cluster to help make the user account on the Content App match the user account on the
Client.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:80](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L80)

___

### TlvGetSetupPinRequest

• `Const` **TlvGetSetupPinRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `tempAccountIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the AccountLogin getSetupPin command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.2.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:23](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L23)

___

### TlvGetSetupPinResponse

• `Const` **TlvGetSetupPinResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `setupPin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `string`\>  }\>

This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
account identified in the request does not match the active account of the running Content App.

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.2.4.2

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:39](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L39)

___

### TlvLoginRequest

• `Const` **TlvLoginRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `setupPin`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\>  }\>

Input to the AccountLogin login command

**`See`**

[MatterApplicationClusterSpecificationV1_1](../interfaces/spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.2.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts:54](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/cluster/definitions/AccountLoginCluster.ts#L54)
