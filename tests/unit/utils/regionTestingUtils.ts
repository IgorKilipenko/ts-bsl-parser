import { RegionStartContext } from "../../../src/antlr/generated/BSLParser";
import type { IActiveContext } from "../../../src/core/bslCodeEntities";

export class RegionTestUtils {
    public static checkIndexes = (ctx: Readonly<IActiveContext>): boolean => {
        let result = true;
        if (ctx.children?.length) {
            result = ctx.children.reduce<boolean>((res, curr) => {
                return res && RegionTestUtils.checkIndexes(curr) && curr.innerIndex > 0;
            }, true);
        }
        result =
            result &&
            !!ctx.regionEndContext?.start &&
            !!ctx.regionStartContext.stop &&
            ctx.regionEndContext.start.tokenIndex > ctx.regionStartContext.stop.tokenIndex;
        return result;
    };

    public static checkRegionsQueue = (queue: Readonly<IActiveContext>[]): boolean => {
        return queue
            .filter((ctx) => ctx.regionStartContext instanceof RegionStartContext)
            .reduce<boolean>((res, curr, i, arr) => {
                const prevCtx = i === 0 || curr.innerIndex === 0 ? null : arr[i - 1];
                return (
                    res &&
                    RegionTestUtils.checkIndexes(curr) &&
                    (!prevCtx ||
                        (!!prevCtx.regionStartContext.stop &&
                            prevCtx.regionStartContext.stop.tokenIndex < curr.regionStartContext.start!.tokenIndex &&
                            !!prevCtx.regionEndContext?.start &&
                            !!curr.regionEndContext?.stop &&
                            prevCtx.regionEndContext.start.tokenIndex > curr.regionEndContext.stop.tokenIndex))
                );
            }, true);
    };
}
