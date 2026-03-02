import { execSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCLUDED = new Set([".github", "manzanita-research.github.io"]);

const outDir = join(import.meta.dirname, "../src/content/projects");
mkdirSync(outDir, { recursive: true });

const fields = [
  "name",
  "description",
  "url",
  "stargazerCount",
  "pushedAt",
  "isArchived",
];

const raw = execSync(
  `gh repo list Manzanita-Research --visibility=public --limit=100 --json ${fields.join(",")}`,
  { encoding: "utf-8" },
);

const repos: Array<{
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  pushedAt: string;
  isArchived: boolean;
}> = JSON.parse(raw);

let count = 0;
for (const repo of repos) {
  if (EXCLUDED.has(repo.name)) continue;

  const filename = `${repo.name}.json`;
  writeFileSync(join(outDir, filename), JSON.stringify(repo, null, 2) + "\n");
  count++;
}

console.log(`Wrote ${count} project files to src/content/projects/`);
