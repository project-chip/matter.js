/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "#behavior/Behavior.js";
import type { ActionContext } from "#behavior/context/ActionContext.js";
import { DclBehavior } from "#behavior/system/dcl/DclBehavior.js";
import { NetworkClient } from "#behavior/system/network/NetworkClient.js";
import { OtaAnnouncements } from "#behavior/system/software-update/OtaAnnouncements.js";
import { OTA_PROGRESS_TIMEOUT } from "#behavior/system/software-update/OtaProgress.js";
import { BasicInformationClient } from "#behaviors/basic-information";
import { Endpoint } from "#endpoint/Endpoint.js";
import type { ClientNode } from "#node/ClientNode.js";
import { Node } from "#node/Node.js";
import type { ServerNode } from "#node/ServerNode.js";
import {
    Abort,
    Bytes,
    causedBy,
    ClosedError,
    Diagnostic,
    Duration,
    EventEmitter,
    Hours,
    ImplementationError,
    InternalError,
    Logger,
    MatterError,
    Millis,
    Minutes,
    Observable,
    ObserverGroup,
    Seconds,
    Time,
    TimeoutError,
    Timer,
    Timestamp,
} from "@matter/general";
import type { Session } from "@matter/protocol";
import {
    BdxProtocol,
    ClientSubscriptions,
    DclOtaUpdateService,
    FabricAuthority,
    FileDesignator,
    hasRemoteActor,
    OtaUpdateError,
    OtaUpdateSource,
    PeerAddress,
    PeerAddressMap,
    RebootResubscribeArmer,
    SessionManager,
    StorageScope,
} from "@matter/protocol";
import { VendorId } from "@matter/types";
import { OtaSoftwareUpdateProvider } from "@matter/types/clusters/ota-software-update-provider";
import { OtaSoftwareUpdateRequestor } from "@matter/types/clusters/ota-software-update-requestor";

const logger = Logger.get("SoftwareUpdateManager");

/** Rejects transfer options a BDX session could not honour, before any state changes on their behalf. */
function assertTransferOptions({ maxBdxBlockSize, bdxAdditionalMrpDelay }: SoftwareUpdateManager.UpdateTarget) {
    if (maxBdxBlockSize !== undefined && (!Number.isInteger(maxBdxBlockSize) || maxBdxBlockSize <= 0)) {
        throw new ImplementationError(`maxBdxBlockSize must be a positive integer, got ${maxBdxBlockSize}`);
    }
    if (bdxAdditionalMrpDelay !== undefined && (!Number.isFinite(bdxAdditionalMrpDelay) || bdxAdditionalMrpDelay < 0)) {
        throw new ImplementationError(
            `bdxAdditionalMrpDelay must be a finite, non-negative duration, got ${bdxAdditionalMrpDelay}`,
        );
    }
}

interface UpdateConsent extends SoftwareUpdateManager.UpdateTarget {
    peerAddress: PeerAddress;
}

/**
 * Where a queued update stands.
 *
 * | `state`      | Meaning                                                     | Leaves the state when                       |
 * |--------------|-------------------------------------------------------------|---------------------------------------------|
 * | `queued`     | Waits for an announcement; `resetAt` when it was reset      | an announcement starts                      |
 * | `announcing` | The announcement runs                                       | it ends or is aborted, or a status arrives  |
 * | `announced`  | The node was announced and reported no status since `since` | the node reports a status                   |
 * | `progress`   | The node reported `status` at `since`                       | the update is done, cancelled or fails      |
 * | `failed`     | The update failed; it is not announced again                | the node reports a status                   |
 * |              |                                                             | (a new consent removes the entry)           |
 *
 * An announcement aborts after {@link OTA_PROGRESS_TIMEOUT}.  `announced` and `progress` return to `queued` when the node
 * shows no activity for that long, plus the `applyDelay` of `progress`.  An entry with `failedAt` returns to `failed`
 * instead, so after a failure only the node itself retries the update.  A removed entry leaves the queue in any state.
 */
type UpdatePhase =
    | { state: "queued"; resetAt?: Timestamp }
    | { state: "announcing" }
    | { state: "announced"; since: Timestamp }
    | {
          state: "progress";
          status: OtaUpdateStatus;
          since: Timestamp;
          /** With `Applying`, the delay the device waits out before it applies; progress is not expected meanwhile. */
          applyDelay?: Duration;
          bdxTransferredBytes?: number;
      }
    | { state: "failed" };

/**
 * How long after its first failure an update keeps its queue entry and consent.  Meanwhile, the node may query and
 * apply the update on its own, as devices that need several attempts do, but it is not announced to the node again.
 */
const FAILED_UPDATE_RETENTION = Hours(24);

/**
 * The node was announced for the update or reported a status for it.  An `announcing` entry is not underway yet, so
 * its target may still be replaced.
 */
function isUnderway({ state }: UpdatePhase) {
    return state === "announced" || state === "progress";
}

interface UpdateQueueEntry extends UpdateConsent {
    endpoint: Endpoint;
    phase: UpdatePhase;

    /** Aborts the announcement still running for this entry, also after a status moved the entry past `announcing`. */
    announcement?: Abort;

    /** When the update first failed; a new consent clears it. */
    failedAt?: Timestamp;
}

interface CollectedNodesUpdateInfo {
    vendorId: VendorId;
    productId: number;
    softwareVersion: number;
    softwareVersionString: string;
    otaEndpoints: Set<{ endpoint: Endpoint; peerAddress: PeerAddress }>;
}

export interface OtaUpdateAvailableDetails {
    newSoftwareVersion: number;
    newSoftwareVersionString: string;
    fileDesignator: FileDesignator;
    httpsUri?: string;
    consentRequired: boolean;
    metadataForRequestor?: Bytes; // If provided will be passed back with the QueryImage command
}

export enum OtaUpdateStatus {
    Unknown,
    WaitForConsent,
    Querying,
    Downloading,
    WaitForApply,
    Applying,
    Done,
    Cancelled,
}

export interface SoftwareUpdateInfo {
    /** VendorId of the updated device */
    vendorId: VendorId;

    /** ProductId of the updated device */
    productId: number;

    /** Software version of the updated device */
    softwareVersion: number;

    /** Software Version String of the updated device */
    softwareVersionString: string;

    /** ReleaseNotesUrl for the update */
    releaseNotesUrl?: string;

    /** SpecificationVersion of the updated device */
    specificationVersion?: number;

    /** Source of the update returned, whether it is a local file, downloaded from test or production DCL */
    source: OtaUpdateSource;
}

export interface PendingUpdateInfo {
    peerAddress: PeerAddress;
    vendorId: VendorId;
    productId: number;
    targetSoftwareVersion: number;

    /**
     * - `"queued"` — waiting for an announcement: not announced yet, or reset for a retry, as after a failed
     *   announcement, a stall, a cancelled transfer or a version change below the target.
     * - `"in-progress"` — the OTA provider is being announced or has been announced to the node, and we are waiting for
     *   the update to complete.
     * - `"stalled"` — no status update and no BDX transfer activity within {@link OTA_PROGRESS_TIMEOUT}. The entry
     *   is reset and announced again, unless the update failed before; then it is no longer listed.
     */
    status: "queued" | "in-progress" | "stalled";
    lastProgressStatus?: OtaUpdateStatus;
    lastProgressUpdateTime?: Timestamp;

    /** Bytes transferred by the BDX session of an in-progress update, undefined for any other status. */
    bdxTransferredBytes?: number;

    /** Size of the transfer of an in-progress update, undefined for any other status or while it is unknown. */
    bdxDataLength?: number;
}

/**
 * The Software Update Manager is the instance to bridge between the central OTA store and DCL service and manage the
 * updates for all peers of a node. It gets installed on the endpoint where the OtaSoftwareUpdateProvider behavior is
 * installed. It uses the generic DclOtaUpdateService, which exists globally, to request and get new updates.
 *
 * The following state allows configuring the behavior:
 * * {@link allowTestOtaImages}: When set to true, we also query the Test DCL additionally to the production DCL for update
 *     and use this when a newer version is found. Default is false. Stored test-net and local images are only offered
 *     while it is true; production images are offered either way
 *
 * * {@link updateCheckInterval}: By default, we check the DCL for updates every 24h. This state value allows adjusting this.
 *
 * * {@link announceAsDefaultProvider}: By default, we announce ourselves as a default update provider to all nodes in the fabric.
 *     Set to "false" if this is not wanted and updates are only pushed on availability
 *
 * * {@link delegateConsentToRequestor}: Set to true to let a node that can obtain user consent itself update to the
 *     newest stored image without a consent given to this manager. Default is false.
 */
