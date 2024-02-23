[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / KeypadInput

# Namespace: KeypadInput

[exports/cluster](exports_cluster.md).KeypadInput

## Table of contents

### Enumerations

- [CecKeyCode](../enums/exports_cluster.KeypadInput.CecKeyCode.md)
- [Feature](../enums/exports_cluster.KeypadInput.Feature.md)
- [Status](../enums/exports_cluster.KeypadInput.Status.md)

### Type Aliases

- [Extension](exports_cluster.KeypadInput.md#extension)

### Variables

- [Base](exports_cluster.KeypadInput.md#base)
- [Cluster](exports_cluster.KeypadInput.md#cluster)
- [TlvSendKeyRequest](exports_cluster.KeypadInput.md#tlvsendkeyrequest)
- [TlvSendKeyResponse](exports_cluster.KeypadInput.md#tlvsendkeyresponse)

## Type Aliases

### Extension

Ƭ **Extension**\<`SF`\>: `Omit`\<typeof [`Base`](exports_cluster.KeypadInput.md#base), ``"supportedFeatures"``\> & \{ `supportedFeatures`: `SF`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SF` | extends [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)\<typeof `Base.features`\> |

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:381

## Variables

### Base

• `Const` **Base**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `commands`: \{ `sendKey`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `locationKeys`: [`BitFlag`](exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>

These elements and properties are present in all KeypadInput clusters.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:170

___

### Cluster

• `Const` **Cluster**: \{ `attributes`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `commands`: \{ `sendKey`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `events`: {} ; `features`: \{ `locationKeys`: [`BitFlag`](exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/util/Type"`](exports_cluster._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_util_Type_.md) ; `name`: ``"KeypadInput"`` ; `revision`: ``1`` ; `supportedFeatures`: {} ; `unknown`: ``false``  } & `Omit`\<[`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `commands`: \{ `sendKey`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `features`: \{ `locationKeys`: [`BitFlag`](exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](exports_schema.md#bitflag)  } ; `id`: ``1289`` ; `name`: ``"KeypadInput"`` ; `revision`: ``1``  }\>, ``"attributes"``\> & \{ `with`: \<T\>(...`features_0`: `T`) => [`Extension`](exports_cluster.KeypadInput.md#extension)\<[`BitFlags`](exports_schema.md#bitflags)\<\{ `locationKeys`: [`BitFlag`](exports_schema.md#bitflag) ; `navigationKeyCodes`: [`BitFlag`](exports_schema.md#bitflag) ; `numberKeys`: [`BitFlag`](exports_schema.md#bitflag)  }, `T`\>\>  }

Keypad Input

This cluster provides an interface for key code based input and control on a device like a Video Player or an
endpoint like a Content App. This may include text or action commands such as UP, DOWN, and SELECT.

KeypadInputCluster supports optional features that you can enable with the KeypadInputCluster.with() factory
method.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.8

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:232

___

### TlvSendKeyRequest

• `Const` **TlvSendKeyRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the KeypadInput sendKey command

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.8.3.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:104

___

### TlvSendKeyResponse

• `Const` **TlvSendKeyResponse**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This command shall be generated in response to a SendKey command.

**`See`**

MatterApplicationClusterSpecificationV1_1 § 6.8.3.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/KeypadInputCluster.d.ts:134
