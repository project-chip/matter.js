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

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `commands`: \{ `getSetupPin`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `login`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `logout`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>

Account Login

This cluster provides commands that facilitate user account login on a Content App or a node. For example, a
Content App running on a Video Player device, which is represented as an endpoint (see Device Type Library
document), can use this cluster to help make the user account on the Content App match the user account on the
Client.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:68

___

### TlvGetSetupPinRequest

• `Const` **TlvGetSetupPinRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AccountLogin getSetupPin command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.2.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:15

___

### TlvGetSetupPinResponse

• `Const` **TlvGetSetupPinResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
account identified in the request does not match the active account of the running Content App.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.2.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:30

___

### TlvLoginRequest

• `Const` **TlvLoginRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AccountLogin login command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.2.4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:44