export class SoftwareUpdateManager extends Behavior {
    static override readonly id = "softwareupdates";

    declare readonly state: SoftwareUpdateManager.State;
    declare internal: SoftwareUpdateManager.Internal;
    declare readonly events: SoftwareUpdateManager.Events;

    override async initialize() {
        const rootNode = Node.forEndpoint(this.endpoint) as ServerNode;
        rootNode.behaviors.require(DclBehavior);
        this.internal.otaService = rootNode.agentFor(this.context).get(DclBehavior).otaUpdateService;
        await this.internal.otaService.construction;
        this.internal.otaStorageScope = this.internal.otaService.storage.scope;

        this.reactTo(rootNode.lifecycle.online, this.#nodeOnline);
        this.reactTo(rootNode.lifecycle.goingOffline, this.#nodeGoingOffline);
        if (rootNode.lifecycle.isOnline) {
            await this.#nodeOnline();
        }

        this.reactTo(this.events.announceAsDefaultProvider$Changed, this.#updateAnnouncementSettings);
        this.reactTo(this.events.announcementInterval$Changed, this.#updateAnnouncementSettings);
    }

    async #nodeOnline() {
        this.internal.suppressUpdates = false;
        if (this.internal.announcements !== undefined) {
            await this.internal.announcements.close();
            this.internal.announcements = undefined;
        }

        // For now let's just provide update functionality when we are the fabric owner
        // In theory we could also claim that for any other fabric but could conflict with the main controller of
        // the fabric that then also claims being "the one provider".
        const fabricAuthority = await this.env.load(FabricAuthority);
        const ownFabric = fabricAuthority.fabrics[0];
        if (!ownFabric) {
            // Can only happen if the SoftwareUpdateManager is used without any commissioned nodes
            logger.info(`No commissioned peers yet, cannot check for OTA updates. Wait for Fabric being added.`);
            this.reactTo(fabricAuthority.fabricAdded, this.#nodeOnline, { once: true });
            return;
        }
        this.internal.announcements = new OtaAnnouncements(this.endpoint, ownFabric);
        this.#updateAnnouncementSettings();

        // Randomly force the first update check 5-10 minutes after startup
        const delay = Millis(Seconds(Math.floor(Math.random() * 300)) + Minutes(5));
        logger.info(`Scheduling first OTA update check in ${Duration.format(delay)}`);
        this.internal.checkForUpdateTimer?.stop();
        this.internal.checkForUpdateTimer = this.reactorTimer(
            "initializeUpdateCheck",
            delay,
            this.#initializeUpdateCheck,
        ).start();
    }

    async #nodeGoingOffline() {
        this.internal.suppressUpdates = true;
        this.internal.checkForUpdateTimer?.stop();

        // Announcements run on their own timers and write to peers, so the suppression flag alone does not stop them.
        // #nodeOnline installs a fresh instance.
        await this.#stopAnnouncements();
        await this.internal.announcements?.close();
        this.internal.announcements = undefined;

        // Bound to the ClientSubscriptions the stopping runtime closes; the getter creates a new armer for the next run
        this.internal.rebootResubscribeArmer?.[Symbol.dispose]();
        this.internal.rebootResubscribeArmer = undefined;
    }

    #updateAnnouncementSettings() {
        if (this.internal.announcements === undefined) {
            return;
        }
        if (this.state.announceAsDefaultProvider) {
            this.internal.announcements.interval = this.state.announcementInterval;
        } else {
            this.internal.announcements.interval = undefined;
        }
    }

    /**
     * Trigger the first check for updates some time after the node went online, and register a periodic interval
     * afterward.
     */
    async #initializeUpdateCheck() {
        try {
            await this.checkForUpdates();
        } catch (error) {
            logger.notice(`Error during initial OTA update check:`, error);
        }

        this.internal.checkForUpdateTimer.stop();
        this.internal.checkForUpdateTimer = this.periodicReactorTimer(
            "checkAvailableUpdates",
            this.state.updateCheckInterval,
            this.checkForUpdates,
        ).start();
    }

    get storage() {
        return this.internal.otaService.storage;
    }

    get #rebootResubscribeArmer() {
        if (this.internal.rebootResubscribeArmer === undefined) {
            this.internal.rebootResubscribeArmer = new RebootResubscribeArmer(
                this.env.get(SessionManager),
                this.env.get(ClientSubscriptions),
            );
        }
        return this.internal.rebootResubscribeArmer;
    }

    /**
     * Returns a snapshot of the current update queue for introspection.  A failed update is not listed; the
     * `updateFailed` event reported it.
     */
    get queuedUpdates(): PendingUpdateInfo[] {
        const now = Time.nowMs;
        return this.internal.updateQueue.flatMap(entry => {
            const { phase } = entry;
            if (phase.state === "failed") {
                return [];
            }
            const bdxSession = this.#bdxSessionFor(entry.peerAddress);
            let status: PendingUpdateInfo["status"];
            if (phase.state === "queued") {
                status = "queued";
            } else if (this.#isStalled(entry, now) && !this.#isTransferring(entry, bdxSession?.transferredBytes)) {
                status = "stalled";
            } else {
                status = "in-progress";
            }
            let lastProgressStatus: OtaUpdateStatus | undefined;
            if (phase.state === "progress") {
                lastProgressStatus = phase.status;
            } else if (phase.state === "queued" && phase.resetAt !== undefined) {
                lastProgressStatus = OtaUpdateStatus.Unknown;
            }
            return {
                peerAddress: entry.peerAddress,
                vendorId: entry.vendorId,
                productId: entry.productId,
                targetSoftwareVersion: entry.targetSoftwareVersion,
                status,
                lastProgressStatus,
                lastProgressUpdateTime: "since" in phase ? phase.since : undefined,
                bdxTransferredBytes: status === "in-progress" ? bdxSession?.transferredBytes : undefined,
                bdxDataLength: status === "in-progress" ? bdxSession?.dataLength : undefined,
            };
        });
    }

