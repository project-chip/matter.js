[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/definitions/account-login/export

# Module: behavior/definitions/account-login/export

## Table of contents

### Modules

- [\<internal\>](behavior_definitions_account_login_export._internal_.md)

### Namespaces

- [AccountLoginBehavior](behavior_definitions_account_login_export.AccountLoginBehavior.md)
- [AccountLoginInterface](behavior_definitions_account_login_export.AccountLoginInterface.md)

### Classes

- [AccountLoginServer](../classes/behavior_definitions_account_login_export.AccountLoginServer.md)

### Interfaces

- [AccountLoginBehavior](../interfaces/behavior_definitions_account_login_export.AccountLoginBehavior-1.md)

### Type Aliases

- [AccountLoginInterface](behavior_definitions_account_login_export.md#accountlogininterface)
- [GetSetupPinRequest](behavior_definitions_account_login_export.md#getsetuppinrequest)
- [GetSetupPinResponse](behavior_definitions_account_login_export.md#getsetuppinresponse)
- [LoginRequest](behavior_definitions_account_login_export.md#loginrequest)

### Variables

- [AccountLoginBehavior](behavior_definitions_account_login_export.md#accountloginbehavior)

## Type Aliases

### AccountLoginInterface

Ƭ **AccountLoginInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `components` | [\{ `flags`: {} ; `methods`: [`Base`](../interfaces/behavior_definitions_account_login_export.AccountLoginInterface.Base.md)  }] |

#### Defined in

[packages/matter.js/src/behavior/definitions/account-login/AccountLoginInterface.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/account-login/AccountLoginInterface.ts#L107)

[packages/matter.js/src/behavior/definitions/account-login/AccountLoginInterface.ts:207](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/account-login/AccountLoginInterface.ts#L207)

___

### GetSetupPinRequest

Ƭ **GetSetupPinRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGetSetupPinRequest`](cluster_export.AccountLogin.md#tlvgetsetuppinrequest)\>

The purpose of this command is to determine if the active user account of the given Content App matches the active
user account of a given Commissionee, and when it does, return a Setup PIN code which can be used for
password-authenticated session establishment (PASE) with the Commissionee.

For example, a Video Player with a Content App Platform may invoke this command on one of its Content App endpoints
to facilitate commissioning of a Phone App made by the same vendor as the Content App. If the accounts match, then
the Content App may return a setup code that can be used by the Video Player to commission the Phone App without
requiring the user to physically input a setup code.

The account match is determined by the Content App using a method which is outside the scope of this specification
and will typically involve a central service which is in communication with both the Content App and the
Commissionee. The GetSetupPIN command is needed in order to provide the Commissioner/Admin with a Setup PIN when
this Commissioner/Admin is operated by a different vendor from the Content App.

This method is used to facilitate Setup PIN exchange (for PASE) between Commissioner and Commissionee when the same
user account is active on both nodes. With this method, the Content App satisfies proof of possession related to
commissioning by requiring the same user account to be active on both Commissionee and Content App, while the
Commissioner/Admin ensures user consent by prompting the user prior to invocation of the command.

Upon receipt of this command, the Content App checks if the account associated with the Temporary Account Identifier
sent by the client is the same account that is active on itself. If the accounts are the same, then the Content App
returns the GetSetupPIN Response which includes a Setup PIN that may be used for PASE with the Commissionee.

The Temporary Account Identifier for a Commissionee may be populated with the Rotating ID field of the client’s
commissionable node advertisement (see Rotating Device Identifier section in [MatterCore] ) encoded as an octet
string where the octets of the Rotating Device Identifier are encoded as 2-character sequences by representing each
octet’s value as a 2-digit hexadecimal number, using uppercase letters.

The Setup PIN is an 11 character string so that it can accommodate different future formats, including alpha-numeric
encodings. For a Commissionee it shall be populated with the Manual Pairing

Code (see Manual Pairing Code section in [MatterCore] ) encoded as a string.

The Server shall implement rate limiting to prevent brute force attacks. No more than 10 unique requests in a 10
minute period shall be allowed; a command response status of FAILURE should sent for additional commands received
within the 10 minute period. Because access to this command is limited to nodes with Admin-level access, and the
user is prompted for consent prior to Commissioning, there are in place multiple obstacles to successfully mounting
a brute force attack. A Content App that supports this command shall ensure that the Temporary Account Identifier
used by its clients is not valid for more than 10 minutes.

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.1

#### Defined in

[packages/matter.js/src/behavior/definitions/account-login/AccountLoginInterface.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/account-login/AccountLoginInterface.ts#L56)

___

### GetSetupPinResponse

Ƭ **GetSetupPinResponse**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvGetSetupPinResponse`](cluster_export.AccountLogin.md#tlvgetsetuppinresponse)\>

This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
account identified in the request does not match the active account of the running Content App.

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.2

#### Defined in

[packages/matter.js/src/behavior/definitions/account-login/AccountLoginInterface.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/account-login/AccountLoginInterface.ts#L64)

___

### LoginRequest

Ƭ **LoginRequest**: [`TypeFromSchema`](tlv_export.md#typefromschema)\<typeof [`TlvLoginRequest`](cluster_export.AccountLogin.md#tlvloginrequest)\>

The purpose of this command is to allow the Content App to assume the user account of a given Commissionee by
leveraging the Setup PIN code input by the user during the commissioning process.

For example, a Video Player with a Content App Platform may invoke this command on one of its Content App endpoints
after the commissioning has completed of a Phone App made by the same vendor as the Content App. The Content App may
determine whether the Temporary Account Identifier maps to an account with a corresponding Setup PIN and, if so, it
may automatically login to the account for the corresponding user. The end result is that a user performs
commissioning of a Phone App to a Video Player by inputting the Setup PIN for the Phone App into the Video Player
UX. Once commissioning has completed, the Video Player invokes this command to allow the corresponding Content App
to assume the same user account as the Phone App.

The verification of Setup PIN for the given Temporary Account Identifier is determined by the Content App using a
method which is outside the scope of this specification and will typically involve a central service which is in
communication with both the Content App and the Commissionee. Implementations of such a service should impose
aggressive time outs for any mapping of Temporary Account Identifier to Setup PIN in order to prevent accidental
login due to delayed invocation.

Upon receipt, the Content App checks if the account associated with the client’s Temp Account Identifier has a
current active Setup PIN with the given value. If the Setup PIN is valid for the user account associated with the
Temp Account Identifier, then the Content App may make that user account active.

The Temporary Account Identifier for a Commissionee may be populated with the Rotating ID field of the client’s
commissionable node advertisement encoded as an octet string where the octets of the Rotating Device Identifier are
encoded as 2-character sequences by representing each octet’s value as a 2-digit hexadecimal number, using uppercase
letters.

The Setup PIN for a Commissionee may be populated with the Manual Pairing Code encoded as a string of decimal
numbers.

The Server shall implement rate limiting to prevent brute force attacks. No more than 10 unique requests in a 10
minute period shall be allowed; a command response status of FAILURE should sent for additional commands received
within the 10 minute period. Because access to this command is limited to nodes with Admin-level access, and the
user is involved when obtaining the SetupPIN, there are in place multiple obstacles to successfully mounting a brute
force attack. A Content App that supports this command shall ensure that the Temporary Account Identifier used by
its clients is not valid for more than 10 minutes.

**`See`**

MatterSpecification.v11.Cluster § 6.2.4.3

#### Defined in

[packages/matter.js/src/behavior/definitions/account-login/AccountLoginInterface.ts:105](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/account-login/AccountLoginInterface.ts#L105)

## Variables

### AccountLoginBehavior

• `Const` **AccountLoginBehavior**: [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Cluster`](../interfaces/cluster_export.AccountLogin.Cluster.md), [`Type`](../interfaces/behavior_cluster_export.ClusterBehavior.Type.md)\<[`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>, typeof [`ClusterBehavior`](behavior_cluster_export.ClusterBehavior.md), [`AccountLoginInterface`](behavior_definitions_account_login_export.md#accountlogininterface)\>, [`AccountLoginInterface`](behavior_definitions_account_login_export.md#accountlogininterface)\>

AccountLoginBehavior is the base class for objects that support interaction with [AccountLogin.Cluster](cluster_export.AccountLogin.md#cluster).

#### Defined in

[packages/matter.js/src/behavior/definitions/account-login/AccountLoginBehavior.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/account-login/AccountLoginBehavior.ts#L16)

[packages/matter.js/src/behavior/definitions/account-login/AccountLoginBehavior.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/account-login/AccountLoginBehavior.ts#L21)

[packages/matter.js/src/behavior/definitions/account-login/AccountLoginBehavior.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/definitions/account-login/AccountLoginBehavior.ts#L23)
