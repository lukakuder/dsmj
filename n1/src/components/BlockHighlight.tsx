import type { ReactNode } from 'react';

const VERSIONS = {
  highlight: 'border-yellow-300 bg-yellow-100',
  important: 'border-red-500 bg-red-100',
  warning: 'border-orange-400 bg-orange-100',
  success: 'border-green-500 bg-green-100',
  summary: 'border-blue-500 bg-blue-100',
};

export function BlockHighlight({ version, children }: { version: keyof typeof VERSIONS; children: ReactNode }) {
  return (
    <div className={`flex items-start gap-2 border-l-8 px-2 py-2 my-4 [&>:first-child]:mt-0! [&>:last-child]:mb-0! ${VERSIONS[version]}`}>
      {children}
    </div>
  );
}