    #bdxSessionFor(peerAddress: PeerAddress) {
        const { otaStorageScope } = this.internal;
        if (otaStorageScope === undefined || !this.env.has(BdxProtocol)) {
            return undefined;
        }
        return this.env.get(BdxProtocol).sessionFor(peerAddress, otaStorageScope);
    }

    /**
     * A retry of a failed download opens a fresh BDX session whose counter restarts below the one we recorded, so any
     * change of the counter counts as liveness, not only growth.
     */
    #isTransferring({ phase }: UpdateQueueEntry, transferredBytes?: number) {
        const recordedBytes = phase.state === "progress" ? phase.bdxTransferredBytes : undefined;
        return transferredBytes !== undefined && transferredBytes !== (recordedBytes ?? 0);
    }

    /**
     * A download produces no OTA status transitions for as long as it runs, so a large image on a slow link looks
     * stalled to a timestamp that only status changes refresh.
     */
    #refreshBdxProgress(entry: UpdateQueueEntry, now: Timestamp) {
        const { phase } = entry;
        const transferredBytes = this.#bdxSessionFor(entry.peerAddress)?.transferredBytes;
        if (phase.state !== "progress" || !this.#isTransferring(entry, transferredBytes)) {
            return false;
        }
        phase.bdxTransferredBytes = transferredBytes;
        phase.since = now;
        return true;
    }

    /** An announced or progressing update counts as stalled when the node shows no activity for its timeout. */
    #isStalled({ phase }: UpdateQueueEntry, now: Timestamp) {
        if (phase.state === "announced") {
            return phase.since + OTA_PROGRESS_TIMEOUT < now;
        }
        if (phase.state === "progress") {
            return phase.since + (phase.applyDelay ?? 0) + OTA_PROGRESS_TIMEOUT < now;
        }
        return false;
    }

    #resetEntryProgress(entry: UpdateQueueEntry) {
        this.#abortAnnouncement(entry);
        entry.phase = entry.failedAt === undefined ? { state: "queued", resetAt: Time.nowMs } : { state: "failed" };
    }

    #retryUpdate(entry: UpdateQueueEntry) {
        this.#resetEntryProgress(entry);
        this.#triggerQueuedUpdate();
    }

    /** Ends a running announcement early; its result is ignored anyway, see {@link #runAnnouncement}. */
    #abortAnnouncement(entry: UpdateQueueEntry) {
        entry.announcement?.abort();
    }

    #entryIndexFor(peerAddress: PeerAddress) {
        return this.internal.updateQueue.findIndex(entry => PeerAddress.is(entry.peerAddress, peerAddress));
    }

    /** The peer's cached Basic Information when it matches the details the peer sent, else `undefined`. */
    #matchingBasicInformation(
        peerAddress: PeerAddress,
        details: { softwareVersion: number; vendorId: VendorId; productId: number },
    ) {
        const { softwareVersion, vendorId, productId } = details;

        const peers = (Node.forEndpoint(this.endpoint) as ServerNode).peers;
        const basicInfo = peers.get(peerAddress)?.maybeStateOf(BasicInformationClient);
        if (
            basicInfo?.softwareVersion === softwareVersion &&
            basicInfo?.vendorId === vendorId &&
            basicInfo?.productId === productId
        ) {
            return basicInfo;
        }
    }

    /**
     * Whether the peer may obtain the user consent for an update itself: only when its QueryImage says it can
     * (`RequestorCanConsent`), with {@link State.delegateConsentToRequestor} on, and never for a node with
     * `LocalConfigDisabled` set.
     *
     * @see {@link MatterSpecification.v161.Core} § 11.20.3.4.1
     */
    mayDelegateConsentTo(
        peerAddress: PeerAddress,
        { requestorCanConsent }: Pick<OtaSoftwareUpdateProvider.QueryImageRequest, "requestorCanConsent">,
    ) {
        if (requestorCanConsent !== true || !this.state.delegateConsentToRequestor) {
            return false;
        }
        const basicInfo = (Node.forEndpoint(this.endpoint) as ServerNode).peers
            .get(peerAddress)
            ?.maybeStateOf(BasicInformationClient);
        return basicInfo !== undefined && basicInfo.localConfigDisabled !== true;
    }

    /** Stored test-net and local images are offered, and the test DCL is asked, only with {@link State.allowTestOtaImages}. */
    get #includeTestImages() {
        return this.state.allowTestOtaImages;
    }

    /**
     * Used to determine if an update is existing in our storage for a peer with a certain software version.
     *
     * It uses the already checked details and does not check again on-demand, but validates the peer data.  A peer
     * is offered the version it has a consent for when that version is stored and allowed (a local or test-net image
     * only with {@link State.allowTestOtaImages}), also for 24 hours after that update failed.  Otherwise, a requestor that can
     * consent itself is offered the newest applicable version with `consentRequired` when
     * {@link mayDelegateConsentTo} allows it.  Any other requestor is offered nothing.
     */
    async updateExistsFor(
        peerAddress: PeerAddress,
        { softwareVersion, vendorId, productId, requestorCanConsent }: OtaSoftwareUpdateProvider.QueryImageRequest,
    ): Promise<OtaUpdateAvailableDetails | undefined> {
        this.#expireFailedUpdates();
        if (this.#matchingBasicInformation(peerAddress, { softwareVersion, vendorId, productId }) === undefined) {
            logger.info(
                `Peer details for node ${peerAddress.toString()} do not match values the update was requested for, ignoring`,
            );
            return undefined;
        }

        // We just use what we know from our last check here, so no on-demand DCL checks for now
        const candidates = await this.internal.otaService.findApplicable({
            vendorId,
            productId,
            currentSoftwareVersion: softwareVersion,
            includeTestImages: this.#includeTestImages,
        });

        const node = `node ${peerAddress.nodeId} in fabric ${peerAddress.fabricIndex} at software version ${softwareVersion}`;
        if (candidates.length === 0) {
            logger.debug(`No stored update applies to ${node}`);
            return undefined;
        }

        const consented = candidates.find(({ softwareVersion }) =>
            this.internal.consents.some(
                consent =>
                    PeerAddress.is(consent.peerAddress, peerAddress) &&
                    consent.vendorId === vendorId &&
                    consent.productId === productId &&
                    consent.targetSoftwareVersion === softwareVersion,
            ),
        );
        const delegate = this.mayDelegateConsentTo(peerAddress, { requestorCanConsent });
        const candidate = consented ?? (delegate ? candidates[0] : undefined);
        if (candidate === undefined) {
            logger.debug(`No stored update with a consent applies to ${node}`);
            return undefined;
        }

        const { softwareVersion: newSoftwareVersion, softwareVersionString, filename } = candidate;
        return {
            newSoftwareVersion,
            newSoftwareVersionString: softwareVersionString,
            fileDesignator: new FileDesignator(`ota/${filename}`),
            // We do not provide any httpsUri here, as we expect the node to download from our DCL proxy via BDX
            consentRequired: consented === undefined,
        };
    }

    /**
     * Check all commissioned peers for available updates and purge stored updates that are no longer needed.
     *
     * Runs automatically on a periodic timer but may also be invoked directly to force an immediate check.
     */
    async checkForUpdates() {
        await this.queryUpdates({ includeStoredUpdates: true });
        await this.#cleanupObsoleteUpdates();
    }

    /**
     * Clean up stored OTA files that no node in the system needs anymore.
     * A stored version is obsolete when ALL nodes with that vendor/product ID are already at or above that version,
     * or when its mode is no longer permitted by the current settings (e.g. test-mode files after
     * {@link allowTestOtaImages} is turned off). Only cleans "prod" and "test" mode files;
     * "local" files are user-managed.
     */
    async #cleanupObsoleteUpdates() {
        const rootNode = Node.forEndpoint(this.endpoint) as ServerNode;

        // Collect minimum software version per vendor/product across all nodes
        const nodeVersions = new Map<string, number>();
        for (const peer of rootNode.peers) {
            const basicInfo = peer.maybeStateOf(BasicInformationClient);
            if (basicInfo === undefined) {
                continue;
            }
            const { vendorId, productId, softwareVersion } = basicInfo;
            const key = `${vendorId}-${productId}`;
            const existing = nodeVersions.get(key);
            if (existing === undefined || softwareVersion < existing) {
                nodeVersions.set(key, softwareVersion);
            }
        }

        // Nothing can be cleaned up when there are no peers and test-mode files are still permitted —
        // skip the storage scan entirely.
        const purgeDisallowedTestFiles = !this.state.allowTestOtaImages;
        if (nodeVersions.size === 0 && !purgeDisallowedTestFiles) {
            return;
        }

        // Narrow the scan when only the test-purge path is active (no peers to evaluate obsolescence against).
        const storedUpdates = await this.internal.otaService.find(nodeVersions.size === 0 ? { mode: "test" } : {});
        for (const update of storedUpdates) {
            if (update.mode === "local") {
                continue; // Never auto-delete user-added files
            }

            // Purge test-mode files when test OTA usage is off — they cannot be offered and would
            // otherwise pile up (e.g. after a user disables "Enable test-net DCL usage").
            if (update.mode === "test" && purgeDisallowedTestFiles) {
                try {
                    await this.internal.otaService.delete({ filename: update.filename });
                    logger.info(`Cleaned up test-mode OTA file ${update.filename} (allowTestOtaImages is disabled)`);
                } catch (error) {
                    logger.warn(`Failed to clean up OTA file ${update.filename}:`, error);
                }
                continue;
            }

            if (nodeVersions.size === 0) {
                continue;
            }
            const key = `${update.vendorId}-${update.productId}`;
            const minNodeVersion = nodeVersions.get(key);
            if (minNodeVersion === undefined) {
                continue; // No known nodes for this vid/pid, keep the file
            }

            // If all nodes are at or above this stored version, it's obsolete
            if (update.softwareVersion <= minNodeVersion) {
                try {
                    await this.internal.otaService.delete({ filename: update.filename });
                    logger.info(
                        `Cleaned up obsolete OTA file ${update.filename} (all nodes at version >= ${minNodeVersion})`,
                    );
                } catch (error) {
                    logger.warn(`Failed to clean up OTA file ${update.filename}:`, error);
                }
            }
        }
    }

    /**
     * Checks all nodes, or optionally a defined one, for available updates from the DCL OTA Update Service.
     *
     * Returns a list of peers for which updates are available along with the collected update info.
     *
     * If `includeStoredUpdates` is set to true, stored OTA images are considered as update candidates alongside the DCL;
     * local and test-net images only with {@link State.allowTestOtaImages}. The DCL is always queried regardless, unless the OTA service is offline; across all candidates
     * the highest applicable and allowed version wins.
     */
    async queryUpdates(options: { peerToCheck?: ClientNode; includeStoredUpdates?: boolean } = {}) {
        const { peerToCheck, includeStoredUpdates = false } = options;
        const rootNode = Node.forEndpoint(this.endpoint) as ServerNode;
        this.#expireFailedUpdates();

        // Collect all client nodes and their versions, so we only need to check each version once
        const updateDetails = new Map<string, CollectedNodesUpdateInfo>();
        for (const peer of rootNode.peers) {
            if (this.internal.suppressUpdates) {
                return [];
            }
            if (peerToCheck !== undefined && peerToCheck !== peer) {
                continue;
            }

            const details = this.#preparePeerForUpdate(peer);
            if (details === undefined) {
                continue;
            }
            const { otaEndpoint, peerAddress, vendorId, productId, softwareVersion, softwareVersionString } = details;

            const key = `${vendorId}-${productId}-${softwareVersion}`;
            const versionData = updateDetails.get(key) ?? {
                vendorId,
                productId,
                softwareVersion,
                softwareVersionString,
                otaEndpoints: new Set<{ endpoint: Endpoint; peerAddress: PeerAddress }>(),
            };
            versionData.otaEndpoints.add({ endpoint: otaEndpoint, peerAddress });
            updateDetails.set(key, versionData);
        }
        if (updateDetails.size === 0) {
            logger.info(`No updatable nodes found`);
            return [];
        }

        const peersWithUpdates = new Array<{ peerAddress: PeerAddress; info: SoftwareUpdateInfo }>();
        for (const infos of updateDetails.values()) {
            if (this.internal.suppressUpdates) {
                return [];
            }
            try {
                const peers = await this.#checkProductForUpdates(infos, includeStoredUpdates);
                for (const peer of peers) {
                    const info = this.internal.knownUpdates.get(peer);
                    if (info === undefined) {
                        continue; // Race condition should normally not happen
                    }
                    peersWithUpdates.push({ peerAddress: peer, info });
                }
            } catch (error) {
                // We ignore any errors that occur, but log them
                logger.warn(
                    `Error while checking for updates for product ${infos.vendorId}-${infos.productId}:`,
                    error,
                );
            }
        }

        return peersWithUpdates;
    }

    /**
     * Check storage and DCL for updates for the given product/version, downloads it, and notify nodes if an update was
     * found
     */
    async #checkProductForUpdates(infos: CollectedNodesUpdateInfo, includeStoredUpdates: boolean) {
        const { vendorId, productId, softwareVersion, otaEndpoints } = infos;

        const updateDetails = await this.internal.otaService.checkForUpdate({
            vendorId,
            productId,
            currentSoftwareVersion: softwareVersion,
            includeStoredUpdates,
            isProduction: this.#includeTestImages ? undefined : true,
        });
        if (!updateDetails || this.internal.suppressUpdates) {
            return [];
        }
        const fd = await this.internal.otaService.downloadUpdate(updateDetails);

        logger.info(
            "OTA update available for",
            Diagnostic.dict({
                vendorId,
                productId,
                softwareVersion,
                file: fd.text,
                peers: [...otaEndpoints.values()].map(({ peerAddress }) => peerAddress.toString()),
            }),
        );

        // Request consent or notify peers about the update if we have consent
        for (const { endpoint, peerAddress } of otaEndpoints) {
            const { vid, pid, softwareVersion, softwareVersionString, releaseNotesUrl, specificationVersion, source } =
                updateDetails;
            const details: SoftwareUpdateInfo = {
                vendorId: vid,
                productId: pid,
                softwareVersion,
                softwareVersionString,
                releaseNotesUrl,
                specificationVersion,
                source,
            };
            this.internal.knownUpdates.set(peerAddress, details);

            const consent = this.internal.consents.find(
                consent =>
                    consent.vendorId === vendorId &&
                    consent.productId === productId &&
                    consent.targetSoftwareVersion === updateDetails.softwareVersion &&
                    PeerAddress.is(consent.peerAddress, peerAddress),
            );
            if (this.internal.suppressUpdates) {
                break;
            }
            if (consent !== undefined) {
                const entry = this.internal.updateQueue[this.#entryIndexFor(peerAddress)];
                if (entry?.phase.state === "failed") {
                    logger.debug(
                        `Update of node ${peerAddress.toString()} to version ${entry.targetSoftwareVersion} failed, not announcing it again`,
                    );
                    continue;
                }
                // We already have a consent for this update, so just announce the provider
                this.#queueUpdate({
                    endpoint,
                    vendorId,
                    productId,
                    targetSoftwareVersion: updateDetails.softwareVersion,
                    maxBdxBlockSize: consent.maxBdxBlockSize,
                    bdxAdditionalMrpDelay: consent.bdxAdditionalMrpDelay,
                    peerAddress,
                });
            } else {
                // Inform the application that an update is available and we need consent
                this.requestConsentForUpdate(peerAddress, details);
            }
        }

        return [...otaEndpoints.values()].map(({ peerAddress }) => peerAddress);
    }

    /**
     * Determine if we can request an update for the given node and return node meta-data needed for the process.
     * The Node needs to be commissioned (have a peer address), being not disabled, and having an active subscription
     * (to not work with outdated data).
     * When a node is applicable for updates, it also subscribes to softwareVersion changes to be able to react
     */
    #preparePeerForUpdate(peer: ClientNode) {
        const otaData = this.internal.announcements?.peerApplicableForUpdate(peer);
        if (otaData === undefined) {
            // We need more information on the node to request an update
            return;
        }
        const { peerAddress, otaEndpoint } = otaData;

        const { vendorId, productId, softwareVersion, softwareVersionString } = peer.stateOf(BasicInformationClient);

        // Todo sort out test vendors?

        // Node is applicable for update checks, register listener on softwareVersion to allow resetting update state
        const versionEvent = peer.eventsOf(BasicInformationClient).softwareVersion$Changed;
        if (!this.internal.versionUpdateObservers.observes(versionEvent)) {
            const that = this;
            function triggerVersionChange(newVersion: number) {
                that.#onSoftwareVersionChanged(peerAddress, newVersion);
            }

            this.internal.versionUpdateObservers.on(versionEvent, this.callback(triggerVersionChange));
        }

        // Listen to startUp event to detect reboots after applying — if the device reboots with the old version
        // softwareVersion$Changed won't fire (same value), so we feed the version through the same handler
        const startUpEvent = peer.eventsOf(BasicInformationClient).startUp;
        if (!this.internal.versionUpdateObservers.observes(startUpEvent)) {
            const that = this;
            function triggerStartUp({ softwareVersion }: { softwareVersion: number }, context?: ActionContext) {
                that.#onSoftwareVersionChanged(
                    peerAddress,
                    softwareVersion,
                    true,
                    hasRemoteActor(context) ? context.session : undefined,
                );
            }

            this.internal.versionUpdateObservers.on(startUpEvent, this.callback(triggerStartUp));
        }

        // A device that applies without restarting sends neither a version change nor startUp; the controller's
        // resubscription then reports the version it still runs
        const subscriptionEvent = peer.eventsOf(NetworkClient).subscriptionStatusChanged;
        if (!this.internal.versionUpdateObservers.observes(subscriptionEvent)) {
            const that = this;
            function triggerSubscribed(isActive: boolean) {
                if (isActive) {
                    that.#onSubscribedAfterApply(peerAddress);
                }
            }

            this.internal.versionUpdateObservers.on(subscriptionEvent, this.callback(triggerSubscribed));
        }

        return { otaEndpoint, peerAddress, vendorId, productId, softwareVersion, softwareVersionString };
    }

    /**
     * Handler for softwareVersion changes on a peer.
     *
     * Also called from the startUp event with `isStartUp = true`. When a device reboots after applying an update,
     * softwareVersion$Changed fires if the version actually changed (success). But if the device reboots with the
     * same version (failed apply), softwareVersion$Changed does NOT fire — so startUp feeds the version through
     * this same handler to detect the failure.  A device that does not restart at all is caught by
     * {@link #onSubscribedAfterApply}.
     */
    #onSoftwareVersionChanged(
        peerAddress: PeerAddress,
        newVersion: number,
        isStartUp = false,
        currentSession?: Session,
    ) {
        const entryIndex = this.#entryIndexFor(peerAddress);

        if (isStartUp) {
            const suppressedSessionId = this.internal.pendingStartUpSuppress.get(peerAddress);
            if (suppressedSessionId !== undefined) {
                this.internal.pendingStartUpSuppress.delete(peerAddress);
                // Use session from event context when available (avoids extra lookup); fall back to
                // SessionManager for local/test contexts where there is no remote actor.
                const sessionId = currentSession?.id ?? this.env.get(SessionManager).maybeSessionFor(peerAddress)?.id;
                if (sessionId === suppressedSessionId) {
                    // startUp is from the reboot we already handled via queryImage — suppress it
                    return;
                }
                // Different session — process normally
            }
        }

        if (entryIndex === -1) {
            return;
        }
        const entry = this.internal.updateQueue[entryIndex];
        const { phase } = entry;
        const previousProgressStatus = phase.state === "progress" ? phase.status : undefined;
        // An `announcing` entry was already restarted, as by the other event of the same reboot
        if (isUnderway(phase)) {
            logger.info(
                `Clearing in-progress update for node ${peerAddress.toString()} due to software version change. Last State was ${previousProgressStatus === undefined ? phase.state : OtaUpdateStatus[previousProgressStatus]}`,
            );
            this.#resetEntryProgress(entry);
        }
        const expectedVersion = entry.targetSoftwareVersion;
        if (newVersion < expectedVersion) {
            // Device rebooted during apply with old version — the update failed
            if (
                isStartUp &&
                (previousProgressStatus === OtaUpdateStatus.Applying ||
                    previousProgressStatus === OtaUpdateStatus.WaitForApply)
            ) {
                logger.warn(
                    `Device ${peerAddress.toString()} rebooted after applying update but reports softwareVersion ${newVersion} (expected >= ${expectedVersion}), update failed to apply`,
                );
                this.#failUpdate(entry);
                return;
            }
            logger.info(
                `Software version for node ${peerAddress.toString()} changed to ${newVersion}, but still below target version ${expectedVersion}, keeping in update queue`,
            );
            this.#triggerQueuedUpdate();
            return;
        }
        logger.info(
            `Software version changed to ${newVersion} (expected ${expectedVersion}) for node ${peerAddress.toString()}, removing from update queue`,
        );
        this.#completeUpdate(entryIndex, newVersion);
    }

    /**
     * Handler for a peer's subscription becoming active.
     *
     * An update in `Applying` whose peer reports a version below the target over a subscription established after the
     * device's restart deadline did not apply, so it is handled like a reboot into the old version.  The deadline is
     * {@link RebootResubscribeArmer.returnTimeout}, after which the armer forces that resubscription.
     */
    #onSubscribedAfterApply(peerAddress: PeerAddress) {
        const entryIndex = this.#entryIndexFor(peerAddress);
        const softwareVersion = (Node.forEndpoint(this.endpoint) as ServerNode).peers
            .get(peerAddress)
            ?.maybeStateOf(BasicInformationClient)?.softwareVersion;
        if (entryIndex === -1 || softwareVersion === undefined) {
            return;
        }
        const entry = this.internal.updateQueue[entryIndex];
        const { phase, targetSoftwareVersion } = entry;
        if (
            phase.state !== "progress" ||
            phase.status !== OtaUpdateStatus.Applying ||
            Time.nowMs < phase.since + RebootResubscribeArmer.returnTimeout(phase.applyDelay) ||
            softwareVersion >= targetSoftwareVersion
        ) {
            return;
        }

        logger.warn(
            `Device ${peerAddress.toString()} resubscribed after applying update but reports softwareVersion ${softwareVersion} (expected >= ${targetSoftwareVersion}), update failed to apply`,
        );
        this.#failUpdate(entry);
    }

    /** Removes the entry as done, with the consents up to the version the node now runs, and runs the queue on. */
    #completeUpdate(entryIndex: number, completedVersion: number) {
        const [entry] = this.internal.updateQueue.splice(entryIndex, 1);
        const { peerAddress } = entry;
        this.#abortAnnouncement(entry);
        this.internal.knownUpdates.delete(peerAddress);
        this.internal.pendingStartUpSuppress.delete(peerAddress);
        this.events.updateDone.emit(peerAddress);
        this.internal.consents = this.internal.consents.filter(
            ({ peerAddress: consentAddress, targetSoftwareVersion }) =>
                !PeerAddress.is(peerAddress, consentAddress) || targetSoftwareVersion > completedVersion,
        );
        this.#triggerQueuedUpdate();
    }

    /**
     * Marks the entry as failed and runs the queue on.  The entry and its consent stay for
     * {@link FAILED_UPDATE_RETENTION} after the first failure, so the node may still query and apply the update on its
     * own, but neither the queue nor a later update check announces it again.  A new consent does.  `updateFailed` is
     * emitted at the first failure only, not again when an update the node retried on its own fails again.
     */
    #failUpdate(entry: UpdateQueueEntry) {
        this.#abortAnnouncement(entry);
        entry.phase = { state: "failed" };
        this.internal.pendingStartUpSuppress.delete(entry.peerAddress);
        this.internal.updateStopped.emit(entry.peerAddress);
        if (entry.failedAt === undefined) {
            entry.failedAt = Time.nowMs;
            this.events.updateFailed.emit(entry.peerAddress);
        }
        this.#triggerQueuedUpdate();
    }

    /** Removes the entry with the consent for its target, reporting it as failed unless it already was. */
    #cancelEntry(entryIndex: number) {
        const [entry] = this.internal.updateQueue.splice(entryIndex, 1);
        const { peerAddress, targetSoftwareVersion } = entry;
        this.#abortAnnouncement(entry);
        this.internal.pendingStartUpSuppress.delete(peerAddress);
        this.#removeConsentFor(peerAddress, targetSoftwareVersion);
        this.internal.updateStopped.emit(peerAddress);
        if (entry.failedAt === undefined) {
            this.events.updateFailed.emit(peerAddress);
        }
        this.#triggerQueuedUpdate();
    }

    /**
     * Ends the record of a failed update of the peer, for a new consent: a resting `failed` entry is removed, so the
     * consent queues a fresh one, also when the node is offline now; an entry the node revived loses its `failedAt`.
     */
    #clearFailure(peerAddress: PeerAddress) {
        const entryIndex = this.#entryIndexFor(peerAddress);
        const entry = this.internal.updateQueue[entryIndex];
        if (entry?.failedAt === undefined) {
            return;
        }
        if (entry.phase.state === "failed") {
            this.internal.updateQueue.splice(entryIndex, 1);
        } else {
            entry.failedAt = undefined;
        }
    }

    /** Removes failed entries, with their consents, once {@link FAILED_UPDATE_RETENTION} has passed. */
    #expireFailedUpdates() {
        const now = Time.nowMs;
        this.internal.updateQueue = this.internal.updateQueue.filter(entry => {
            const { phase, failedAt } = entry;
            if (phase.state !== "failed" || failedAt === undefined || failedAt + FAILED_UPDATE_RETENTION > now) {
                return true;
            }
            logger.info(
                `Dropping the failed update of node ${entry.peerAddress.toString()} to version ${entry.targetSoftwareVersion} and its consent`,
            );
            this.#removeConsentFor(entry.peerAddress, entry.targetSoftwareVersion);
            return false;
        });
    }

    #removeConsentFor(peerAddress: PeerAddress, targetSoftwareVersion: number) {
        this.internal.consents = this.internal.consents.filter(
            consent =>
                !PeerAddress.is(consent.peerAddress, peerAddress) ||
                consent.targetSoftwareVersion !== targetSoftwareVersion,
        );
    }

    /**
     * Notify the application that consent is needed for the given update on the given peer
     */
    protected requestConsentForUpdate(peerAddress: PeerAddress, updateDetails: SoftwareUpdateInfo) {
        this.events.updateAvailable.emit(peerAddress, updateDetails);
    }

    /**
     * Add an update to the update queue and execute it.
     */
    #queueUpdate(update: UpdateConsent & { endpoint: Endpoint }) {
        const existing = this.internal.updateQueue[this.#entryIndexFor(update.peerAddress)];
        if (existing !== undefined) {
            if (isUnderway(existing.phase)) {
                // Don't disrupt it; the new version will be picked up on the next cycle
                logger.info(
                    `Update for node ${update.peerAddress.toString()} already in progress, skipping queue update`,
                );
                return;
            }
            existing.vendorId = update.vendorId;
            existing.productId = update.productId;
            existing.targetSoftwareVersion = update.targetSoftwareVersion;
            existing.endpoint = update.endpoint;
            existing.maxBdxBlockSize = update.maxBdxBlockSize;
            existing.bdxAdditionalMrpDelay = update.bdxAdditionalMrpDelay;
            logger.info(`Updated existing queued update for node ${update.peerAddress.toString()}`);
        } else {
            logger.info(`Queuing update consent for node ${update.peerAddress.toString()}`);
            this.internal.updateQueue.push({ ...update, phase: { state: "queued" } });
        }

        this.#triggerQueuedUpdate();
    }

    /**
     * Runs the update queue: resets stalled entries, and announces the first queued entry when no other entry is
     * active.  Entries reset for a retry go after fresh ones, the longest-waiting first, so one node that never
     * answers does not hold back the others.  While an entry waits or is active, a periodic timer runs the queue again
     * every 5 minutes; it is how an entry whose announcement failed is announced again, and how a stall is found.  A
     * failed entry is never announced and needs no timer.
     */
    #triggerQueuedUpdate() {
        if (this.internal.suppressUpdates) {
            return;
        }
        const now = Time.nowMs;
        let activeCount = 0;
        for (const entry of this.internal.updateQueue) {
            if (entry.phase.state === "queued" || entry.phase.state === "failed") {
                continue;
            }
            if (!this.#refreshBdxProgress(entry, now) && this.#isStalled(entry, now)) {
                logger.info(
                    `Resetting stalled OTA update state for node ${entry.peerAddress.toString()} due to inactivity`,
                );
                this.#resetEntryProgress(entry);
                continue;
            }
            activeCount++;
        }
        if (activeCount > 0) {
            if (!this.internal.updateQueueTimer?.isRunning) {
                this.#restartQueueTimer();
            }
            return;
        }

        this.internal.updateQueueTimer?.stop();
        const resetAt = ({ phase }: UpdateQueueEntry) =>
            phase.state === "queued" && phase.resetAt !== undefined ? phase.resetAt : 0;
        this.internal.updateQueue.sort((a, b) => resetAt(a) - resetAt(b));
        const nextEntry = this.internal.updateQueue.find(({ phase }) => phase.state === "queued");
        if (nextEntry === undefined) {
            return;
        }
        this.#startAnnouncement(nextEntry);
        this.#restartQueueTimer();
    }

    #restartQueueTimer() {
        this.internal.updateQueueTimer?.stop();
        this.internal.updateQueueTimer = this.periodicReactorTimer(
            "checkQueuedUpdates",
            Minutes(5),
            this.#triggerQueuedUpdate,
        ).start();
    }

    /**
     * Starts announcing this provider to the node of a queued entry, which usually answers with a QueryImage.  It
     * starts nothing while updates are suppressed, before the node is online with a fabric, while a BDX transfer for
     * the node runs, or when the entry is not `queued`.  The announcement runs on its own and is awaited by {@link #stopAnnouncements}.
     */
    #startAnnouncement(entry: UpdateQueueEntry) {
        const { announcements, runningAnnouncements } = this.internal;
        if (this.internal.suppressUpdates || entry.phase.state !== "queued") {
            return;
        }
        if (announcements === undefined) {
            logger.info(`Not yet initialized with peers, can not trigger update on node`, entry.peerAddress);
            return;
        }
        if (this.#bdxSessionFor(entry.peerAddress) !== undefined) {
            logger.info(`BDX transfer still active for node ${entry.peerAddress.toString()}, skipping announcement`);
            return;
        }

        const phase: UpdatePhase = { state: "announcing" };
        const abort = new Abort({ timeout: OTA_PROGRESS_TIMEOUT });
        entry.phase = phase;
        entry.announcement = abort;
        runningAnnouncements.set(
            abort,
            this.#runAnnouncement(announcements, entry, phase, abort).finally(() => runningAnnouncements.delete(abort)),
        );
    }

    /**
     * Announces and then moves the entry on: to `announced`, or back to `queued` when the announcement failed or was
     * aborted.  Once the entry left `phase`, the result is ignored, because a status or reset already decided how the
     * update goes on; on a removed entry it changes nothing.  Never rejects.
     */
    async #runAnnouncement(announcements: OtaAnnouncements, entry: UpdateQueueEntry, phase: UpdatePhase, abort: Abort) {
        const announced = await this.#announce(announcements, entry, abort);
        abort.close();
        if (entry.announcement === abort) {
            entry.announcement = undefined;
        }
        if (entry.phase === phase) {
            entry.phase = announced
                ? { state: "announced", since: Time.nowMs }
                : { state: "queued", resetAt: Time.nowMs };
        }
    }

    async #announce(announcements: OtaAnnouncements, { endpoint, peerAddress }: UpdateQueueEntry, abort: Abort) {
        logger.info(`Announcing OTA provider to node ${peerAddress.toString()}`);
        try {
            await abort.attempt(
                announcements.announceOtaProvider(
                    endpoint,
                    OtaSoftwareUpdateRequestor.AnnouncementReason.UpdateAvailable,
                    abort.signal,
                ),
            );
            return true;
        } catch (error) {
            if (abort.aborted) {
                if (abort.reason instanceof TimeoutError) {
                    logger.info(
                        `OTA provider announcement to node ${peerAddress.toString()} got no answer within ${Duration.format(OTA_PROGRESS_TIMEOUT)}`,
                    );
                }
            } else if (!(error instanceof MatterError)) {
                logger.warn(`Unexpected error announcing the OTA provider to node ${peerAddress.toString()}:`, error);
            } else if (causedBy(error, ClosedError)) {
                logger.debug(`Node ${peerAddress.toString()} closed the connection during the OTA announcement`);
            } else {
                logger.info(`Failed to announce the OTA provider to node ${peerAddress.toString()}:`, error);
            }
            return false;
        }
    }

    /** Aborts the running announcements and waits for them to end, so none outlives the node going offline. */
    async #stopAnnouncements() {
        const { runningAnnouncements } = this.internal;
        for (const abort of runningAnnouncements.keys()) {
            abort();
        }
        await Promise.all(runningAnnouncements.values());
    }

    /**
     * Forces an OTA update for a specific node identified by its peer address, vendor ID, product ID,
     * and target software version. This method adds an update consent for the specified node and announces the update
     * to it right away, also while updates of other nodes are in progress.  It does nothing when an update of this node
     * is underway with a BDX transfer running.  It announces nothing while any BDX transfer for the node runs or an
     * announcement for the node is already running.
     * It throws {@link OtaUpdateError} when the node is not applicable for updates, and {@link ImplementationError}
     * when the vendor or product ID do not match the node.
     * It does not wait for the announcement; once the node takes the update, the outcome is reported via the
     * `updateDone` and `updateFailed` events.
     * This can be used when an exact timing of the update is needed. When the update can be executed in a delayed/queued
     * manner, please use `addUpdateConsent()`.
     */
    async forceUpdate(peerAddress: PeerAddress, target: SoftwareUpdateManager.UpdateTarget) {
        const { vendorId, productId, targetSoftwareVersion } = target;
        assertTransferOptions(target);
        peerAddress = PeerAddress(peerAddress);
        const existingIndex = this.#entryIndexFor(peerAddress);
        const existingEntry = this.internal.updateQueue[existingIndex];
        if (existingEntry !== undefined && isUnderway(existingEntry.phase)) {
            // Check whether a BDX session is still active for this peer
            const bdxProtocol = this.env.get(BdxProtocol);
            const activeSession = this.#bdxSessionFor(peerAddress);
            if (activeSession !== undefined) {
                // Update is legitimately in progress, don't disrupt it
                logger.info(
                    `Force update for node ${peerAddress.toString()} skipped: BDX transfer is actively in progress`,
                );
                return;
            }
            // No active BDX session — entry is stale, clean it up
            logger.info(`Cleaning up stale update entry for node ${peerAddress.toString()} before forcing new update`);
            this.internal.updateQueue.splice(existingIndex, 1);
            this.#abortAnnouncement(existingEntry);
            this.internal.pendingStartUpSuppress.delete(peerAddress);
            try {
                await bdxProtocol.disablePeerForScope(peerAddress, this.storage, true);
            } catch (error) {
                MatterError.accept(error);
                logger.debug(`Error cleaning up stale BDX registration:`, error);
            }
        }

        const added = await this.addUpdateConsent(peerAddress, target);
        if (!added) {
            throw new OtaUpdateError(`Node at ${peerAddress.toString()} is not currently applicable for OTA updates`);
        }

        const entry = this.internal.updateQueue.find(
            e =>
                PeerAddress.is(e.peerAddress, peerAddress) &&
                e.vendorId === vendorId &&
                e.productId === productId &&
                e.targetSoftwareVersion === targetSoftwareVersion,
        );
        if (!entry) {
            throw new InternalError(`Failed to find queued update after adding consent`); // Should not happen
        }

        this.#startAnnouncement(entry);
    }

    /** Tries to cancel an ongoing OTA update for the given peer address. */
    async #cancelUpdate(peerAddress: PeerAddress) {
        peerAddress = PeerAddress(peerAddress);
        const bdxProtocol = this.env.get(BdxProtocol);

        // Disable the Peer on BdxProtocol for the OTA scope if registered and also cancel an open BDX session, if any
        await bdxProtocol.disablePeerForScope(peerAddress, this.storage, true);

        const entryIndex = this.#entryIndexFor(peerAddress);
        if (entryIndex < 0) {
            logger.warn(`No Ota update queued for node ${peerAddress.toString()}`);
            return;
        }

        const { phase } = this.internal.updateQueue[entryIndex];
        if (phase.state === "progress" && phase.status === OtaUpdateStatus.Applying) {
            logger.info(`Cannot cancel update for node ${peerAddress.toString()}, already applying`);
            return;
        }
        // Disarm only on an actual cancel — a too-late (already Applying) cancel returns above and must keep the peer
        // armed so the imminent reboot still gets fast re-subscription.
        this.internal.rebootResubscribeArmer?.disarm(peerAddress);
        logger.info(`Cancelled OTA update for node ${peerAddress.toString()}`);
        this.#cancelEntry(entryIndex);
    }

    /**
     * How BDX should carry this peer's pending update: the options given with its consent, else the general defaults
     * in {@link State}.  An absent value leaves the decision to the peer and its medium.
     *
     * A consent may exist before the update is queued, so both are consulted.
     */
    bdxTransferOptionsFor(peerAddress: PeerAddress) {
        peerAddress = PeerAddress(peerAddress);
        const matches = (candidate: PeerAddress) => PeerAddress.is(candidate, peerAddress);
        const pending =
            this.internal.updateQueue.find(entry => matches(entry.peerAddress)) ??
            this.internal.consents.find(consent => matches(consent.peerAddress));
        return {
            maxBlockSize: pending?.maxBdxBlockSize ?? this.state.maxBdxBlockSize,
            additionalMrpDelay: pending?.bdxAdditionalMrpDelay ?? this.state.bdxAdditionalMrpDelay,
        };
    }

    /**
     * Adds or updates a consent for a given peer address, vendor ID, product ID, and target software version.
     * Filters out existing consents for the given peer address and replaces them with the new one.
     * If the node associated with the peer address is applicable for an update, it schedules the update to happen with
     * the next queue slot, so potentially delayed.
     * This can be used when the update can be executed in a delayed/queued manner and it does not matter exactly when.
     */
    async addUpdateConsent(peerAddress: PeerAddress, target: SoftwareUpdateManager.UpdateTarget) {
        const { vendorId, productId, targetSoftwareVersion, maxBdxBlockSize, bdxAdditionalMrpDelay } = target;
        assertTransferOptions(target);
        peerAddress = PeerAddress(peerAddress);
        // Filter out all existing consents for this peer, they are replaced by the new one
        const consents = this.internal.consents.filter(consent => !PeerAddress.is(consent.peerAddress, peerAddress));

        const node = await (Node.forEndpoint(this.endpoint) as ServerNode).peers.forAddress(peerAddress);
        const {
            otaEndpoint,
            vendorId: nodeVendorId,
            productId: nodeProductId,
        } = this.#preparePeerForUpdate(node) ?? {};
        if (otaEndpoint !== undefined && (nodeVendorId !== vendorId || nodeProductId !== productId)) {
            throw new ImplementationError(`Node at ${peerAddress.toString()} does not match given vendorId/productId`);
        }

        consents.push({
            vendorId,
            productId,
            targetSoftwareVersion,
            maxBdxBlockSize,
            bdxAdditionalMrpDelay,
            peerAddress,
        });
        this.internal.consents = consents;
        this.#clearFailure(peerAddress);

        if (otaEndpoint === undefined) {
            logger.info(`Node ${peerAddress.toString()} is currently not applicable for OTA updates, try again later`);
            return false;
        }

        this.#queueUpdate({
            vendorId,
            productId,
            targetSoftwareVersion,
            maxBdxBlockSize,
            bdxAdditionalMrpDelay,
            peerAddress,
            endpoint: otaEndpoint,
        });
        return true;
    }

    /**
     * Checks if consent exists for the given peer address and optionally for a specific target software version.  A
     * failed update keeps its consent for 24 hours; an update cancelled with {@link removeConsent} loses it.
     */
    hasConsent(peerAddress: PeerAddress, targetSoftwareVersion?: number) {
        this.#expireFailedUpdates();
        return this.internal.consents.some(
            consent =>
                PeerAddress.is(consent.peerAddress, peerAddress) &&
                (targetSoftwareVersion === undefined || consent.targetSoftwareVersion === targetSoftwareVersion),
        );
    }

    /**
     * Checks for consent and removes it if present, also cancels if in progress. Use this to remove a formerly given
     * consent.
     */
    removeConsent(peerAddress: PeerAddress, targetSoftwareVersion?: number) {
        const consentIndex = this.internal.consents.findIndex(
            consent =>
                PeerAddress.is(consent.peerAddress, peerAddress) &&
                (targetSoftwareVersion === undefined || consent.targetSoftwareVersion === targetSoftwareVersion),
        );
        if (consentIndex >= 0) {
            this.internal.consents.splice(consentIndex, 1);
        } else {
            logger.info(
                `No consent to remove found for node ${peerAddress.toString()}${targetSoftwareVersion !== undefined ? ` for version ${targetSoftwareVersion}` : ""}`,
            );
        }
        return this.#cancelUpdate(peerAddress);
    }

    /**
     * Suppress the next startUp event from the given peer on the given session.
     * Called by OtaSoftwareUpdateProviderServer when a queryImage is detected as a post-reboot query
     * so the startUp event that follows is not treated as a new failure-after-apply.
     */
    suppressNextStartUp(peerAddress: PeerAddress, sessionId: number) {
        this.internal.pendingStartUpSuppress.set(peerAddress, sessionId);
    }

    /**
     * Handles the status change of an OTA update for a given peer device.
     *
     * This method processes OTA update status notifications received from a specified device.
     * Based on the status, it updates the internal state of the update queue, logs relevant
     * messages, and triggers the necessary events.
     *
     * With `Applying`, `applyDelay` is the `DelayedActionTime` the provider allowed the apply with, which the device
     * waits out before it applies and restarts.
     */
    onOtaStatusChange(peerAddress: PeerAddress, status: OtaUpdateStatus, toVersion?: number, applyDelay?: Duration) {
        if (this.internal.suppressUpdates) {
            // A post-dispose Applying would otherwise re-arm the already-disposed armer whose observers are
            // closed, leaving an entry that never gets a grace timer nor self-cleans.
            return;
        }
        peerAddress = PeerAddress(peerAddress);
        const entryIndex = this.#entryIndexFor(peerAddress);
        if (entryIndex < 0) {
            if (status !== OtaUpdateStatus.Cancelled) {
                logger.warn(
                    `Received OTA status update from unknown node ${peerAddress.toString()}, status=${OtaUpdateStatus[status]}`,
                );
            }
            return;
        }

        const entry = this.internal.updateQueue[entryIndex];
        if (status === OtaUpdateStatus.Done) {
            const completedVersion = toVersion ?? entry.targetSoftwareVersion;
            if (completedVersion < entry.targetSoftwareVersion) {
                // A requestor that consents itself may apply a lower stored image than the consented one
                logger.info(
                    `OTA update of node ${peerAddress.toString()} completed with version ${completedVersion}, below its target ${entry.targetSoftwareVersion}, keeping it queued`,
                );
                this.#retryUpdate(entry);
                return;
            }
            logger.info(`OTA update completed for node`, peerAddress.toString());
            this.#completeUpdate(entryIndex, completedVersion);
        } else if (status === OtaUpdateStatus.Cancelled) {
            // BDX transport interruption: reset the entry so it can be retried.
            // The intentional cancel path (#cancelUpdate) handles removal and updateFailed independently.
            logger.info(`OTA update BDX cancelled for node ${peerAddress.toString()}, resetting for retry`);
            this.internal.rebootResubscribeArmer?.disarm(peerAddress);
            this.#retryUpdate(entry);
        } else {
            logger.info(
                `OTA update status for node ${peerAddress.toString()} changed to ${OtaUpdateStatus[status]}${
                    toVersion !== undefined ? ` for version ${toVersion}` : ""
                }`,
            );
            const { phase } = entry;
            const wasApplying = phase.state === "progress" && phase.status === OtaUpdateStatus.Applying;
            entry.phase = {
                state: "progress",
                status,
                since: Time.nowMs,
                applyDelay: status === OtaUpdateStatus.Applying ? applyDelay : undefined,
                bdxTransferredBytes: phase.state === "progress" ? phase.bdxTransferredBytes : undefined,
            };

            // Once the device asked for (and we allowed) the final apply, it will reboot and return — arm fast
            // re-subscription so a non-persistent device is refreshed within the grace window rather than after the
            // full subscription timeout. notifyUpdateApplied (Done) must NOT disarm this — the subscription may
            // still be stale then; the armer resolves purely on new-session + data-flow.
            if (status === OtaUpdateStatus.Applying) {
                this.#rebootResubscribeArmer.arm(peerAddress, applyDelay);

                // A retransmitted ApplyUpdateRequest re-enters the provider's handler and reports Applying
                // again; the event says the peer reached this point, not how often it asked.
                if (!wasApplying) {
                    this.events.updateApplying.emit(peerAddress);
                }
            }
            if (phase.state === "failed") {
                this.#triggerQueuedUpdate();
            }
        }
    }

    /**
     * Ends the peer's queued update as failed when it cannot be delivered, because the peer's QueryImage found no image for
     * it.  The default `checkUpdateAvailable()` of OtaSoftwareUpdateProviderServer calls this when
     * {@link updateExistsFor} offers nothing.
     *
     * The update fails like an apply that did not take, reported via the `updateFailed` event, only when the peer is
     * being or was announced for it, reported no status since (querying, consent, download, apply, done), and still
     * runs a version below the update's target, both by its QueryImage and by the cached Basic Information.
     * A peer that already runs the target, as after a slow restart into it, keeps its entry, so the update ends as
     * done.
     */
    dropUndeliverableUpdate(peerAddress: PeerAddress, reportedSoftwareVersion: number) {
        peerAddress = PeerAddress(peerAddress);
        const entryIndex = this.#entryIndexFor(peerAddress);
        if (entryIndex < 0) {
            return;
        }
        const entry = this.internal.updateQueue[entryIndex];
        const { targetSoftwareVersion, phase } = entry;
        const waitsForQuery = phase.state === "announcing" || phase.state === "announced";
        const cachedSoftwareVersion = (Node.forEndpoint(this.endpoint) as ServerNode).peers
            .get(peerAddress)
            ?.maybeStateOf(BasicInformationClient)?.softwareVersion;
        if (
            !waitsForQuery ||
            reportedSoftwareVersion >= targetSoftwareVersion ||
            cachedSoftwareVersion !== reportedSoftwareVersion
        ) {
            return;
        }

        logger.info(
            `No image for the update to version ${targetSoftwareVersion} of node ${peerAddress.toString()}, the update failed`,
        );
        this.#failUpdate(entry);
    }

    override async [Symbol.asyncDispose]() {
        this.internal.suppressUpdates = true;
        await this.#stopAnnouncements();
        await this.internal.announcements?.close();
        this.internal.versionUpdateObservers.close();
        this.internal.rebootResubscribeArmer?.[Symbol.dispose]();
        await super[Symbol.asyncDispose]?.();
    }
}

