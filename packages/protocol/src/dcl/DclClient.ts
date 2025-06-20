/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import {
    DclApiErrorResponse,
    DclModelModelsWithVidPidResponse,
    DclModelVersionsWithVidPidResponse,
    DclModelVersionWithVidPidSoftwareVersionResponse,
    DclPkiCertificateResponse,
    DclPkiRootCertificatesResponse,
    DclPkiRootCertificateSubjectReference,
} from "#dcl/DclRestApiTypes.js";
import { MatterError } from "#general";

const DCL_PRODUCTION_URL = "https://on.dcl.csa-iot.org";
const DCL_TEST_URL = "https://on.test-net.dcl.csa-iot.org";

/** Base class for all DCL-related errors */
export class MatterDclError extends MatterError {}

/** Error thrown when fetching data from DCL fails */
export class MatterDclResponseError extends MatterDclError {
    constructor(path: string, error: DclApiErrorResponse) {
        super(`Error fetching ${path} from DCL: ${error.code} - ${error.message}`);
    }
}

/** A client clas to use "fetch" to get REST DAta from DCL (Decentraland) */
export class DclClient {
    #baseUrl: string;

    constructor(private readonly production: boolean = true) {
        this.#baseUrl = this.production ? DCL_PRODUCTION_URL : DCL_TEST_URL;
    }

    async #fetchJson<ResponseT>(path: string): Promise<ResponseT> {
        const url = new URL(path, this.#baseUrl);
        try {
            const response = await fetch(url.toString(), {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                signal: AbortSignal.timeout(5_000), // 5 seconds timeout
            });

            if (!response.ok) {
                throw new MatterDclResponseError(path, await response.json());
            }

            return await response.json();
        } catch (error) {
            if (error instanceof MatterDclResponseError) {
                throw error; // Re-throw custom DCL error
            }
            throw new MatterDclResponseError(path, {
                code: 500,
                message: error instanceof Error ? error.message : "Unknown Error",
                details: [],
            });
        }
    }

    async fetchRootCertificateList() {
        const certList = await this.#fetchJson<DclPkiRootCertificatesResponse>("/certificates/approved");
        if (certList?.approvedRootCertificates?.schemaVersion !== 0) {
            throw new MatterDclError(
                `Unsupported DCL Root Certificate schema version: ${certList.approvedRootCertificates.schemaVersion}`,
            );
        }
        return certList.approvedRootCertificates.certs;
    }

    async fetchRootCertificateBySubject(subject: DclPkiRootCertificateSubjectReference) {
        const path = `/certificates/${encodeURIComponent(subject.subject)}/${encodeURIComponent(subject.subjectKeyId)}`;
        const response = await this.#fetchJson<DclPkiCertificateResponse>(path);
        if (
            !response ||
            !response.approvedRootCertificates ||
            response.approvedRootCertificates.subject !== subject.subject ||
            response.approvedRootCertificates.subjectKeyId !== subject.subjectKeyId ||
            response.approvedRootCertificates.schemaVersion !== 0
        ) {
            throw new MatterDclError(
                `Root certificate not found for subject: ${subject.subject}, subjectKeyId: ${subject.subjectKeyId}`,
            );
        }
        return response.approvedRootCertificates.certs;
    }

    async fetchModelByVidPid(vid: number, pid: number) {
        const path = `/models/model/${encodeURIComponent(vid)}/${encodeURIComponent(pid)}`;
        const response = await this.#fetchJson<DclModelModelsWithVidPidResponse>(path);
        if (
            !response ||
            !response.model ||
            response.model.vid !== vid ||
            response.model.pid !== pid ||
            response.model.schemaVersion !== 0
        ) {
            throw new MatterDclError(`Model not found for VID: ${vid}, PID: ${pid}`);
        }
        return response.model;
    }

    async fetchModelVersionsByVidPid(vid: number, pid: number) {
        const path = `/models/versions/${encodeURIComponent(vid)}/${encodeURIComponent(pid)}`;
        const response = await this.#fetchJson<DclModelVersionsWithVidPidResponse>(path);
        if (
            !response ||
            !response.modelVersions ||
            response.modelVersions.vid !== vid ||
            response.modelVersions.pid !== pid ||
            response.modelVersions.schemaVersion !== 0
        ) {
            throw new MatterDclError(`Model versions not found for VID: ${vid}, PID: ${pid}`);
        }
        return response.modelVersions.softwareVersions;
    }

    async fetchModelVersionByVidPidSoftwareVersion(vid: number, pid: number, softwareVersion: number) {
        const path = `/models/versions/${encodeURIComponent(vid)}/${encodeURIComponent(pid)}/${encodeURIComponent(softwareVersion)}`;
        const response = await this.#fetchJson<DclModelVersionWithVidPidSoftwareVersionResponse>(path);
        if (
            !response ||
            !response.modelVersion ||
            response.modelVersion.vid !== vid ||
            response.modelVersion.pid !== pid ||
            response.modelVersion.softwareVersion !== softwareVersion ||
            response.modelVersion.schemaVersion !== 0
        ) {
            throw new MatterDclError(
                `Model version not found for VID: ${vid}, PID: ${pid}, Software Version: ${softwareVersion}`,
            );
        }
        return response.modelVersion;
    }
}
