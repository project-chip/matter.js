/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matter, MatterModel, ValidateModel } from "../../../src/model/index.js";

let matterModel: MatterModel;
let validationResult: ValidateModel.Result | undefined;

function instantiate() {
    if (!matterModel) {
        matterModel = new MatterModel(Matter);
    }
    return matterModel;
}

function validate() {
    if (!validationResult) {
        validationResult = ValidateModel(instantiate());
        validationResult.report();
    }
    return validationResult;
}

describe("Matter", () => {
    it("instantiates model", () => {
        expect(() => {
            instantiate();
        }).not.toThrow();
    });

    it("validates", () => {
        expect(() => {
            validate();
        }).not.toThrow();
    });

    it("has not increased in errors", () => {
        expect(validate().errors.length).toBeLessThanOrEqual(16);
    });

    it("has not decreased in scope", () => {
        expect(validate().elementCount).toBeGreaterThanOrEqual(3582);
    });
});
