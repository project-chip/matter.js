[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [AdministratorCommissioning](../README.md) / Complete

# Interface: Complete

This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.

If you use this cluster you must manually specify which features are active and ensure the set of active
features is legal per the Matter specification.

## Extends

- [`Identity`](../../../../../util/export/README.md#identityt)\<*typeof* [`CompleteInstance`](../README.md#completeinstance)\>

## Properties

### attributes

> **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<[`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\>

#### Inherited from

`Identity.attributes`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L86)

***

### base

> **base**: `undefined`

#### Inherited from

`Identity.base`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:92](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L92)

***

### commands

> **commands**: `object`

#### openBasicCommissioningWindow

> `readonly` **openBasicCommissioningWindow**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

##### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

#### openCommissioningWindow

> `readonly` **openCommissioningWindow**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command is used by a current Administrator to instruct a Node to go into commissioning mode. The
Enhanced Commissioning Method specifies a window of time during which an already commissioned Node
accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW.

When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE
passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as
described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric
completes when the Node successfully receives a CommissioningComplete command, see Section 5.5,
“Commissioning Flows”.

The parameters for OpenCommissioningWindow command are as follows:

A current Administrator may invoke this command to put a node in commissioning mode for the next
Administrator. On completion, the command shall return a cluster specific status code from the
enumeration below reflecting success or reasons for failure of the operation. The new Administrator
shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.

If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments
arise, this command shall fail with a cluster specific status code of PAKEParameterError.

If a commissioning window is already currently open, this command shall fail with a cluster specific
status code of Busy.

If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code
of Busy, since it is likely that concurrent commissioning operations from multiple separate
Commissioners are about to take place.

In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.

##### See

MatterSpecification.v11.Core § 11.18.8.1

#### revokeCommissioning

> `readonly` **revokeCommissioning**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command is used by a current Administrator to instruct a Node to revoke any active Open
Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the
Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing
the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window
command, see Section 4.3.1, “Commissionable Node Discovery”.

If no commissioning window was open at time of receipt, this command shall fail with a cluster specific
status code of WindowNotOpen.

##### See

MatterSpecification.v11.Core § 11.18.8.3

#### Inherited from

`Identity.commands`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L89)

***

### events

> **events**: `object`

#### Inherited from

`Identity.events`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L90)

***

### extensions

> **extensions**: `undefined`

#### Inherited from

`Identity.extensions`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L93)

***

### features

> **features**: `object`

#### basic

> `readonly` **basic**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Basic

Node supports Basic Commissioning Method.

#### Inherited from

`Identity.features`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L84)

***

### id

> **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<[`Branded`](../../../../../util/export/README.md#brandedtb)\<`60`, `"ClusterId"`\>, `"ClusterId"`\>

#### Inherited from

`Identity.id`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L81)

***

### name

> **name**: `"AdministratorCommissioning"`

#### Inherited from

`Identity.name`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L82)

***

### revision

> **revision**: `1`

#### Inherited from

`Identity.revision`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L83)

***

### supportedFeatures

> **supportedFeatures**: `object`

#### Inherited from

`Identity.supportedFeatures`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L85)

***

### unknown

> **unknown**: `false`

#### Inherited from

`Identity.unknown`

#### Source

[packages/matter.js/src/cluster/ClusterType.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/ClusterType.ts#L91)

## Methods

### alter()

> **alter**\<`AlterationsT`\>(`alterations`): [`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

Modify elements using [ElementModifier.alter](../../../classes/ElementModifier.md#alter).

#### Type parameters

| Type parameter |
| :------ |
| `AlterationsT` *extends* [`Alterations`](../../ElementModifier/README.md#alterationsoriginalt)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alterations` | `AlterationsT` |

#### Returns

[`WithAlterations`](../../ElementModifier/README.md#withalterationstalterationst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `AlterationsT`\>

#### Inherited from

`Identity.alter`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L74)

***

### enable()

> **enable**\<`FlagsT`\>(`flags`): [`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

Modify elements using [ElementModifier.enable](../../../classes/ElementModifier.md#enable).

#### Type parameters

| Type parameter |
| :------ |
| `FlagsT` *extends* [`ElementFlags`](../../ElementModifier/README.md#elementflagsclustert)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flags` | `FlagsT` |

#### Returns

[`WithFlags`](../../ElementModifier/README.md#withflagstflagst)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `FlagsT`\>

#### Inherited from

`Identity.enable`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L88)

***

### set()

> **set**\<`ValuesT`\>(`values`): [`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

Modify elements using [ElementModifier.set](../../../classes/ElementModifier.md#set).

#### Type parameters

| Type parameter |
| :------ |
| `ValuesT` *extends* `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `values` | `ValuesT` |

#### Returns

[`WithValues`](../../ElementModifier/README.md#withvaluestvaluest)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>, `ValuesT`\>

#### Inherited from

`Identity.set`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L81)

***

### with()

> **with**\<`SelectionT`\>(...`selection`): [`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

Select features using [ClusterComposer.compose](../../../classes/ClusterComposer.md#compose).

#### Type parameters

| Type parameter |
| :------ |
| `SelectionT` *extends* [`FeatureSelection`](../../ClusterComposer/README.md#featureselectiont)\<[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>\> |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`selection` | `SelectionT` |

#### Returns

[`Of`](../../ClusterType/interfaces/Of.md)\<`object`\>

##### attributes

> `readonly` **attributes**: [`Merge`](../../../../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../../README.md#globalattributesf)\<`object`\>\> = `Cluster.attributes`

###### Type declaration

###### adminFabricIndex

> `readonly` **adminFabricIndex**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex), `any`\>

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be
used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.

If, during an open commissioning window, the fabric for the Administrator that opened the window is
removed, then this attribute shall be set to null.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

###### See

MatterSpecification.v11.Core § 11.18.7.2

###### adminVendorId

> `readonly` **adminVendorId**: [`Attribute`](../../../interfaces/Attribute.md)\<`null` \| [`VendorId`](../../../../../datatype/export/README.md#vendorid), `any`\>

When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID
associated with the Fabric scoping of the Administrator that opened the window. This field shall match
the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened
the window, at the time of window opening. If the fabric for the Administrator that opened the window is
removed from the node while the commissioning window is still open, this attribute shall NOT be updated.

When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.

###### See

MatterSpecification.v11.Core § 11.18.7.3

###### windowStatus

> `readonly` **windowStatus**: [`Attribute`](../../../interfaces/Attribute.md)\<[`CommissioningWindowStatus`](../enumerations/CommissioningWindowStatus.md), `any`\>

This attribute shall indicate whether a new Commissioning window has been opened by an Administrator,
using either the OCW command or the OBCW command.

This attribute shall revert to WindowNotOpen upon expiry of a commissioning window.

Note that an initial commissioning window is not opened using either the OCW command or the OBCW
command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.

###### See

MatterSpecification.v11.Core § 11.18.7.1

##### commands

> `readonly` **commands**: `object`

##### commands.openBasicCommissioningWindow

> `readonly` **openBasicCommissioningWindow**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\> & `object`

###### Type declaration

###### isConditional

> `readonly` **isConditional**: `true` = `true`

###### mandatoryIf

> `readonly` **mandatoryIf**: [] \| [`object`]

###### optional

> `readonly` **optional**: `true` = `true`

###### optionalIf

> `readonly` **optionalIf**: [] \| [`ConditionalFeatureList`](../../../README.md#conditionalfeaturelistf)\<[`BitSchema`](../../../../../schema/export/README.md#bitschema)\>

##### commands.openCommissioningWindow

> `readonly` **openCommissioningWindow**: [`Command`](../../../interfaces/Command.md)\<[`TypeFromFields`](../../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

This command is used by a current Administrator to instruct a Node to go into commissioning mode. The
Enhanced Commissioning Method specifies a window of time during which an already commissioned Node
accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW.

When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE
passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as
described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric
completes when the Node successfully receives a CommissioningComplete command, see Section 5.5,
“Commissioning Flows”.

The parameters for OpenCommissioningWindow command are as follows:

A current Administrator may invoke this command to put a node in commissioning mode for the next
Administrator. On completion, the command shall return a cluster specific status code from the
enumeration below reflecting success or reasons for failure of the operation. The new Administrator
shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.

If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments
arise, this command shall fail with a cluster specific status code of PAKEParameterError.

If a commissioning window is already currently open, this command shall fail with a cluster specific
status code of Busy.

If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code
of Busy, since it is likely that concurrent commissioning operations from multiple separate
Commissioners are about to take place.

In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.

###### See

MatterSpecification.v11.Core § 11.18.8.1

##### commands.revokeCommissioning

> `readonly` **revokeCommissioning**: [`Command`](../../../interfaces/Command.md)\<`void`, `void`, `any`\>

This command is used by a current Administrator to instruct a Node to revoke any active Open
Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the
Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing
the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window
command, see Section 4.3.1, “Commissionable Node Discovery”.

If no commissioning window was open at time of receipt, this command shall fail with a cluster specific
status code of WindowNotOpen.

###### See

MatterSpecification.v11.Core § 11.18.8.3

##### features

> `readonly` **features**: `object` = `Cluster.features`

##### features.basic

> `readonly` **basic**: [`BitFlag`](../../../../../schema/export/README.md#bitflag)

Basic

Node supports Basic Commissioning Method.

##### id

> `readonly` **id**: [`Branded`](../../../../../util/export/README.md#brandedtb)\<`60`, `"ClusterId"`\> = `Cluster.id`

##### name

> `readonly` **name**: `"AdministratorCommissioning"` = `Cluster.name`

##### revision

> `readonly` **revision**: `1` = `Cluster.revision`

#### Inherited from

`Identity.with`

#### Source

[packages/matter.js/src/cluster/mutation/MutableCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/mutation/MutableCluster.ts#L67)