export namespace SoftwareUpdateManager {
    export class State {
        /** Set this to true to also allow updates from the Test DCL, and to offer stored test-net and local images */
        allowTestOtaImages = false;

        /** Default Update check Interval */
        updateCheckInterval = Hours(24);

        /** Announce this controller as Update provider to all nodes */
        announceAsDefaultProvider = false;

        /** Interval to Announces this controller as Update provider. Must not be lower than 24h, `Instant` disables. */
        announcementInterval = Hours(24);

        /**
         * Offer a requestor that can obtain user consent itself (`RequestorCanConsent`) the newest applicable stored
         * image without a consent given to this manager, with `UserConsentNeeded`, and accept its apply.  Off by
         * default, so only nodes with a consent from the application are updated.  An update delegated this way has no
         * queue entry, so it is not reported via `updateDone` or `updateFailed`.
         *
         * A node with `LocalConfigDisabled` set is never asked to obtain consent itself.
         *
         * @see {@link MatterSpecification.v161.Core} § 11.20.3.4.1
         */
        delegateConsentToRequestor = false;

        /**
         * Caps the BDX block size offered for OTA transfers.  Unset accepts whatever the peer requests, which is the
         * transport maximum.
         *
         * A smaller block multiplies round trips, and each of those is bounded by the peer's BDX response budget, so
         * lower this only for a peer that cannot handle full-size blocks.
         */
        maxBdxBlockSize?: number = undefined;

