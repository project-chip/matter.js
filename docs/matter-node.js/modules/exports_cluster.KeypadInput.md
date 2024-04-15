[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / KeypadInput

# Namespace: KeypadInput

[exports/cluster](exports_cluster.md).KeypadInput

## Table of contents

### Enumerations

- [CecKeyCode](../enums/exports_cluster.KeypadInput.CecKeyCode.md)
- [Feature](../enums/exports_cluster.KeypadInput.Feature.md)
- [Status](../enums/exports_cluster.KeypadInput.Status.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.KeypadInput.Cluster.md)
- [SendKeyRequest](../interfaces/exports_cluster.KeypadInput.SendKeyRequest.md)
- [SendKeyResponse](../interfaces/exports_cluster.KeypadInput.SendKeyResponse.md)

### Variables

- [Base](exports_cluster.KeypadInput.md#base)
- [Cluster](exports_cluster.KeypadInput.md#cluster)
- [ClusterInstance](exports_cluster.KeypadInput.md#clusterinstance)
- [Complete](exports_cluster.KeypadInput.md#complete)
- [TlvSendKeyRequest](exports_cluster.KeypadInput.md#tlvsendkeyrequest)
- [TlvSendKeyResponse](exports_cluster.KeypadInput.md#tlvsendkeyresponse)

## Variables

### Base

• `Const` **Base**: `Object`

These elements and properties are present in all KeypadInput clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `commands` | \{ `sendKey`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } | - |
| `commands.sendKey` | [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> | Upon receipt, this shall process a keycode as input to the media device. If a second SendKey request with the same KeyCode value is received within 200ms, then the endpoint will consider the first key press to be a press and hold. When such a repeat KeyCode value is not received within 200ms, then the endpoint will consider the last key press to be a release. **`See`** MatterSpecification.v11.Cluster § 6.8.3.1 |
| `extensions` | readonly [] | This metadata controls which KeypadInputCluster elements matter.js activates for specific feature combinations. |
| `features` | \{ `locationKeys`: [`BitFlag`](exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](exports_schema.md#bitflag)  } | - |
| `features.locationKeys` | [`BitFlag`](exports_schema.md#bitflag) | LocationKeys Supports CEC keys 0x0A (Settings) and 0x09 (Home) |
| `features.navigationKeyCodes` | [`BitFlag`](exports_schema.md#bitflag) | NavigationKeyCodes Supports UP, DOWN, LEFT, RIGHT, SELECT, BACK, EXIT, MENU |
| `features.numberKeys` | [`BitFlag`](exports_schema.md#bitflag) | NumberKeys Supports numeric input 0..9 |
| `id` | ``1289`` | - |
| `name` | ``"KeypadInput"`` | - |
| `revision` | ``1`` | - |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:186

___

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.KeypadInput.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:312

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:314

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `commands`: \{ `sendKey`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `extensions`: readonly [] ; `features`: \{ `locationKeys`: [`BitFlag`](exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.KeypadInput.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:245

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.KeypadInput.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:315

___

### TlvSendKeyRequest

• `Const` **TlvSendKeyRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the KeypadInput sendKey command

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:106

___

### TlvSendKeyResponse

• `Const` **TlvSendKeyResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to a SendKey command.

**`See`**

MatterSpecification.v11.Cluster § 6.8.3.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:143
