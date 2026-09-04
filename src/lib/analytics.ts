/**
 * Centralized analytics event architecture.
 *
 * `track()` is provider-agnostic. In production, wire this function to
 * Google Analytics, Google Tag Manager, or another approved provider —
 * every call site in the codebase stays unchanged.
 */
export type AnalyticsEvent =
  | "project_card_view"
  | "project_card_click"
  | "get_latest_price_click"
  | "enquire_now_click"
  | "request_price_click"
  | "brochure_click"
  | "site_visit_click"
  | "whatsapp_click"
  | "call_click"
  | "form_start"
  | "form_submit"
  | "faq_open";

export function track(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV !== "production") console.debug("[analytics]", event, payload);
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...payload });
}