        /**
         * Additive MRP retransmission margin for OTA transfers, overriding the margin the peer's medium implies.
         *
         * A BDX retransmission interval is capped so the whole schedule fits the peer's response budget, so values
         * above roughly 7s are inert.
         */
        bdxAdditionalMrpDelay?: Duration = undefined;
    }

    /** Identifies the update a consent applies to, and how to transfer it. */
    export interface UpdateTarget {
        vendorId: VendorId;
        productId: number;
        targetSoftwareVersion: number;

        /**
         * Caps the BDX block size for this transfer, overriding {@link State.maxBdxBlockSize}.  Unset falls back to
         * that default.
         */
        maxBdxBlockSize?: number;

        /**
         * Additive MRP retransmission margin for this transfer, overriding {@link State.bdxAdditionalMrpDelay} and the
         * margin the peer's medium implies.  Unset falls back to that default.
         */
        bdxAdditionalMrpDelay?: Duration;
    }

    export class Internal {
        /** Use this to pre-initialize consent to allow nodes to update automatically. The content will not be persisted! */
        consents = new Array<UpdateConsent>();

        otaService!: DclOtaUpdateService;

        /** Scope of the OTA storage, captured so a lookup cannot depend on the service still being constructed. */
        otaStorageScope?: StorageScope;

