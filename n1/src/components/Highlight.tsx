import type { ReactNode } from "react";

const VERSIONS = {
  highlight: 'bg-yellow-200',
  important: 'bg-red-300',
  warning: 'bg-orange-300',
  success: 'bg-green-300',
  summary: 'bg-blue-200',
};

export function Highlight({ version, children }: {
  version: keyof typeof VERSIONS;
  children: ReactNode;
}) {
  return (
    <span className={`inline rounded px-1 ${VERSIONS[version]}`}>{children}</span>
  );
}
  