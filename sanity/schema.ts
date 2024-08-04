import { type SchemaTypeDefinition } from "sanity";
import { projectsType } from "./schemas/projects";
import { caseStudy } from "./schemas/caseStudies";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectsType, caseStudy],
};
