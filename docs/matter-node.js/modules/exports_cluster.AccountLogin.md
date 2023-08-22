[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / AccountLogin

# Namespace: AccountLogin

[exports/cluster](exports_cluster.md).AccountLogin

## Table of contents

### Variables

- [Cluster](exports_cluster.AccountLogin.md#cluster)
- [TlvGetSetupPinRequest](exports_cluster.AccountLogin.md#tlvgetsetuppinrequest)
- [TlvGetSetupPinResponse](exports_cluster.AccountLogin.md#tlvgetsetuppinresponse)
- [TlvLoginRequest](exports_cluster.AccountLogin.md#tlvloginrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `getSetupPin`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `login`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\> ; `logout`: [`Command`](exports_cluster.md#command)<`void`, `void`, `any`\>  }, {}\>

Account Login

This cluster provides commands that facilitate user account login on a Content App or a node. For example, a
Content App running on a Video Player device, which is represented as an endpoint (see Device Type Library
document), can use this cluster to help make the user account on the Content App match the user account on the
Client.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AccountLoginCluster.d.ts:67

___

### TlvGetSetupPinRequest

• `Const` **TlvGetSetupPinRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the AccountLogin getSetupPin command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.2.4.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AccountLoginCluster.d.ts:14

___

### TlvGetSetupPinResponse

• `Const` **TlvGetSetupPinResponse**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
account identified in the request does not match the active account of the running Content App.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.2.4.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AccountLoginCluster.d.ts:29

___

### TlvLoginRequest

• `Const` **TlvLoginRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the AccountLogin login command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.2.4.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/AccountLoginCluster.d.ts:43
