[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / AccountLogin

# Namespace: AccountLogin

[exports/cluster](exports_cluster.md).AccountLogin

## Table of contents

### Interfaces

- [Cluster](../interfaces/exports_cluster.AccountLogin.Cluster.md)
- [GetSetupPinRequest](../interfaces/exports_cluster.AccountLogin.GetSetupPinRequest.md)
- [GetSetupPinResponse](../interfaces/exports_cluster.AccountLogin.GetSetupPinResponse.md)
- [LoginRequest](../interfaces/exports_cluster.AccountLogin.LoginRequest.md)

### Variables

- [Cluster](exports_cluster.AccountLogin.md#cluster)
- [ClusterInstance](exports_cluster.AccountLogin.md#clusterinstance)
- [Complete](exports_cluster.AccountLogin.md#complete)
- [TlvGetSetupPinRequest](exports_cluster.AccountLogin.md#tlvgetsetuppinrequest)
- [TlvGetSetupPinResponse](exports_cluster.AccountLogin.md#tlvgetsetuppinresponse)
- [TlvLoginRequest](exports_cluster.AccountLogin.md#tlvloginrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.AccountLogin.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:227

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:229

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `login`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `logout`: [`Command`](../interfaces/exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.AccountLogin.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:85

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.AccountLogin.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:230

___

### TlvGetSetupPinRequest

• `Const` **TlvGetSetupPinRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AccountLogin getSetupPin command

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:17

___

### TlvGetSetupPinResponse

• `Const` **TlvGetSetupPinResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
account identified in the request does not match the active account of the running Content App.

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:39

___

### TlvLoginRequest

• `Const` **TlvLoginRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the AccountLogin login command

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/AccountLoginCluster.d.ts:61
