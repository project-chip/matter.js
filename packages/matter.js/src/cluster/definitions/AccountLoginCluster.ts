/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Command, AccessLevel, TlvNoResponse } from "../../cluster/Cluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace AccountLogin {
    /**
     * Input to the AccountLogin getSetupPin command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.1
     */
    export const TlvGetSetupPinRequest = TlvObject({
        /**
         * This attribute shall specify the client’s Temporary Account Identifier. The length of this field shall be at
         * least 16 characters to protect the account holder against password guessing attacks.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.1.1
         */
        tempAccountIdentifier: TlvField(0, TlvString.bound({ maxLength: 100 }))
    });

    /**
     * This message is sent in response to the GetSetupPIN command, and contains the Setup PIN code, or null when the
     * account identified in the request does not match the active account of the running Content App.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.2
     */
    export const TlvGetSetupPinResponse = TlvObject({
        /**
         * This field shall provide the setup PIN code as a text string at least 11 characters in length or null to
         * indicate that the accounts do not match.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.2.1
         */
        setupPin: TlvField(0, TlvNullable(TlvString.bound({ minLength: 11 })))
    });

    /**
     * Input to the AccountLogin login command
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3
     */
    export const TlvLoginRequest = TlvObject({
        /**
         * This field shall specify the client’s temporary account identifier.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3.1
         */
        tempAccountIdentifier: TlvField(0, TlvString.bound({ maxLength: 100 })),

        /**
         * This field shall provide the setup PIN code as a text string at least 11 characters in length.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3.2
         */
        setupPin: TlvField(1, TlvString.bound({ minLength: 11 }))
    });

    /**
     * Account Login
     *
     * This cluster provides commands that facilitate user account login on a Content App or a node. For example, a
     * Content App running on a Video Player device, which is represented as an endpoint (see Device Type Library
     * document), can use this cluster to help make the user account on the Content App match the user account on the
     * Client.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2
     */
    export const Cluster = CreateCluster({
        id: 0x50e,
        name: "AccountLogin",
        revision: 1,

        commands: {
            /**
             * The purpose of this command is to determine if the active user account of the given Content App matches
             * the active user account of a given Commissionee, and when it does, return a Setup PIN code which can be
             * used for password-authenticated session establishment (PASE) with the Commissionee.
             *
             * For example, a Video Player with a Content App Platform may invoke this command on one of its Content
             * App endpoints to facilitate commissioning of a Phone App made by the same vendor as the Content App. If
             * the accounts match, then the Content App may return a setup code that can be used by the Video Player to
             * commission the Phone App without requiring the user to physically input a setup code.
             *
             * The account match is determined by the Content App using a method which is outside the scope of this
             * specification and will typically involve a central service which is in communication with both the
             * Content App and the Commissionee. The GetSetupPIN command is needed in order to provide the
             * Commissioner/Admin with a Setup PIN when this Commissioner/Admin is operated by a different vendor from
             * the Content App.
             *
             * This method is used to facilitate Setup PIN exchange (for PASE) between Commissioner and Commissionee
             * when the same user account is active on both nodes. With this method, the Content App satisfies proof of
             * possession related to commissioning by requiring the same user account to be active on both Commissionee
             * and Content App, while the Commissioner/Admin ensures user consent by prompting the user prior to
             * invocation of the command.
             *
             * Upon receipt of this command, the Content App checks if the account associated with the Temporary
             * Account Identifier sent by the client is the same account that is active on itself. If the accounts are
             * the same, then the Content App returns the GetSetupPIN Response which includes a Setup PIN that may be
             * used for PASE with the Commissionee.
             *
             * The Temporary Account Identifier for a Commissionee may be populated with the Rotating ID field of the
             * client’s commissionable node advertisement (see Rotating Device Identifier section in [MatterCore] )
             * encoded as an octet string where the octets of the Rotating Device Identifier are encoded as 2-character
             * sequences by representing each octet’s value as a 2-digit hexadecimal number, using uppercase letters.
             *
             * The Setup PIN is an 11 character string so that it can accommodate different future formats, including
             * alpha-numeric encodings. For a Commissionee it shall be populated with the Manual Pairing
             *
             * Code (see Manual Pairing Code section in [MatterCore] ) encoded as a string.
             *
             * The Server shall implement rate limiting to prevent brute force attacks. No more than 10 unique requests
             * in a 10 minute period shall be allowed; a command response status of FAILURE should sent for additional
             * commands received within the 10 minute period. Because access to this command is limited to nodes with
             * Admin-level access, and the user is prompted for consent prior to Commissioning, there are in place
             * multiple obstacles to successfully mounting a brute force attack. A Content App that supports this
             * command shall ensure that the Temporary Account Identifier used by its clients is not valid for more
             * than 10 minutes.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.1
             */
            getSetupPin: Command(
                0x0,
                TlvGetSetupPinRequest,
                0x1,
                TlvGetSetupPinResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

            /**
             * The purpose of this command is to allow the Content App to assume the user account of a given
             * Commissionee by leveraging the Setup PIN code input by the user during the commissioning process.
             *
             * For example, a Video Player with a Content App Platform may invoke this command on one of its Content
             * App endpoints after the commissioning has completed of a Phone App made by the same vendor as the
             * Content App. The Content App may determine whether the Temporary Account Identifier maps to an account
             * with a corresponding Setup PIN and, if so, it may automatically login to the account for the
             * corresponding user. The end result is that a user performs commissioning of a Phone App to a Video
             * Player by inputting the Setup PIN for the Phone App into the Video Player UX. Once commissioning has
             * completed, the Video Player invokes this command to allow the corresponding Content App to assume the
             * same user account as the Phone App.
             *
             * The verification of Setup PIN for the given Temporary Account Identifier is determined by the Content
             * App using a method which is outside the scope of this specification and will typically involve a central
             * service which is in communication with both the Content App and the Commissionee. Implementations of
             * such a service should impose aggressive time outs for any mapping of Temporary Account Identifier to
             * Setup PIN in order to prevent accidental login due to delayed invocation.
             *
             * Upon receipt, the Content App checks if the account associated with the client’s Temp Account Identifier
             * has a current active Setup PIN with the given value. If the Setup PIN is valid for the user account
             * associated with the Temp Account Identifier, then the Content App may make that user account active.
             *
             * The Temporary Account Identifier for a Commissionee may be populated with the Rotating ID field of the
             * client’s commissionable node advertisement encoded as an octet string where the octets of the Rotating
             * Device Identifier are encoded as 2-character sequences by representing each octet’s value as a 2-digit
             * hexadecimal number, using uppercase letters.
             *
             * The Setup PIN for a Commissionee may be populated with the Manual Pairing Code encoded as a string of
             * decimal numbers.
             *
             * The Server shall implement rate limiting to prevent brute force attacks. No more than 10 unique requests
             * in a 10 minute period shall be allowed; a command response status of FAILURE should sent for additional
             * commands received within the 10 minute period. Because access to this command is limited to nodes with
             * Admin-level access, and the user is involved when obtaining the SetupPIN, there are in place multiple
             * obstacles to successfully mounting a brute force attack. A Content App that supports this command shall
             * ensure that the Temporary Account Identifier used by its clients is not valid for more than 10 minutes.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.3
             */
            login: Command(
                0x2,
                TlvLoginRequest,
                0x2,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

            /**
             * The purpose of this command is to instruct the Content App to clear the current user account. This
             * command SHOULD be used by clients of a Content App to indicate the end of a user session.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.2.4.4
             */
            logout: Command(0x3, TlvNoArguments, 0x3, TlvNoResponse, { timed: true })
        }
    });
}

export type AccountLoginCluster = typeof AccountLogin.Cluster;
export const AccountLoginCluster = AccountLogin.Cluster;
