export function isDedicatedProject(projectId: string, expectedProjectId: string) {
  return /^[a-z][a-z0-9-]{4,28}[a-z0-9]$/.test(projectId)
    && projectId === expectedProjectId
    && !/elota|escuinapa|demo|preview|placeholder/i.test(projectId);
}
export function isDedicatedBucket(bucket: string, projectId: string) {
  return bucket === `${projectId}.firebasestorage.app` || bucket === `${projectId}.appspot.com`;
}
