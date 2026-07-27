export type EcosystemNodeDef = {
  id: string;
  label: string;
  description: string;
};

export const ecosystemNodes: EcosystemNodeDef[] = [
  { id: "website", label: "Website", description: "The front door — fast, premium, built to convert visitors into leads." },
  { id: "automation", label: "Automation", description: "The workflows that remove manual work from your team's day." },
  { id: "ai", label: "AI", description: "Agentic systems layered on top — support, drafting, decisioning." },
  { id: "software", label: "Software", description: "Bespoke internal tools built around how your business actually runs." },
  { id: "brand", label: "Brand", description: "The identity that makes every touchpoint instantly recognizable." },
  { id: "growth", label: "Growth", description: "SEO, content, and funnels that compound traffic into revenue." },
  { id: "analytics", label: "Analytics", description: "The instrumentation that turns activity into decisions." },
  { id: "business", label: "Business", description: "Every system above, converging on one outcome: your business scaling." },
];

/** A cycle plus a few cross-links so the network reads as a system, not a ring. */
export const ecosystemEdges: [string, string][] = [
  ["website", "automation"],
  ["automation", "ai"],
  ["ai", "software"],
  ["software", "brand"],
  ["brand", "growth"],
  ["growth", "analytics"],
  ["analytics", "business"],
  ["business", "website"],
  ["website", "ai"],
  ["automation", "analytics"],
  ["software", "growth"],
  ["brand", "business"],
];
