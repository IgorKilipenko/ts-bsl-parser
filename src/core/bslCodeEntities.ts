import type { RegionStartContext, RegionNameContext, RegionEndContext, FunctionContext, ProcedureContext } from "../antlr/generated/BSLParser";

export interface IBslRawRegion {
    start: RegionStartContext | null;
    end: RegionEndContext | null;
    name: RegionNameContext | null;
    innerIndex: number;
    parent?: IBslRawRegion | null;
    regions?: Array<IBslRawRegion> | null;
    functions?: Array<FunctionContext | ProcedureContext> | null;
}

export class BslRawRegion implements IBslRawRegion {
    public readonly start: RegionStartContext | null = null;

    public readonly end: RegionEndContext | null = null;

    public readonly name: RegionNameContext | null = null;

    public readonly innerIndex: number = 0;

    public readonly parent: IBslRawRegion | null = null;

    public readonly regions: Array<IBslRawRegion> | null = null;

    constructor(options: {
        start?: RegionStartContext | null;
        end?: RegionEndContext | null;
        name?: RegionNameContext | null;
        innerIndex?: number | null;
        parentRegion?: IBslRawRegion | null;
        innerRegions?: Array<IBslRawRegion> | null;
    }) {
        this.start = options.start ?? null;
        this.end = options.end ?? null;
        this.name = options.name ?? null;
        this.innerIndex = options.innerIndex ?? 0;
        this.parent = options.parentRegion ?? null;
        this.regions = options.innerRegions ?? null;

        console.assert(Object.values(options).find(v => v !== null && v !== undefined));
    }
}

export interface IBslCodePosition {
    line: number;
    charter: number;
}

export interface IBslTextPosition {
    start: IBslCodePosition;
    end: IBslCodePosition;
}

export interface IBslCodeEntity {
    isModule: boolean;
    isCodeBlock: boolean;
    parentEntity: IBslCodeEntity | null;
    innerEntities: Array<IBslCodeEntity> | null;
    position: IBslTextPosition | null;
}

export interface IBslNamedCodeEntity extends IBslCodeEntity {
    name: string;
}

export interface IBslModule extends IBslCodeEntity {
    regions: Array<IBslRawRegion> | null;
}

export class BslModule implements IBslModule {
    readonly isModule: boolean;

    readonly isCodeBlock: boolean;

    readonly parentEntity: IBslCodeEntity | null;

    position: IBslTextPosition | null;

    innerEntities: Array<IBslCodeEntity> | null;

    regions: Array<IBslRawRegion> | null;

    constructor(regions = null, innerEntities = null, position = null) {
        this.isModule = true;
        this.isCodeBlock = true;
        this.parentEntity = null;
        this.innerEntities = innerEntities;
        this.position = position;
        this.regions = regions;
    }
}

export interface IBslCodeBlock extends IBslCodeEntity {}

export interface IBslFunction extends IBslCodeEntity {}
