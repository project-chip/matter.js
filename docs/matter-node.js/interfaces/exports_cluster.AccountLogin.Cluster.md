[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [AccountLogin](../modules/exports_cluster.AccountLogin.md) / Cluster

# Interface: Cluster

[exports/cluster](../modules/exports_cluster.md).[AccountLogin](../modules/exports_cluster.AccountLogin.md).Cluster

Account Login

This cluster provides commands that facilitate user account login on a Content App or a node. For example, a
Content App running on a Video Player device, which is represented as an endpoint (see Device Type Library
document), can use this cluster to help make the user account on the Content App match the user account on the
Client.

**`See`**

MatterSpecification.v11.Cluster § 6.2

## Hierarchy

- [`Identity`](../modules/util_export.md#identity)\<typeof [`ClusterInstance`](../modules/exports_cluster.AccountLogin.md#clusterinstance)\>

  ↳ **`Cluster`**

## Table of contents

### Properties

- [attributes](exports_cluster.AccountLogin.Cluster.md#attributes)
- [base](exports_cluster.AccountLogin.Cluster.md#base)
- [commands](exports_cluster.AccountLogin.Cluster.md#commands)
- [events](exports_cluster.AccountLogin.Cluster.md#events)
- [extensions](exports_cluster.AccountLogin.Cluster.md#extensions)
- [features](exports_cluster.AccountLogin.Cluster.md#features)
- [id](exports_cluster.AccountLogin.Cluster.md#id)
- [name](exports_cluster.AccountLogin.Cluster.md#name)
- [revision](exports_cluster.AccountLogin.Cluster.md#revision)
- [supportedFeatures](exports_cluster.AccountLogin.Cluster.md#supportedfeatures)
- [unknown](exports_cluster.AccountLogin.Cluster.md#unknown)

### Methods

- [alter](exports_cluster.AccountLogin.Cluster.md#alter)
- [enable](exports_cluster.AccountLogin.Cluster.md#enable)
- [set](exports_cluster.AccountLogin.Cluster.md#set)
- [with](exports_cluster.AccountLogin.Cluster.md#with)

## Properties

### attributes

• **attributes**: `Object`

#### Inherited from

Identity.attributes

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:44

___

### base

• **base**: `undefined`

#### Inherited from

Identity.base

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:48

___

### commands

• **commands**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `getSetupPin` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> | The purpose of this command is to determine if the active user account of the given Content App matches the active user account of a given Commissionee, and when it does, return a Setup PIN code which can be used for password-authenticated session establishment (PASE) with the Commissionee. For example, a Video Player with a Content App Platform may invoke this command on one of its Content App endpoints to facilitate commissioning of a Phone App made by the same vendor as the Content App. If the accounts match, then the Content App may return a setup code that can be used by the Video Player to commission the Phone App without requiring the user to physically input a setup code. The account match is determined by the Content App using a method which is outside the scope of this specification and will typically involve a central service which is in communication with both the Content App and the Commissionee. The GetSetupPIN command is needed in order to provide the Commissioner/Admin with a Setup PIN when this Commissioner/Admin is operated by a different vendor from the Content App. This method is used to facilitate Setup PIN exchange (for PASE) between Commissioner and Commissionee when the same user account is active on both nodes. With this method, the Content App satisfies proof of possession related to commissioning by requiring the same user account to be active on both Commissionee and Content App, while the Commissioner/Admin ensures user consent by prompting the user prior to invocation of the command. Upon receipt of this command, the Content App checks if the account associated with the Temporary Account Identifier sent by the client is the same account that is active on itself. If the accounts are the same, then the Content App returns the GetSetupPIN Response which includes a Setup PIN that may be used for PASE with the Commissionee. The Temporary Account Identifier for a Commissionee may be populated with the Rotating ID field of the client’s commissionable node advertisement (see Rotating Device Identifier section in [MatterCore] ) encoded as an octet string where the octets of the Rotating Device Identifier are encoded as 2-character sequences by representing each octet’s value as a 2-digit hexadecimal number, using uppercase letters. The Setup PIN is an 11 character string so that it can accommodate different future formats, including alpha-numeric encodings. For a Commissionee it shall be populated with the Manual Pairing Code (see Manual Pairing Code section in [MatterCore] ) encoded as a string. The Server shall implement rate limiting to prevent brute force attacks. No more than 10 unique requests in a 10 minute period shall be allowed; a command response status of FAILURE should sent for additional commands received within the 10 minute period. Because access to this command is limited to nodes with Admin-level access, and the user is prompted for consent prior to Commissioning, there are in place multiple obstacles to successfully mounting a brute force attack. A Content App that supports this command shall ensure that the Temporary Account Identifier used by its clients is not valid for more than 10 minutes. **`See`** MatterSpecification.v11.Cluster § 6.2.4.1 |
| `login` | [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> | The purpose of this command is to allow the Content App to assume the user account of a given Commissionee by leveraging the Setup PIN code input by the user during the commissioning process. For example, a Video Player with a Content App Platform may invoke this command on one of its Content App endpoints after the commissioning has completed of a Phone App made by the same vendor as the Content App. The Content App may determine whether the Temporary Account Identifier maps to an account with a corresponding Setup PIN and, if so, it may automatically login to the account for the corresponding user. The end result is that a user performs commissioning of a Phone App to a Video Player by inputting the Setup PIN for the Phone App into the Video Player UX. Once commissioning has completed, the Video Player invokes this command to allow the corresponding Content App to assume the same user account as the Phone App. The verification of Setup PIN for the given Temporary Account Identifier is determined by the Content App using a method which is outside the scope of this specification and will typically involve a central service which is in communication with both the Content App and the Commissionee. Implementations of such a service should impose aggressive time outs for any mapping of Temporary Account Identifier to Setup PIN in order to prevent accidental login due to delayed invocation. Upon receipt, the Content App checks if the account associated with the client’s Temp Account Identifier has a current active Setup PIN with the given value. If the Setup PIN is valid for the user account associated with the Temp Account Identifier, then the Content App may make that user account active. The Temporary Account Identifier for a Commissionee may be populated with the Rotating ID field of the client’s commissionable node advertisement encoded as an octet string where the octets of the Rotating Device Identifier are encoded as 2-character sequences by representing each octet’s value as a 2-digit hexadecimal number, using uppercase letters. The Setup PIN for a Commissionee may be populated with the Manual Pairing Code encoded as a string of decimal numbers. The Server shall implement rate limiting to prevent brute force attacks. No more than 10 unique requests in a 10 minute period shall be allowed; a command response status of FAILURE should sent for additional commands received within the 10 minute period. Because access to this command is limited to nodes with Admin-level access, and the user is involved when obtaining the SetupPIN, there are in place multiple obstacles to successfully mounting a brute force attack. A Content App that supports this command shall ensure that the Temporary Account Identifier used by its clients is not valid for more than 10 minutes. **`See`** MatterSpecification.v11.Cluster § 6.2.4.3 |
| `logout` | [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\> | The purpose of this command is to instruct the Content App to clear the current user account. This command SHOULD be used by clients of a Content App to indicate the end of a user session. **`See`** MatterSpecification.v11.Cluster § 6.2.4.4 |

#### Inherited from

Identity.commands

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:45

___

### events

• **events**: `Object`

#### Inherited from

Identity.events

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:46

___

### extensions

• **extensions**: `undefined`

#### Inherited from

Identity.extensions

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:49

___

### features

• **features**: `Object`

#### Inherited from

Identity.features

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:42

___

### id

• **id**: [`Branded`](../modules/util_export.md#branded)\<``1294``, ``"ClusterId"``\>

#### Inherited from

Identity.id

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:39

___

### name

• **name**: ``"AccountLogin"``

#### Inherited from

Identity.name

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:40

___

### revision

• **revision**: ``1``

#### Inherited from

Identity.revision

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:41

___

### supportedFeatures

• **supportedFeatures**: `Object`

#### Inherited from

Identity.supportedFeatures

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:43

___

### unknown

• **unknown**: ``false``

#### Inherited from

Identity.unknown

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:47

## Methods

### alter

▸ **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../classes/exports_cluster.ElementModifier-1.md#alter).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AlterationsT` | extends [`Alterations`](../modules/exports_cluster.ElementModifier.md#alterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../modules/exports_cluster.ElementModifier.md#withalterations)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>, `AlterationsT`\>

#### Inherited from

Identity.alter

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:38

___

### enable

▸ **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../classes/exports_cluster.ElementModifier-1.md#enable).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `FlagsT` | extends [`ElementFlags`](../modules/exports_cluster.ElementModifier.md#elementflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../modules/exports_cluster.ElementModifier.md#withflags)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>, `FlagsT`\>

#### Inherited from

Identity.enable

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:46

___

### set

▸ **set**\<`ValuesT`\>(`values`): [`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../classes/exports_cluster.ElementModifier-1.md#set).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValuesT` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../modules/exports_cluster.ElementModifier.md#withvalues)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>, `ValuesT`\>

#### Inherited from

Identity.set

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:42

___

### with

▸ **with**\<`SelectionT`\>(`...selection`): [`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>

Select features using [ClusterComposer.compose](../classes/exports_cluster.ClusterComposer-1.md#compose).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SelectionT` | extends [`FeatureSelection`](../modules/exports_cluster.ClusterComposer.md#featureselection)\<[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...selection` | `SelectionT` |

#### Returns

[`Of`](exports_cluster.ClusterType.Of.md)\<\{ `commands`: \{ `getSetupPin`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `string`\>  }\>, `any`\> ; `login`: [`Command`](exports_cluster.Command.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `setupPin`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `tempAccountIdentifier`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>, `void`, `any`\> ; `logout`: [`Command`](exports_cluster.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``1294`` ; `name`: ``"AccountLogin"`` ; `revision`: ``1``  }\>

#### Inherited from

Identity.with

#### Defined in

packages/matter.js/dist/esm/cluster/mutation/MutableCluster.d.ts:34