        checkForUpdateTimer!: Timer;

        updateQueue = new Array<UpdateQueueEntry>();

        updateQueueTimer?: Timer;

        announcements?: OtaAnnouncements;

        /** Announcements still running, also those whose entry moved on; aborted on going offline and on dispose. */
        runningAnnouncements = new Map<Abort, Promise<void>>();

        versionUpdateObservers = new ObserverGroup();

        knownUpdates = new PeerAddressMap<SoftwareUpdateInfo>();

        /**
         * Peer → session ID on which the reboot-triggering queryImage was received.
         *
         * Intentionally ephemeral (not persisted): the suppress window is sub-second — between the
         * queryImage response and the subsequent startUp event that follows on the same session.
         * Entries are consumed immediately when the matching startUp fires in #onSoftwareVersionChanged,
         * or cleaned up when the update is removed from the queue.
         */
        pendingStartUpSuppress = new PeerAddressMap<number>();

        rebootResubscribeArmer?: RebootResubscribeArmer;

        /** Raised whenever the node is not online, so update work cannot start before the first online transition. */
        suppressUpdates = true;

        /**
         * Emitted at every failure and every cancel of a queued update, also those `updateFailed` does not report again.
         * The OTA provider forgets the peer's update tokens on it.
         */
        updateStopped = Observable<[peer: PeerAddress]>();
    }

