import { RegionStartContext } from "../../../src/antlr/generated/BSLParser";
import type { IActiveContext } from "../../../src/core/bslCodeEntities";

export class RegionTestUtils {
    public static checkIndexes = (ctx: Readonly<IActiveContext>): boolean => {
        let result = true;
        if (ctx.childrenCtx?.length) {
            result = ctx.childrenCtx.reduce<boolean>((res, curr) => {
                return res && RegionTestUtils.checkIndexes(curr) && curr.innerIndex > 0;
            }, true);
        }
        result =
            result &&
            !!ctx.endCtx?.start &&
            !!ctx.ctx.stop &&
            ctx.endCtx.start.tokenIndex > ctx.ctx.stop.tokenIndex;
        return result;
    };

    public static checkRegionsQueue = (queue: Readonly<IActiveContext>[]): boolean => {
        return queue
            .filter((ctx) => ctx.ctx instanceof RegionStartContext)
            .reduce<boolean>((res, curr, i, arr) => {
                const prevCtx = i === 0 || curr.innerIndex === 0 ? null : arr[i - 1];
                return (
                    res &&
                    RegionTestUtils.checkIndexes(curr) &&
                    (!prevCtx ||
                        (!!prevCtx.ctx.stop &&
                            prevCtx.ctx.stop.tokenIndex < curr.ctx.start!.tokenIndex &&
                            !!prevCtx.endCtx?.start &&
                            !!curr.endCtx?.stop &&
                            prevCtx.endCtx.start.tokenIndex > curr.endCtx.stop.tokenIndex))
                );
            }, true);
    };
}
