import { buildDashboardModel } from '$lib/server/search-console/report-store.js';

export async function load() {
  return buildDashboardModel();
}
