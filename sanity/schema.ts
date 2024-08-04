import { type SchemaTypeDefinition } from "sanity";
import { projectsType } from "./schemas/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectsType],
};
