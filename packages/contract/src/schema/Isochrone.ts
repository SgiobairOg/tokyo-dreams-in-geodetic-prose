import { z } from "zod";

// Coordinates

export const CoordinateSchema = z.object({
  lat: z.number().gte(-90).lte(90),
  lon: z.number().gte(-180).lte(180),
});

export const CoordinatesSchema = z.array(CoordinateSchema);

export type Coordinate = z.TypeOf<typeof CoordinateSchema>;
export type Coordinates = z.TypeOf<typeof CoordinatesSchema>;

// Commute Time

export const CommuteTimeSchema = z.number().int().gte(10);

export type CommuteTime = z.TypeOf<typeof CommuteTimeSchema>;

// Isochrone component vectors

export const IsochroneVectorLengthSchema = z
  .number()
  .nonnegative()
  .gt(0)
  .optional();

export const IsochroneVectorSchema = z.object({
  bearing: z.number().int().nonnegative().lt(360), // Zero based integer angle for the vector (0 - 359)
  originPoint: CoordinateSchema,
  endPoint: CoordinateSchema.optional(),
  lastCalculated: z.string().datetime().optional(),
});

export const IsochroneVectorsSchema = z.array(IsochroneVectorSchema);

export const IsochroneVectorWalkParams = z.object({
  vector: IsochroneVectorSchema,
  distance: IsochroneVectorLengthSchema,
  targetCommute: CommuteTimeSchema,
});

export const IsochroneVectorWalkMethodSchema = z
  .function()
  .args(IsochroneVectorWalkParams)
  .returns(IsochroneVectorSchema);

export type IsochroneVector = z.TypeOf<typeof IsochroneVectorSchema>;
export type IsochroneVectors = z.TypeOf<typeof IsochroneVectorsSchema>;
export type IsochroneVectorWalkMethod = z.TypeOf<
  typeof IsochroneVectorWalkMethodSchema
>;

// Isochrone

export const IsochroneSchema = z.object({
  id: z.string().uuid(),
  originPoint: CoordinateSchema,
  originName: z.string().max(256).min(2),
  commuteTime: CommuteTimeSchema,
  vectors: IsochroneVectorsSchema,
});

export type Isochrone = z.TypeOf<typeof IsochroneSchema>;