    export class Events extends EventEmitter {
        /** Emitted when an update is available for a Peer and there is no consent stored and contains update details */
        updateAvailable = Observable<[peer: PeerAddress, updateDetails: SoftwareUpdateInfo]>();

        /**
         * Emitted when a Peer has asked to apply the image it downloaded and this provider allowed it.
         *
         * This is the last thing a Peer needs from its provider: the download is complete, the
         * `ApplyUpdateRequest` is answered, and what follows — applying and reporting back — is the
         * Peer's own. {@link updateDone} is further off, because it waits for the `NotifyUpdateApplied`
         * a device sends after it has restarted.
         */
        updateApplying = Observable<[peer: PeerAddress]>();

        /** Emitted when an update for a Peer is finished */
        updateDone = Observable<[peer: PeerAddress]>();

        /**
         * Emitted when a queued update for a Peer fails for the first time or is cancelled before it failed.  A failed update keeps its consent for 24
         * hours, so the Peer may still retry it on its own; an update cancelled with `removeConsent()` loses its consent.
         */
        updateFailed = Observable<[peer: PeerAddress]>();

        announceAsDefaultProvider$Changed = Observable<[announceAsDefaultProvider: boolean]>();

        announcementInterval$Changed = Observable<[announcementInterval: Duration]>();
    }
}
